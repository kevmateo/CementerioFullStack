import { useState } from "react";
import BotonNormal from "./moleculas/BotonNormal";
import InputEtiqueta from "./moleculas/InputEtiqueta";
import IconSalir from "./iconos/IconSalir";
import IconCheck from "./iconos/IconCheck";

function OlvidarContraseña({ onClickSalir }) {

  const [paso1, setPaso1] = useState(true);
  const [paso2, setPaso2] = useState(false);

  const handlePasarPaso = () => {
    setPaso2(true);
    setPaso1(false);
  }

  return (
    <div className='w-[507px] h-[539px] flex flex-col bg-Gris-Fondos rounded-[10px] items-center justify-center shadow-normal max-md:w-screen max-md:h-screen max-md:rounded-none '>
      <nav className='w-full min-h-[60px] bg-white inline-flex sticky top-0 z-10 rounded-t-[10px] items-center justify-end px-[15px] '>
        <div className='border-l-2 border-black pl-[10px] py-[10px] ml-[15px] cursor-pointer' onClick={onClickSalir}>
          <IconSalir width={15} height={15} color={"black"} />
        </div>
      </nav>
      {paso1 &&
        <>
          <span className='subtitulo-bold w-[342px] mt-[20px]'>¿Olvidaste tu contraseña?</span>
          <span className='text-minima font-extralight w-[342px] mb-[10px]'>¡No hay problema! Sólo tienes que ingresar los datos que aparecen a continuación y mirar el mensaje que recibirás en tu correo electrónico.</span>
          <span className='text-minima font-extralight w-[342px] '>Por favor indica la dirección de correo electrónico y la identificación que usaste para registrarte en Frontera Tech Tour.</span>
        </>
      }
      {paso1 &&
        <div className='flex flex-col items-center justify-center flex-1 mb-[10px]'>
          <InputEtiqueta placeholder='ej. tucorreo@gmail.com' etiqueta='Correo electrónico' type='email' width='342px' margin={'0 0 20px 0'} />
          <InputEtiqueta placeholder='ej. 0487654321' etiqueta='Cédula o pasaporte' type='number' width='342px' margin={'0 0 20px 0'} />
          <BotonNormal texto='SIGUIENTE' color='#28A745' width='342px' margin='0 0 20px 0' onClick={handlePasarPaso} />
        </div>
      }
      {paso2 &&
        <div className="flex flex-col items-center justify-center flex-1 mb-[10px] mt-[20px]">
          <div className="mb-10">
            <IconCheck width={100} height={100} color={"#28A745"} />
          </div>
          <span className='text-minima font-extralight w-[342px]'>El proceso se ha completado con éxito. Por favor, mira el mensaje que se envió a tu correo electrónico que acabamos de enviarte.</span>
          <span className='text-minima font-extralight w-[342px] mt-[10px]'>Algunos proveedores de correo electrónico gratuitos (hotmail o yahoo) pueden colocar el correo electrónico en la carpeta de no deseados o en la papelera, por lo que es posible que tengas que recuperarlo para poder recuperar tu contraseña.</span>
          <span className='text-minima font-extralight w-[342px] mt-[10px]'>En caso que no recibas el correo electrónico con la nueva contraseña en los próximos 1,2 minutos, puedes intentarlo de nuevo a través de la plataforma.</span>
        </div>
      }
    </div>
  )
}

export default OlvidarContraseña;