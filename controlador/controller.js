const connection = require('../conexion/conexion');
const cnn = connection();//esta variable tiene todos los objetos con la que voy a conectar, interactuar con la base de datos
const { render } = require('ejs');
const bcryptjs=require('bcryptjs')
const session =require('express-session')
const controller = {};
controller.index = (req, res, next) => {//esta funcion conecta directamente con el login
    //txt = "conexion ok"
    //res.render({ txt }) /
    //console.log("conexion ok")
    res.render('login')
    res.send("error en controlador")

}
controller.consultageneral=(req,res,next)=>{
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
    else{
        res.redirect('/');
    }
}
controller.consultarcreditoscli=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM creditos INNER JOIN clientes on( creditos.doccli=clientes.doccli) INNER JOIN usuarios on(usuarios.doccli=clientes.doccli) WHERE nomusu=?',[req.session.uss],(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('credcli',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}
controller.consultarusuariocli=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios WHERE doccli="'+[docc]+'"',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('datoscli',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}
controller.consultalineascli=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM lineas INNER JOIN creditos on(lineas.codlinea=creditos.codlinea) ',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('lineascli',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}
controller.insertar=async(req,res,next)=>{
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
         res.redirect('usuarios');
     }
 
 
});


}
controller.consultalinea=(req,res,next)=>{

    cnn.query('SELECT * FROM lineas',(err,resbd)=>{
        if(err){
          next(new Error(err))  
          console.log("Error en la consulta")
        }
        else{
           // console.log(resbd)
            res.render('lineas',{datos:resbd}); 
           
     }
 
    }) 
    
 }
 controller.insertarlineaaa =async (req, res, next) => {
    const w = req.body.codlinea
    const q = req.body.nomlinea
    const y = req.body.montomaxicredito
    const z = req.body.plazomaxcred
    console.log(w,q)
    cnn.query('INSERT INTO lineas SET?', {codlinea: w, nomlinea: q, montomaxicredito: y, plazomaxcred: z}, (err, resbd) => {
        if (err) {
            
            next(new Error(err))
        } else {
            //console.log(resbd)
          
            res.redirect('lineas')
        }
    })
}
controller.login=async(req,res,next)=>{
 const usu=await req.body.usuario;
 const cla=await req.body.login;
 cnn.query('SELECT * FROM usuarios WHERE nomusu=?',[usu],async(err,results)=>{
   /* if(results!=0){
        
    }*/
       
    if(err){
        next(new Error("Error de consulta login",err));
    } 


    if (results!=0){
           console.log("primer if")

        if(await(bcryptjs.compare(cla,results[0].clave))){
            console.log("Datos corectos segundo");
           //res.redirect('consultar');
           docc=results[0].doccli
            rol= results[0].rol;
            uss=results[0].nomusu;  //
            req.session.login=true;
            req.session.docc=results[0].doccli;
            req.session.uss=results[0].nomusu;
           switch(rol){
               case 'Administrador':
                res.redirect('vistacliente');
                break;

               case 'empleado':
                res.redirect('vistaempleado');
               break;
               case 'Cliente':
                res.redirect('vistamicuenta');
                break;
           }
        }
        else{
            console.log("Datos incorectos segundo  else");
            res.redirect('/');
        }
    }
   else{
    console.log("Datos incorrecto");
   }     
            
  

    //////////////////////////////////

    


    ////////////////////////////////////

//VISTA CLIENTE




 });


}
controller.vistacliente=(req,res,next)=>{
    console.log("en la vista de ususario");
    res.render('vistacliente');
}

controller.vistaempleado=(req,res,next)=>{
    console.log("en la vista de ususario");
    res.render('vistaempleado');
}
controller.vistamicuenta=(req,res,next)=>{
    console.log("en la vista de ususario");
    res.render('vistamicuenta');
}
controller.eliminarcli=async(req,res,next)=>{
    const w=req.body.ww;
    console.log("hola")
    cnn.query('DELETE FROM lineas WHERE codlinea="'+w+'"', async(err,respbb)=>{
      if(err){
          console.log("golaa")
          next(new Error(err));
      }
      else{
          console.log("eliminado")
          res.redirect('lineas');
      }
    })
    }
    controller.eliminar=async(req,res,next)=>{
        const x=req.body.dd;

        cnn.query('DELETE fROM usuarios WHERE doccli="'+x+'"', async(err,respbb)=>{
          if(err){
              console.log("adentro")
              next(new Error(err));
          }
          else{
              console.log("Actualizado")
              res.redirect('usuarios');
          }
        })
        }
        controller.eliminarcuentas=async(req,res,next)=>{
        const x=req.body.dd;

        cnn.query('DELETE fROM cuentas WHERE codigo="'+x+'"', async(err,respbb)=>{
          if(err){
              console.log("adentro")
              next(new Error(err));
          }
          else{
              console.log("Actualizado")
              res.redirect('cuentas');
          }
        })
        }
          controller.eliminarcre=async(req,res,next)=>{
        const xx=req.body.ss;

        cnn.query('DELETE fROM clientes WHERE doccli="'+xx+'"', async(err,respbb)=>{
          if(err){
              console.log("adentro")
              next(new Error(err));
          }
          else{
              console.log("Actualizado")
              res.redirect('clientes');
          }
        })
        }
         controller.eliminarcreditos=async(req,res,next)=>{
        const xr=req.body.rr;

        cnn.query('DELETE fROM creditos WHERE codigocredito="'+xr+'"', async(err,respbb)=>{
          if(err){
              console.log("adentro")
              next(new Error(err));
          }
          else{
              console.log("Actualizado")
              res.redirect('creditos');
          }
        })
        }
