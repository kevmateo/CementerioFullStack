import NavbarInicio from "../componentes/NavbarInicio";
import BotonIcono from "../componentes/moleculas/BotonIcono";
import IconDescargar from "../componentes/iconos/IconDescargar";

function HistorialEntradas() {
  return (
    <div className="bg-Gris-Fondos h-screen flex flex-col items-center justify-center w-screen px-4 pb-5">
      <NavbarInicio />
      <div className="w-full border border-[#D9D9D9] rounded-t-[20px] mt-[100px] mb-4 overflow-auto no-scrollbar">
        <div className="min-w-[800px] grid grid-cols-10 bg-Azul text-white font-bold items-center h-[60px] top-0 sticky z-0">
          <span className="flex justify-center items-center">FECHA</span>
          <span className="flex justify-center items-center">PAX</span>
          <span className="flex justify-center items-center">CIUDAD</span>
          <span className="flex justify-center items-center">PAIS</span>
          <span className="flex justify-center items-center">EDAD</span>
          <span className="flex justify-center items-center">TIPO ENTRADA</span>
          <span className="flex justify-center items-center">GÉNERO</span>
          <span className="flex justify-center items-center">MOTIVO VISITA</span>
          <span className="flex justify-center items-center">VALOR INGRESO</span>
          <span className="flex justify-center items-center">TV INGRESO</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
        <div className="min-w-[800px] grid grid-cols-10 bg-white text-black items-center h-[60px]">
          <span className="border-b flex items-center justify-center h-[60px]">01/01/2021</span>
          <span className="border-b flex items-center justify-center h-[60px]">1</span>
          <span className="border-b flex items-center justify-center h-[60px]">Quito</span>
          <span className="border-b flex items-center justify-center h-[60px]">Ecuador</span>
          <span className="border-b flex items-center justify-center h-[60px]">18</span>
          <span className="border-b flex items-center justify-center h-[60px]">Adulto</span>
          <span className="border-b flex items-center justify-center h-[60px]">Masculino</span>
          <span className="border-b flex items-center justify-center h-[60px]">Turismo</span>
          <span className="border-b flex items-center justify-center h-[60px]">1$</span>
          <span className="border-b flex items-center justify-center h-[60px]">QR</span>
        </div>
      </div>
      <BotonIcono texto="DESCARGAR" color='#28A745' marginTexto={'0 15px 0 0'} iconDerecha={<IconDescargar width={'20px'} height={'20px'} color={'white'} color2={'white'} />} />
    </div>
  );
}

export default HistorialEntradas;
