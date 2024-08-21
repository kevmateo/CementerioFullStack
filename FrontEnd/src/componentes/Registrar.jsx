import { useState } from 'react';
import IconSalir from './iconos/IconSalir';
import InputEtiqueta from './moleculas/InputEtiqueta';
import BotonNormal from './moleculas/BotonNormal';
import BotonIcono from './moleculas/BotonIcono';
import IconAtras from "./iconos/IconAtras";
import RadioBoton from './moleculas/RadioBoton';
import { validarCorreo, validarCedula, validarContrasena } from '../validaciones';

function Registrar({ onClickSalir, onClickTerminarRegistro, onClickAbrirIniciarSesion }) {

  const [paso1, setPaso1] = useState(true);
  const [paso2, setPaso2] = useState(false);
  const [genero, setGenero] = useState('');
  const [correo, setCorreo] = useState('');
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handlePasarPaso = () => {
    setPaso2(true);
    setPaso1(false);
  }
  const handlerRegresarPaso = () => {
    if (paso2) {
      setPaso2(false);
      setPaso1(true);
    }
  }

  const handleGeneroChange = (value) => {
    setGenero(value);
  }

  const handleValidarCampos = () => {
    const campos = [correo, cedula, nombre, apellido, edad, pais, ciudad, genero, contrasena, confirmarContrasena];
    const camposVacios = campos.some(campo => campo === '');

    if (camposVacios) {
      alert('Todos los campos son obligatorios');
    } else if (!validarCorreo(correo)) {
      alert('El correo no es válido');
    } else if (!validarCedula(cedula)) {
      alert('La cédula no es válida');
    } else if (!validarContrasena(contrasena)) {
      alert('Recuerda que la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
    } else if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
    } else {
      onClickTerminarRegistro();
    }
  }

  const handleRegistrarse = () => {
    const datos = {
      email: correo,
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      pais: pais,
      ciudad: ciudad,
      genero: genero,
      contrasena: contrasena
    }
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then((response) => response.json())
      .then(data => {
        if (data.mensaje) {
          console.log(data.mensaje)
        } else {
          handleValidarCampos()
        }
      })
  }

  return (
    <div className='w-[507px] h-[539px] flex flex-col bg-Gris-Fondos rounded-[10px] items-center justify-center shadow-normal max-md:w-screen max-md:h-screen max-md:rounded-none '>
      <nav className='w-full min-h-[60px] bg-white inline-flex sticky top-0 z-10 rounded-t-[10px] items-center justify-end px-[15px] mb-[20px]'>
        {paso1 &&
          <>
            <span className='mr-2'>¿Ya tienes una cuenta?</span><span className='font-bold text-Azul cursor-pointer' onClick={onClickAbrirIniciarSesion}> Inicia sesión aquí</span>
          </>
        }
        <div className='border-l-2 border-black pl-[10px] py-[10px] ml-[15px] cursor-pointer' onClick={onClickSalir}>
          <IconSalir width={15} height={15} color={"black"} />
        </div>
      </nav>
      {paso1 &&
        <>
          <span className='subtitulo-bold w-[342px]'>¡Empecemos!</span>
          <span className='subtitulo-bold w-[342px] mb-[10px]'>Completa tus datos personales</span>
        </>
      }
      {paso2 &&
        <>
          <span className='subtitulo-bold w-[342px]'>¡Ya casi!</span>
          <span className='subtitulo-bold w-[342px] mb-[10px]'>Crea los datos de tu cuenta</span>
        </>
      }
      <div className='flex flex-col items-center justify-center flex-1 mb-[10px] '>
        {paso1 &&
          <div className='overflow-y-auto no-scrollbar h-[320px] max-md:h-[420px]'>
            <InputEtiqueta placeholder='ej. tucorreo@gmail.com' etiqueta='Correo electrónico' type='email' id='email' width='342px' margin={'0 0 20px 0'} value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <InputEtiqueta placeholder='ej. 0487654321' etiqueta='Cédula o pasaporte' type='number' id='cedula' width='342px' margin={'0 0 20px 0'} value={cedula} onChange={(e) => setCedula(e.target.value)} />
            <InputEtiqueta placeholder='ej. José David' etiqueta='Nombre' type='text' id='nombre' width='342px' margin={'0 0 20px 0'} value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <InputEtiqueta placeholder='ej. Garcia López' etiqueta='Apellido' type='text' id='apellido' width='342px' margin={'0 0 20px 0'} value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <InputEtiqueta placeholder='ej. 12' etiqueta='Edad' type='number' id='edad' width='342px' margin={'0 0 20px 0'} value={edad} onChange={(e) => setEdad(e.target.value)} />
            <InputEtiqueta placeholder='ej. Ecuador' etiqueta='País' type='text' id='pais' width='342px' margin={'0 0 20px 0'} value={pais} onChange={(e) => setPais(e.target.value)} />
            <InputEtiqueta placeholder='ej. Guayaquil' etiqueta='Ciudad' type='text' id='ciudad' width='342px' margin={'0 0 20px 0'} value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
            <section className='flex flex-col gap-[5px]'>
              <span className='text-base font-bold'>Género</span>
              <div className='flex gap-[14px]'>
                <RadioBoton text='Hombre' width='165px' checked={genero === 'Hombre'} onChange={() => handleGeneroChange('Hombre')} />
                <RadioBoton text='Mujer' width='165px' checked={genero === 'Mujer'} onChange={() => handleGeneroChange('Hombre')} />
              </div>
            </section>
          </div>
        }
        {paso2 &&
          <div className='flex flex-col items-center justify-center'>
            <InputEtiqueta etiqueta='Cédula o pasaporte' type='text' width='342px' margin={'0 0 20px 0'} value={cedula} disabled={true} />
            <InputEtiqueta etiqueta='Contraseña' type='password' width='342px' margin={'0 0 20px 0'} value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            <InputEtiqueta etiqueta='Confirmar contraseña' type='password' width='342px' margin={'0 0 20px 0'} value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} />
          </div>
        }
      </div>
      <footer className='w-full min-h-[60px] bg-white rounded-b-[10px] inline-flex items-center justify-around text-Gris sticky bottom-0 z-10'>
        {paso1 &&
          <>
            <BotonIcono color='transparent' textColor='#5A6268' iconIzquierda={<IconAtras width='20px' height='20px' color='#5A6268' />} texto='ANTERIOR' marginTexto='0 0 0 15px' onClick={handlerRegresarPaso} disabled={true} />
            <BotonNormal texto='SIGUIENTE' color='#28A745' onClick={handlePasarPaso} />
          </>
        }
        {paso2 &&
          <>
            <BotonIcono color='transparent' textColor='#5A6268' iconIzquierda={<IconAtras width='20px' height='20px' color='#5A6268' />} texto='ANTERIOR' marginTexto='0 0 0 15px' onClick={handlerRegresarPaso} />
            <BotonNormal texto='TERMINAR' color='#28A745' onClick={handleRegistrarse} />
          </>
        }
      </footer>
    </div>
  );
}

export default Registrar;