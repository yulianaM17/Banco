const express = require('express')
const rutas = express.Router();
const controller = require('../controlador/controller')
const controllercliente = require('../controlador/controllercliente');
const controllerusuarios = require('../controlador/controllerusuarios');
rutas.get('/', controller.index)//si es get es por que va la raiz al que marque como index para que se renderise al login
rutas.post('/login',controller.login)//si es post llamamos la accion que tenemos en formulario
rutas.get('/usuarios',controller.consultageneral);
rutas.post('/frminsertar', controller.insertar)
rutas.post('/frminsertarcuenta', controller.insertarcuentas)
rutas.get('/cuentas', controller.consultacuentas)
rutas.get('/cuentasconsultar', controller.consultacuentas)
rutas.get('/vistamicuenta', controller.vistamicuenta)
rutas.get('/vistacliente', controller.vistacliente)
rutas.get('/vistaempleado', controller.vistaempleado)
rutas.post('/frminsertarcliente', controllercliente.insertarcliente)
rutas.get('/clientes',controllercliente.consultacliente);
rutas.post('/frminsertarcredito', controllercliente.insertarcliente)
//rutas.get('cerrar',controller.cerrar)
rutas.get('/lineas', controller.consultalinea);
rutas.post('/frminsertarlineaaa', controller.insertarlineaaa)
rutas.get('/creditos',controllercliente.consultacredito);
rutas.get('/clientesempleado',controllerusuarios.econsultacliente);
rutas.post('/frminsertarclientee', controllerusuarios.einsertarcliente)
rutas.get('/empleadocreditos',controllerusuarios.consultacreditose);
rutas.post('/frminsertarcreditoe', controllerusuarios.tarcreditose)
rutas.post('/actualizar', controller.actualizar)
rutas.post('/actvistacli', controller.actvistacli)
rutas.post('/actlineas', controller.actlineas)
rutas.post('/actclientes', controller.actclientes)
rutas.post('/actdatoscli', controller.actdatoscli)
rutas.get('/creditos',controller.consultarcreditoscli);
rutas.get('/lineas',controller.consultalineascli);
rutas.get('/datoscli',controller.consultarusuariocli);
rutas.get('/credcli',controller.consultarcreditoscli);
rutas.get('/lineascli',controller.consultalineascli);
rutas.post('/eliminarcli', controller.eliminarcli)
rutas.post('/eliminar', controller.eliminar)
rutas.post('/eliminarcreditos', controller.eliminarcreditos)
rutas.post('/eliminarcuentas', controller.eliminarcuentas)
rutas.post('/cuentasactualizar', controller.cuentasactualizar)
rutas.post('/frminsertartan', controller.insertartran)
rutas.get('/transacciones', controller.consultatran)
rutas.post('/transaccionesact', controller.transaccionesact)
//rutas.get('/cliente', controller.cliente)
module.exports = rutas;
