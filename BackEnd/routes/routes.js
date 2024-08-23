import { Router } from  'express';
import { ClienteController } from '../controllers/cliente.controller.js';
import { InfoController } from '../controllers/info.controller.js';
import { TicketController } from '../controllers/ticket.controller.js';

const router = Router()

router.get('/informacion', InfoController.getInformacion)

router.get('/cliente3', ClienteController.getClientes)
router.post('/login', ClienteController.login)
router.post('/register', ClienteController.register)
router.get('/logout', ClienteController.logout)
router.get('/cliente', ClienteController.getClienteByCedula)
router.post('/crearcliente', ClienteController.crearCliente)

router.post('/guardarTicket', TicketController.guardarTicket)

export default router