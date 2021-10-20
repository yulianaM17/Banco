const connection = require('../conexion/conexion');
const cnn = connection();//esta variable tiene todos los objetos con la que voy a conectar, interactuar con la base de datos
const { render } = require('ejs');
const bcryptjs=require('bcryptjs')
const session =require('express-session')
const controllerusuarios = {};

controllerusuarios.consultausuarios=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('usuarios',{datos:resbd});
       }
   }) 
   
}
controllerusuarios.insertarusuarios=async(req,res,next)=>{
const d=req.body.doccli;
const u=req.body.nomusu;
const c=req.body.clave;
const r=req.body.rol;
const e=req.body.estado;
const i=req.body.imagen;
const password=await bcryptjs.hash(c,8)
       
cnn.query('INSERT INTO usuarios SET?',{doccli:d,nomusu:u,clave:password,rol:r,estado:e,imagen:i},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('clientes');
     }
 
 
});


}}

controllerusuarios.econsultacliente = (req, res, next) => {
   
    cnn.query('SELECT * FROM clientes', (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("error en la consulta")
        } else {
            console.log(resbd)
            res.render('clientesempleado', { datos: resbd })

        }
    })
}
controllerusuarios.einsertarcliente =async (req, res, next) => {
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
            res.redirect('/vistaempleado')
        }
    })
}
controllerusuarios.consultacreditose=(req,res,next)=>{
    
   
   cnn.query('SELECT * FROM creditos',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('empleadocreditos',{datos:resbd});
       }
   }) 
   
}
controllerusuarios.tarcreditose=async(req,res,next)=>{
const d=req.body.codigocredito;
const u=req.body.doccli;
const c=req.body.codlinea;
const r=req.body.montoprestado;
const e=req.body.fechaaprobada;
const i=req.body.plazo;   
cnn.query('INSERT INTO creditos SET?',{codigocredito:d,doccli:u,codlinea:c,montoprestado:r,fechaaprobada:e,plazo:i},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('/creditos');
     }
 
 
})
}

module.exports = controllerusuarios
