const mongoose = require('mongoose');
const { MONGO_URI } = require('./confg');
const mongoDBUri = 'mongodb+srv://'+MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // Aquí puedes añadir más opciones de configuración según sea necesario
};

mongoose.connect(mongoDBUri, options)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));
