import { InfoModel } from '../models/informarcion.js'


export class InfoController {

  static async getInformacion (req, res) {
    const informacion = await InfoModel.getInformacion()
    res.json(informacion)
  } 

}