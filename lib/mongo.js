const { MongoClient } = require('mongodb');

const mongoDBUri = 'mongodb+srv://'+process.env.MONGO_URI;
const dbName = 'myProject';
const client = new MongoClient(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function connect() {
    try {
        await client.connect();
        console.log('Conectado a MongoDB');
        return client.db(dbName);
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

module.exports = connect;
