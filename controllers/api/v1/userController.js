const { getAllUsers, createUser, getUserById, findUserByEmail } = require('./../../../repository/mongo/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  async index(req, res) {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch ({ message }) {
      console.error(message);
      res.status(400).json({ message });
    }
  },
  async create(req, res) {
    try {
      const newUser = await createUser(req.body);
      res.status(201).json({ newUser });
    } catch ({ message }) {
      res.status(400).json({ message });
    }
  },
  async find(req, res) {
    try {
      const user = await getUserById(req.params.id);
      res.status(200).json(user);
    } catch ({ message }) {
      res.status(422).json({ message });
    }
  },
  // Aquí puedes agregar más métodos para Read, Update, Delete
  async login({ body: {email, password }}, res){
    try {
      // Buscar el usuario por email
      const user = await findUserByEmail(email);
      if (!user) {
        return res.status(401).send('Credenciales incorrectas');
      }
        
      // Comparar la contraseña con el hash almacenado
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send('Credenciales incorrectas');
      }
        
      const token = jwt.sign({ user }, 'SECRET_KEY', { expiresIn: '2h' });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor');
    }
  } 
};

module.exports = userController;
