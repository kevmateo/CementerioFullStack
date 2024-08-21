import e from 'express'
import { ClienteModel } from '../models/clientes.js'
import jwt from 'jsonwebtoken'

export class ClienteController {

  static async getClientes(req, res) {
    const clientes = await ClienteModel.getClientes()
    res.json(clientes)
  }

  static async login(req, res) {
    const { usuario, contrasena } = req.body

    try {
      const user = await ClienteModel.login(usuario, contrasena)
      if (user.success === false) {
        return res.status(202).json(user)
      }

      const token = jwt.sign({ username: user.usuario }, process.env.SECRET_KEY, {
        expiresIn: '15m'
      })

      res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 15 * 60 * 1000
        })
        .status(200).json({ user, token })
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }

  static async register(req, res) {
    const { correo, cedula, nombre, apellido, edad, genero, ciudad, pais, contrasena } = req.body
    console.log(correo, cedula, nombre, apellido, edad, genero, ciudad, pais, contrasena)

    try {
      const registrado = await ClienteModel.register(correo, cedula, nombre, apellido, edad, genero, ciudad, pais, contrasena)
      console.log(registrado, 'odi')
      if (registrado.success) {
        res.json({ message: 'Usuario registrado' })
      } else {
        res.status(400).json({ message: 'Error al registrar usuario', error: registrado.error })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor', error: error.message })
    }
  }

  static async logout(req, res) {
    res.clearCookie('access_token').json({ message: 'Sesión cerrada' })
  }

  static async getClienteByCedula(req, res) {
    const cedula = req.query.cedula
    console.log(cedula)
    try {
      const cliente = await ClienteModel.getClienteByCedula(cedula)
      if (cliente.cedula) {
        res.json(cliente)
      } else {
        res.status(400).json({ message: 'Error al buscar cliente', error: cliente.error })
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error interno del servidor', error: error
      })
    }
  }

  static async crearCliente(req, res) {
    const { cedula, nombre, apellido, edad, genero, ciudad, pais } = req.body
    try {
      const cliente = await ClienteModel.crearCliente(cedula, nombre, apellido, edad, genero, ciudad, pais)
      res.json(cliente)
    } catch (error) {
      res.status(500).json({
        message: 'Error interno del servidor', error: error
      })
    }
  }

}


