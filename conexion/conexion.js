const mysql = require('mysql');
module.exports = () =>
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'banco'
    });/*
//miercoles
const mongoose = require('mongoose')
const user = 'vivian'
const password = 'yuliana17'
const database = 'banco'
const uri = `mongodb+srv://${user}:${password}@cluster0.iyled.mongodb.net/${database}?retryWrites=true&w=majority`
module.exports = () => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
/*
module.exports = () => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const mongoose = require('mongoose');
const user = 'root';
const password = 'ingsis1026';
const database = 'banco';
const uri = `mongodb+srv://${user}:${password}@cluster0.mlwqx.mongodb.net/${database}?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) //miercoles


const mongoose = require('mongoose');
const user = 'root';
const password = 'ingsis1026';
const database = 'banco';
const uri = `mongodb+srv://${user}:${password}@cluster0.mlwqx.mongodb.net/${database}?retryWrites=true&w=majority`
module.exports = () => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) */