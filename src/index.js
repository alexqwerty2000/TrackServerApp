require('./routes/authRoutes')
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mangoUri = "mongodb+srv://alexwerty2000:qwerty2000@richland-nrvm3.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mangoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoose instance')
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to DB', err)
});


app.get('/', (req,res) => {
    res.send('Hi there!')
});


app.listen(3000, () => {
    console.log('App listenig on port 3000');
});