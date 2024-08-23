import { TicketModel } from "../models/tickets.js";

export class TicketController {

  static async guardarTicket(req, res) {
    const { id_cliente, cedula, id_tipo_ticket, fecha_emision, fecha_caducidad, valido_por, motivo_visita, codigo_qr } = req.body;

    try {
      const ticket = await TicketModel.guardarTicket(id_cliente, cedula, id_tipo_ticket, fecha_emision, fecha_caducidad, valido_por, motivo_visita, codigo_qr);
      res.json(ticket);
    } catch (error) {
      console.error('Error en el controlador:', error);
      res.status(500).json({
        message: 'Error interno del servidor',
        error
      });
    }
  }

}