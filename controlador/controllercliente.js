const connection = require('../conexion/conexion');
const cnn = connection();//esta variable tiene todos los objetos con la que voy a conectar, interactuar con la base de datos
const { render } = require('ejs');
const bcryptjs=require('bcryptjs')
const session =require('express-session')
const controllercliente = {};



controllercliente.consultacliente = (req, res, next) => {
   
    cnn.query('SELECT * FROM clientes', (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("error en la consulta")
        } else {
            console.log(resbd)
            res.render('clientes', { datos: resbd })

        }
    })
}

    
controllercliente.insertarcliente =async (req, res, next) => {
    const c = req.body.doccli
    const n = req.body.nomcli
    const a = req.body.apecli
    const o = req.body.correocli
    const l = req.body.celular
    const x = req.body.sexo
    const i = req.body.fechanaccli
    
    cnn.query('INSERT INTO clientes SET?', { doccli: c, nomcli: n, apecli: a, correocli: o,celular: l, sexo: x,fechanaccli:i }, (err, resbd) => {
        if (err) {
            next(new Error(err))
        } else {
            //console.log(resbd)
            res.redirect('/clientes')
        }
    })
}
controllercliente.consultacredito=(req,res,next)=>{

   
    cnn.query('SELECT * FROM creditos',(err,resbd)=>{
        if(err){
          next(new Error(err))  
          console.log("Error en la consulta")
        }
        else{
           // console.log(resbd)
            res.render('creditos',{datos:resbd}); 
           
     }
 
    }) 
    
 }
 controllercliente.insertarcredito =async (req, res, next) => {
    const c = req.body.codigocredito
    const n = req.body.doccli
    const a = req.body.codlinea
    const o = req.body.montoprestado
    const l = req.body.fechaaprobada
    const x = req.body.plazo
   
    console.log(d, u)
    cnn.query('INSERT INTO creditos SET?', {codigocredito: c, doccli: n, codlinea: a, montoprestado: o,cefechaaprobada: l, plazo: x}, (err, resbd) => {
        if (err) {
            next(new Error(err))
        } else {
            //console.log(resbd)
            res.redirect('/creditos')
        }
    })
}

module.exports = controllercliente
