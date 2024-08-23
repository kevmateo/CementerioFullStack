export const validarCedula = (cedula) => {
  if (cedula.length !== 10) {
    return false
  }

  const provincia = parseInt(cedula.substring(0, 2), 10)
  const tercerDigito = parseInt(cedula[2], 10)

  if (provincia < 1 || provincia > 24 || tercerDigito >= 6) {
    return false
  }

  let suma = 0
  for (let i = 0; i < 9; i++) {
    let digito = parseInt(cedula[i], 10)
    if (i % 2 === 0) {
      digito *= 2
      if (digito > 9) digito -= 9
    }
    suma += digito
  }

  const ultimoDigito = parseInt(cedula[9], 10)
  const verificador = suma % 10 === 0 ? 0 : 10 - (suma % 10)

  return verificador === ultimoDigito
}

export const validarContrasena = (contrasena) => {
  if (contrasena.length < 8) {
    return false
  }
  if (!/[A-Z]/.test(contrasena)) {
    return false
  }
  if (!/[a-z]/.test(contrasena)) {
    return false
  }
  if (!/[0-9]/.test(contrasena)) {
    return false
  }
  return true
}

export const validarCorreo = (correo) => {  
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
    return false
  }
  return true
}
