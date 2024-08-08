const TicketType = Object.freeze({
  NINO_FORANEO: { descripccion: 'Niño Foraneo', precio: 0.5 },
  TERCERA_EDAD_FORANEO: { descripccion: 'Tercera Edad Foraneo', precio: 0.5 },
  ADULTO_FORANEO: { descripccion: 'Adulto Foraneo', precio: 1 },
  NINO_EXTRANJERO: { descripccion: 'Niño Extranjero', precio: 1 },
  TERCERA_EDAD_EXTRANJERO: { descripccion: 'Tercera Edad Extranjero', precio: 1 },
  ADULTO_EXTRANJERO: { descripccion: 'Adulto Extranjero', precio: 2 },
  NACIONAL: { descripccion: 'Nacional', precio: 0 },
})

export function obtenerInfoTicket(edad, cedula) {

  const cedulaStr = String(cedula)
  console.log(cedulaStr, edad)

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