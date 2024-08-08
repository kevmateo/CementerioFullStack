export default class Validaciones {
  
  static validarCedula(cedula) {
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

    if(verificador === ultimoDigito) {
      return "Cédula válida"
    } else {
      return "Cédula inválida"
    }
  }

  static validarContrasena(contrasena) {
    if (contrasena.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres"
    }
    if (!/[A-Z]/.test(contrasena)) {
      return "La contraseña debe tener al menos una mayúscula"
    }
    if (!/[a-z]/.test(contrasena)) {
      return "La contraseña debe tener al menos una minúscula"
    }
    if (!/[0-9]/.test(contrasena)) {
      return "La contraseña debe tener al menos un número"
    }
    return ''
  }

  static validarCorreo(correo) {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
      return "Correo inválido"
    }
    return "Correo válido"
  }


}