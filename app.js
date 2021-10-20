const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path')
const session=require('express-session')
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'vista'))
app.use(session({
    secret:'123',
    resave:true,
    saveUninitialized:true 
   
   }));
app.use(express.urlencoded({ 
    extended: true
    })) 
    app.use(require('./rutas/rutas'))
app.use((err, req, res, next) => {
    res.send({ err: err.message })
})
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
        console.log(`ha ingresado al servidor ${app.get('port')}`)
    })




/*const express = require('express');//aqui requerimos los paquetes descargados
const morgan = require('morgan');
const app = express();
const path = require('path')
const sesion=require('express-session')
app.use(morgan('dev'));
app.use(require('./rutas/rutas'))
app.use(express.static(path.join(__dirname, 'public')))//esta linea encuentra los estilos,imagenes,fuentes etc 
app.set('view engine', 'ejs')//esta linea reconoce los comandos para generar las vistas ejs
app.set('views', path.join(__dirname, 'vista'))//aca el join se encarga de unir los directorios, el nombre de las carpetas y encuentra el html sin estilos

//app.use(require('./rutas/rutas'))//esta linea requiere o llama a las rutas
app.use((err, req, res, next) => {//esta linea atrapa los errores y los muestra ya sea en la vista o si voy hacer un logueo etc
    res.send({ err: err.message })//en esta linea el send muestra la respuesta es decir el error por mensaje
})
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
        console.log(`ha ingresado al servidor ${app.get('port')}`)
    })
    /* app.use(express.urlencoded({ / / clase del viernes
    extended: true
    })) * /pongo
    app.use(require('./rutas/rutas'))

    app.use((err, req, res, next) => {
        res.send({ err: err.message })
    })

    //servidor
    app.set('port', process.env.PORT || 3000);
    app.listen(app.get('port'), () => {
        console.log(`ha ingresado al servidor ${app.get('port')}`)
    })















    /*
    const http = require('http');
    const server = http.createServer((req, res) => {
        console.log("en conexion")
        res.end("Conectado")
    })


    server.listen(3000, () => {
            console.log("esperando...")

        })
        //servidor
    app.set('port', process.env.PORT || 3000);
    app.listen(app.get('port'), () => {
        console.log(`ha ingresado al servidor ${app.get('port')}`)
    })
         
    /*const express = require('express');
    const morgan = require('morgan');
    const app = express();
    const path = require('path')
    app.use(morgan('dev'));
    app.use(require('./rutas/rutas'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'vista'));
    app.use((err, req, res, next) => {
        res.send({ err: err.message });

    });




    //servidor
    app.set('port', process.env.PORT || 3000);
    app.listen(app.get('port'), () => {
        console.log(`ha ingresado al servidor ${app.get('port')}`)
    })*/
   /* const mongoose=require('mongoose');
const user='root';
const password='javierocampo1234'
const database='Banco'
const uri=`mongodb+srv://${user}:${password}@cluster0.ln9ko.mongodb.net/${database}?retryWrites=true&w=majority`
module.exports=()=>mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})*/