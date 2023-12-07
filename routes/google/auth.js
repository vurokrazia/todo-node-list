
const express = require('express');
const app = express.Router();

const session = require('express-session');
const passport = require('passport');
const User = require('../../models/User');
const { findUserByEmail } = require('../../repository/mongo/users');
const {GOOGLE_ID_CLIENTE_AUTH,
  GOOGLE_SECRET_AUTH} = require('../../lib/confg');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(session({
  secret: 'tu_secreto', // Elige una cadena secreta para firmar la ID de sesión
  resave: false, // No volver a guardar la sesión si no se modificó
  saveUninitialized: false // No guardar la sesión si es nueva y no se modificó
}));

// Inicializar Passport y sesiones de Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: GOOGLE_ID_CLIENTE_AUTH,
  clientSecret: GOOGLE_SECRET_AUTH,
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
async function (accessToken, refreshToken, profile, done) {
  // Aquí tu lógica de autenticación o creación de usuario
  console.log(profile);
  const findUser = await findUserByEmail(profile.emails[0].value);
  if (findUser) {
    done(null, findUser);            
  } else {
    const payload = {};
    payload.name = profile.displayName;
    payload.password = '123123232312131';
    payload.username = '23ssadsa';
    payload.email = profile.emails[0].value;
    payload.photo = profile.photos[0].value;
    payload.provider = profile.provider;
    const user = new User(payload);
    await user.save();
    console.log(user);
    done(null, user);
  }
}
));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log(id);
  done(id);
  // Aquí debes buscar al usuario en tu base de datos usando el ID
  // y luego llamar a done con el usuario
});

app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Autenticación exitosa, redirigir a casa.
    console.log(res.user);
    res.redirect('/');
  });


module.exports = app;
