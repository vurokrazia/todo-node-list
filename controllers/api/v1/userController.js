const { getAllUsers, createUser, getUserById } = require('./../../../repository/mongo/users')

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
            const newUser = await createUser(req.body)
            res.status(201).json({ newUser });
        } catch ({ message }) {
            res.status(400).json({ message });
        }
    },
    async find(req, res) {
        try {
            const user = await getUserById(req.params.id)
            res.status(200).json(user)
        } catch ({ message }) {
            res.status(422).json({ message })
        }
    }
    // Aquí puedes agregar más métodos para Read, Update, Delete
};

module.exports = userController;
