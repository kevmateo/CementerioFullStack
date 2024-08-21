const TicketType = Object.freeze({
  NINO_FORANEO: { descripccion: 'Niño', precio: 0.5 },
  TERCERA_EDAD_FORANEO: { descripcion: 'Tercera Edad', precio: 0.5 },
  ADULTO_FORANEO: { descripcion: 'Adulto', precio: 1 },
  NINO_EXTRANJERO: { descripcion: 'Niño Extranjero', precio: 1 },
  TERCERA_EDAD_EXTRANJERO: { descripcion: 'Tercera Edad Extranjero', precio: 1 },
  ADULTO_EXTRANJERO: { descripcion: 'Adulto Extranjero', precio: 2 },
  NACIONAL: { descripcion: 'Carchi', precio: 0 },
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