import React, { useState } from 'react';
import NavbarUsuario from "../componentes/NavbarUsuario";
import IconQR from "../componentes/iconos/IconQR";
import IconUser from "../componentes/iconos/IconUser";

function EntradasUser() {

  const [activos, setActivos] = useState(true);

  const toggleActivos = () => setActivos(true);
  const toggleVencidos = () => setActivos(false);

  return (
    <div className="bg-Gris-Fondos h-screen flex flex-col items-center justify-center w-screen px-4 pb-5">
      <NavbarUsuario />
      <div className="mt-[100px] overflow-y-auto no-scrollbar flex h-full">
        <div className="w-[358px] flex flex-col">
          <section className="flex items-center justify-center h-[60px] mb-[20px]">
            <span 
              onClick={toggleActivos}
              className={`w-1/2 flex items-center justify-center text-xl h-full cursor-pointer ${activos ? 'font-bold border-b-2 border-b-black' : ''}`}
            >
              Activos
            </span>
            <span 
              onClick={toggleVencidos}
              className={`w-1/2 flex items-center justify-center text-xl h-full cursor-pointer ${!activos ? 'font-bold border-b-2 border-b-black' : ''}`}
            >
              Vencidos
            </span>
          </section>
          {activos && (
            <section>
              <div className="flex bg-white items-center justify-center px-[10px] h-[70px] rounded-[10px] border mb-5">
                <IconQR width={40} height={40} color="black" />
                <div className="flex flex-col mx-6">
                  <span>Fecha de vencimiento</span>
                  <span className="font-bold">10/07/2024 -  20:18</span>
                </div>
                <div className="flex flex-col">
                  <span>Valido por</span>
                  <div className="flex items-center justify-center">
                    <span className="font-bold mr-[20px]">1</span>
                    <IconUser width={18} height={19} color="black" />
                  </div>
                </div>
              </div>
            </section>
          )}
          {!activos && (
            <section>
              <div className="flex bg-white items-center justify-center px-[10px] h-[70px] rounded-[10px] border mb-5">
                <IconQR width={40} height={40} color="black" />
                <div className="flex flex-col mx-6">
                  <span>Vencio el</span>
                  <span className="font-bold">10/07/2024 -  20:18</span>
                </div>
                <div className="flex flex-col">
                  <span>Valido por </span>
                  <div className="flex items-center justify-center">
                    <span className="font-bold mr-[20px]">1</span>
                    <IconUser width={18} height={19} color="black" />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default EntradasUser;
