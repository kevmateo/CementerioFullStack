import { pool } from "../dataBase/dataBase.js";

export class InfoModel {
  static async getInformacion() {
    const query = "select * from INFOAPP where id_info = 1"
    try {
      const result = await pool.query(query)
      return result.rows[0]
    } catch (error) {
      console.log(error)
    }
  }
}
