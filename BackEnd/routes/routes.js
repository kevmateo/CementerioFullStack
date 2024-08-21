import { Router } from  'express';
import { ClienteController } from '../controllers/cliente.controller.js';
import { InfoController } from '../controllers/info.controller.js';

const router = Router()

router.get('/cliente3', ClienteController.getClientes)
router.get('/informacion', InfoController.getInformacion)
router.post('/login', ClienteController.login)
router.post('/register', ClienteController.register)
router.get('/logout', ClienteController.logout)
router.get('/cliente', ClienteController.getClienteByCedula)
router.post('/crearcliente', ClienteController.crearCliente)

export default router