import IconSalir from './iconos/IconSalir';
import InputEtiqueta from './moleculas/InputEtiqueta';
import BotonNormal from './moleculas/BotonNormal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onClickSalir, onClickAbrirRegistrar, onClickAbrirOlvidarContraseña, onClickIniciarSesion }) {

  const handleIniciarSesion = () => {
    const datos = {
      usuario: document.getElementById('input-usuario').value,
      contrasena: document.getElementById('input-contrasena').value
    };

    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(datos)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.mensaje) {
        } else {
          localStorage.setItem('access_token', data.token);
          localStorage.setItem('userRole', data.user.rol);
          localStorage.setItem('userCI', data.user.usuario); 
          onClickIniciarSesion();
        }
      })
      .catch(error => console.log('Error en la petición', error));
  }

  return (
    <div className="w-[507px] h-[539px] flex flex-col bg-Gris-Fondos rounded-[10px] items-center justify-center shadow-normal max-md:w-screen max-md:h-screen max-md:rounded-none">
      <nav className="w-full h-[60px] bg-white rounded-t-[10px] inline-flex items-center justify-end px-[15px]">
        <span className='mr-2'>¿No tienes una cuenta?</span><span className='font-bold text-Azul cursor-pointer' onClick={onClickAbrirRegistrar}> Regístrate aquí</span>
        <div className='border-l-2 border-black pl-[10px] py-[10px] ml-[15px] cursor-pointer' onClick={onClickSalir}>
          <IconSalir width={15} height={15} color={"black"} />
        </div>
      </nav>
      <div className='flex-grow flex flex-col items-center justify-center'>
        <InputEtiqueta etiqueta='Cédula o pasaporte' type='number' id='input-usuario' width='342px' margin={'0 0 20px 0'} />
        <InputEtiqueta etiqueta='Contraseña' type='password' id='input-contrasena' width='342px' margin={'0 0 30px 0'} />
        <BotonNormal texto='INICIAR SESIÓN' color='#28A745' width='342px' margin={'0 0 10px 0'} onClick={handleIniciarSesion} />
        <div>
          <span>¿Olvidaste tu contraseña? </span>
          <span
            className='font-bold text-Azul cursor-pointer'
            onClick={onClickAbrirOlvidarContraseña}
          >
            Haz clic aquí
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;