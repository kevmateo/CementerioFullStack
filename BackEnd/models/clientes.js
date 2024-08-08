import { pool } from "../dataBase/dataBase.js";

export class ClienteModel {
  static async getClientes() {
    const query = "select * from cliente"
    try {
      const result = await pool.query(query)
      return result.rows
    } catch (error) {
      console.log(error)
    }
  }

  static async register(correo, cedula, nombre, apellido, edad, genero, ciudad, pais, contrasena) {
    const registrarse = `select insertarclienteycuenta('${cedula}', '${nombre}', '${apellido}', ${edad}, '${genero}', '${ciudad}', '${pais}', '${correo}', '${contrasena}, 'usuario')`
    
    try {
      const result = await pool.query(registrarse) 
      return { success: true, data: result }
    } catch (error) {
      console.log(error)
      return { success: false, error: error.message }
    }
  }

  static async login(usuario, contrasena) {
    const logear = `select usuario, contrasena, rol from cuenta where usuario = '${usuario}'`
    try {
      const result = await pool.query(logear)
      const usuarioEncontrado = result.rows[0]

      if (result.rows.length === 0 || usuarioEncontrado.contrasena !== contrasena) {
        return { success: false, mensaje: 'Usuario o contraseña incorrectos' }
      }

      const { contrasena: _, ...user } = usuarioEncontrado
      return user
    } catch (error) {
      console.log(error)
      return { error: 'Error en el servidor' }
    } 
  }

  static async getClienteByCedula(cedula) {
    const query = `select * from cliente where cedula = '${cedula}'`
    try {
      const result = await pool.query(query)
      return result.rows[0]
    } catch (error) {
      return { message: 'Error en el servidor' }
    }
  }

}
