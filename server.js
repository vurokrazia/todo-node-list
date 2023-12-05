require('dotenv').config();
require('./lib/mongoose');

const express = require('express')
const apiRoutes = require('./routes/api')
const app = express()
const port = 3000

app.use(express.json());
app.use('/api', apiRoutes);
app.get('/', (req, response) => { response.send('hello world') })
app.listen(port, () => {
    console.log(`Start runnig server on port: ${port}`);
})
