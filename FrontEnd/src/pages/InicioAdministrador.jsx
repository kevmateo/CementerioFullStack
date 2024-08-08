import { useState } from "react"
import NavbarInicio from "../componentes/NavbarInicio"
import InputEtiqueta from "../componentes/moleculas/InputEtiqueta"
import BotonNormal from "../componentes/moleculas/BotonNormal"
import QR from "../assets/QR.jpg"
import BotonIcono from "../componentes/moleculas/BotonIcono"
import IconImprimir from "../componentes/iconos/IconImprimir"

function InicioAdministrador() {

  const [paso1, setPaso1] = useState(true)
  const [paso2, setPaso2] = useState(false)
  const [paso3, setPaso3] = useState(false)

  const handlePasarPaso = () => {
    setPaso1(false)
    setPaso2(true)
  }

  const hanldeRegresarPaso = () => {
    setPaso1(true)
    setPaso2(false)
  }

  const handleComprarEntrada = () => {
    setPaso2(false)
    setPaso3(true)
  }

  const handleIrInicio = () => {
    setPaso3(false)
    setPaso1(true)
  }

  return (
    <div className="bg-Gris-Fondos h-screen flex flex-col items-center justify-center w-screen">
      <NavbarInicio />
      {paso1 &&
        <div className="flex flex-col items-start justify-center w-auto">
          <section className="mb-[15px]  ">
            <span className="subtitulo-bold ">Comprobar datos del ciudadano</span>
          </section>
          <section className="flex justify-center items-end gap-[40px] max-md:flex-col max-md:items-center">
            <InputEtiqueta etiqueta="Cédula o pasaporte" placeholder="ej. 0403020101" width={'343px'} type={'number'} />
            <BotonNormal texto="COMPROBAR CIUDADANO" color='#28A745' onClick={handlePasarPaso} />
          </section>
        </div>
      }
      {paso2 &&
        <div className="flex flex-col items-center justify-center gap-[20px] p-4 max-w-full h-screen overflow-y-auto max-md:justify-start max-md:mt-[60px]">
          <section className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-md:flex max-md:flex-col ">
            <span className="col-span-2 subtitulo-bold ">Verificar datos del ciudadano</span>
            <InputEtiqueta etiqueta="Cédula o pasaporte" placeholder="0403020101" width={'343px'} type={'text'} />
            <InputEtiqueta etiqueta="País de nacimiento" placeholder="ECUATORIANO" width={'343px'} type={'text'} />
            <InputEtiqueta etiqueta="Nombres" placeholder="Perez Terán" width={'343px'} type={'text'} />
            <InputEtiqueta etiqueta="Apellidos" placeholder="Jose David" width={'343px'} type={'text'} />
            <InputEtiqueta etiqueta="Fecha de nacimiento" placeholder="18 agosto 2002" width={'343px'} type={'text'} />
            <InputEtiqueta etiqueta="Valor de la entrada" placeholder="Adulto 1$" width={'343px'} type={'text'} />
          </section>
          <section className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-md:flex max-md:flex-col">
            <span className="col-span-2 subtitulo-bold">Entrada</span>
            <InputEtiqueta etiqueta="Entrada para" placeholder="Ingresa el número de entradas" width={'343px'} type={'text'} />
            <InputEtiqueta etiqueta="Valor total" placeholder="0$" width={'343px'} type={'text'} />
          </section>
          <section className="mt-[20px] ">
            <BotonNormal texto="CANCELAR" color='#C82333' onClick={hanldeRegresarPaso} />
            <BotonNormal texto="COMPRAR ENTRADA" color='#28A745' margin={'0 0 0 20px'} onClick={handleComprarEntrada} />
          </section>
        </div>
      }
      {paso3 &&
        <div className="flex flex-col items-center border w-[339px] px-[30px] py-[30px] rounded-t-[20px]  overflow-y-auto no-scrollbar justify-start mt-[80px] mb-[20px]">
          <span className="text-4xl font-bold font-Logo">Frontera Tech</span>
          <section className="flex flex-col items-center mt-[20px]">
            <img src={QR} alt="QR" className="w-[226px] h-[200px] mt-[20px] " />
            <span className="text-base font-light">1234-3433-3423-4343</span>
            <span className="text-center mt-[10px] text-sm">Este código QR es su entrada digital para 1 persona al Cementerio de Tulcán.</span>
          </section>
          <section className="flex flex-col mt-[25px] text-base text-center">
            <span>Fecha de vencimiento</span>
            <span className="font-bold">10/07/2024 - 20:18</span>
          </section>
          <section className="flex flex-col mt-[30px] text-base text-center gap-2">
            <BotonIcono texto="IMPRIMIR" color='#0069D9' marginTexto={'0 15px 0 0'} iconDerecha={<IconImprimir width={'20px'} height={'20px'} color={'white'} />}/>
            <BotonNormal texto="IR AL INICIO" color='#28A745' onClick={handleIrInicio} />
          </section>
        </div>
      }
    </div>
  )
}

export default InicioAdministrador