controller.actualizar=async(req,res,next)=>{
    const docx=req.body.dd;
    const usux=req.body.uu;
    const clax=req.body.cc;
    const rolx=req.body.rr;
    const estx=req.body.ee;
    const imgx=req.body.ii;
    const password=await bcryptjs.hash(clax,8)
    
    cnn.query('UPDATE usuarios SET nomusu="'+usux+'",clave="'+password+'",rol="'+rolx+'", estado="'+estx+'",imagen="'+imgx+'" WHERE doccli="'+docx+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
          console.log("Actualizado")
          res.redirect('usuarios');
      }
    })
    }
    controller.transaccionesact=async(req,res,next)=>{
    const docx=req.body.dd;
    const usux=req.body.uu;
    const clax=req.body.cc;

    
    cnn.query('UPDATE transacciones SET saldo=saldo -"'+usux+'" WHERE doccli="'+docx+'" AND tipcred="'+clax+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
          console.log("Actualizado")
          res.redirect('transacciones');
      }
    })
    }
    controller.actdatoscli=async(req,res,next)=>{
        const docx=req.body.dd;
        const usux=req.body.uu;
        const clax=req.body.cc;
        const password=await bcryptjs.hash(clax,8)
        
        cnn.query('UPDATE usuarios SET nomusu="'+usux+'",clave="'+password+'" WHERE doccli="'+docx+'"', async(err,respbb)=>{
          if(err){
              next(new Error(err));
          }
          else{
              console.log("Actualizado")
            
          }
          res.redirect('login');
        })
        }
    controller.actvistacli=async(req,res,next)=>{
        const doccx=req.body.dd;
        const nommx=req.body.uu;
        const vex=req.body.cc;
        const rlx=req.body.rr;
        const tdx=req.body.ee;
        const mgx=req.body.ii;
        
        
        cnn.query('UPDATE creditos SET doccli="'+nommx+'",codlinea="'+vex+'",montoprestado="'+rlx+'", fechaaprobada="'+tdx+'",plazo="'+mgx+'" WHERE codigocredito="'+doccx+'"', async(err,respbb)=>{
          if(err){
              next(new Error(err));
          }
          else{
              console.log("Actualizado")
              res.redirect('creditos');
          }
        })
        }

            controller.actlineas=async(req,res,next)=>{
                const doclix=req.body.dd;
                const nommcliix=req.body.uu;
                const veex=req.body.cc;
                const rllx=req.body.rr;

                
                cnn.query('UPDATE lineas SET nomlinea="'+nommcliix+'",montomaxicredito="'+veex+'",plazomaxcred="'+rllx+'" WHERE codlinea="'+doclix+'"', async(err,respbb)=>{
                  if(err){
                      next(new Error(err));
                  }
                  else{
                      console.log("Actualizado")
                      res.redirect('lineas');
                  }
                })
                }
                 controller.cuentasactualizar=async(req,res,next)=>{
                const doclix=req.body.dd;
                const nommcliix=req.body.uu;
                const veex=req.body.cc;
                const rllx=req.body.vv;

                
                cnn.query('UPDATE cuentas SET codigo="'+nommcliix+'",tipcred="'+veex+'",saldo="'+rllx+'" WHERE doccli="'+doclix+'"', async(err,respbb)=>{
                  if(err){
                      next(new Error(err));
                  }
                  else{
                      console.log("Actualizado")
                      res.redirect('cuentas');
                  }
                })
                }
                controller.actclientes=async(req,res,next)=>{
                    const cliix=req.body.ss;
                    const nommcliix=req.body.dd;
                    const apeex=req.body.uu;
                    const correoox=req.body.cc;
                    const cellx=req.body.rr;
                    const gennx=req.body.ee;
                    const feccx=req.body.ii;
                    
                    cnn.query('UPDATE clientes SET nomcli="'+nommcliix+'",apecli="'+apeex+'",correocli="'+correoox+'",celular="'+cellx+'",sexo="'+gennx+'",fechanaccli="'+feccx+'" WHERE doccli="'+cliix+'"', async(err,respbb)=>{
                      if(err){
                        
                          next(new Error(err));
                      }
                      else{
                          console.log("Actualizado")
                          res.redirect('clientes');
                      }
                    })
                    }
                    
controller.consultacuentas=(req,res,next)=>{

    cnn.query('SELECT * FROM cuentas',(err,resbd)=>{
        if(err){
          next(new Error(err))  
          console.log("Error en la consulta")
        }
        else{
           // console.log(resbd)
            res.render('cuentas',{datos:resbd}); 
           
     }
 
    }) 
    
 }
 controller.consultacreditose=(req,res,next)=>{
    
   
   cnn.query('SELECT * FROM creditos',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('consultar',{datos:resbd});
       }
   }) 
   
}

controller.insertarcuentas=async(req,res,next)=>{
const d=req.body.codigo;
const u=req.body.doccli;
const c=req.body.tipcred;
const r=req.body.saldo;

             
cnn.query('INSERT INTO cuentas SET?',{codigo:d,doccli:u,tipcred:c,saldo:r},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('/cuentas');
     }
 
 
});
 
}
controller.consultatran=(req,res,next)=>{

    cnn.query('SELECT * FROM transacciones',(err,resbd)=>{
        if(err){
          next(new Error(err))  
          console.log("Error en la consulta")
        }
        else{
           // console.log(resbd)
            res.render('transacciones',{datos:resbd}); 
           
     }
 
    }) 
    
 }
controller.insertartran=async(req,res,next)=>{

const u=req.body.doccli;
const r=req.body.saldo;
const c=req.body.tipcred;


             
cnn.query('INSERT INTO transacciones SET?',{doccli:u,saldo:r,tipcred:c,},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('/transacciones');
     }
 
 
});
 
}

    module.exports = controller