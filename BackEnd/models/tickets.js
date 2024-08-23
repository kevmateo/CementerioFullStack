import { pool } from "../dataBase/dataBase.js";

export class TicketModel {

  static async guardarTicket(id_cliente, cedula, id_tipo_ticket, fecha_emision, fecha_caducidad, valido_por, motivo_visita, codigo_qr) {
    const query = `
      INSERT INTO ticket (id_cliente, cedula, id_tipo_ticket, fecha_emision, fecha_caducidad, valido_por, motivo_visita, codigo_qr) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    const values = [id_cliente, cedula, id_tipo_ticket, fecha_emision, fecha_caducidad, valido_por, motivo_visita, codigo_qr];

    try {
      const result = await pool.query(query, values);
      return result;
    } catch (error) {
      console.error('Error en la base de datos:', error);
      return { message: 'Error en el servidor', error };
    }
  }

  static async getTickets(cedula) {
    const query = `Select * from ticket tk where tk.cedula = $1`

    try {
      const result = await pool.query(query, [cedula]);
      return result.rows;
  } catch (error) {
      console.error('Error en la base de datos:', error);
      return { message: 'Error en el servidor', error };
    }
  }

}