export const TicketType = Object.freeze({
  NINO_FORANEO: {id: 6,  descripccion: 'Niño', precio: 0.5 },
  TERCERA_EDAD_FORANEO: {id: 5, descripcion: 'Tercera Edad', precio: 0.5 },
  ADULTO_FORANEO: {id: 4, descripcion: 'Adulto', precio: 1 },
  NINO_EXTRANJERO: {id: 2, descripcion: 'Niño Extranjero', precio: 1 },
  TERCERA_EDAD_EXTRANJERO: {id: 3, descripcion: 'Tercera Edad Extranjero', precio: 1 },
  ADULTO_EXTRANJERO: {id: 1, descripcion: 'Adulto Extranjero', precio: 2 },
  NACIONAL: {id: 7, descripcion: 'Carchi', precio: 0 },
})

export function obtenerInfoTicket(edad, cedula) {

  const cedulaStr = String(cedula)

  if (!cedulaStr.startsWith('04')){
    if (edad < 18) return TicketType.NINO_FORANEO
    if (edad >= 18 && edad <= 65) return TicketType.ADULTO_FORANEO
    if (edad > 65) return TicketType.TERCERA_EDAD_FORANEO
  } else if (cedulaStr === 'IA') {
    if (edad < 18) return TicketType.NINO_EXTRANJERO
    if (edad >= 18 && edad <= 65) return TicketType.ADULTO_EXTRANJERO
    if (edad > 65) return TicketType.TERCERA_EDAD_EXTRANJERO
  } else {
    return TicketType.NACIONAL
  }
}