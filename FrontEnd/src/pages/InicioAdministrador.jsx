import { useState, useEffect } from "react"
import NavbarInicio from "../componentes/NavbarInicio"
import InputEtiqueta from "../componentes/moleculas/InputEtiqueta"
import BotonNormal from "../componentes/moleculas/BotonNormal"
import QR from "../assets/QR.jpg"
import BotonIcono from "../componentes/moleculas/BotonIcono"
import IconImprimir from "../componentes/iconos/IconImprimir"
import { obtenerInfoTicket } from '../tickets'
import { generarQR } from '../generadorQR'
import { validarCedula } from '../validaciones';


function InicioAdministrador() {

  const [paso1, setPaso1] = useState(true)
  const [paso2, setPaso2] = useState(false)
  const [paso3, setPaso3] = useState(false)
  const [pasoCrearUsuario, setPasoCrearUsuario] = useState(false)
  const [ticketData, setTicketData] = useState({ descripcion: "", precio: 0 })
  const [cedulaInput, setCedulaInput] = useState("")
  const [numEntradas, setNumEntradas] = useState(1)
  const [valorTotal, setValorTotal] = useState(0)
  const [fechaVencimiento, setFechaVencimiento] = useState("")
  const [clienteData, setClienteData] = useState({
    cedula: "",
    pais: "",
    ciudad: "",
    primer_nombre: "",
    primer_apellido: "",
    edad: "",
    genero: "",
  });

  const handlePasarPaso = () => {
    if (handleValidarCampos()) {
      handlerGetClienteByCedula(cedulaInput)
      setPaso1(false)
      setPaso2(true)
    }
  }

  const hanldeRegresarPaso = () => {
    setPaso1(true)
    setPaso2(false)
  }

  const handleComprarEntrada = () => {
    handleFechaVencimiento()
    setPaso2(false)
    setPaso3(true)
  }

  const handleIrInicio = () => {
    setCedulaInput("")
    setPaso3(false)
    setPaso1(true)
  }

  const handleRegresarAgregarCliente = () => {
    setPasoCrearUsuario(false)
    setPaso1(true)
  }

  const handlerGetClienteByCedula = (cedula) => {
    fetch(`http://localhost:3001/cliente?cedula=${cedula}`)
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => {
        if (data && data.cedula) {
          setClienteData({
            cedula: data.cedula || "",
            pais: data.pais || "",
            ciudad: data.ciudad || "",
            primer_nombre: data.primer_nombre || "",
            primer_apellido: data.primer_apellido || "",
            edad: data.edad || "",
          });
          const ticketInfo = obtenerInfoTicket(data.edad, cedula)
          setTicketData(ticketInfo)
          setPaso1(false)
          setPaso2(true)
        } else {
          setPaso2(false)
          setPasoCrearUsuario(true)
          setClienteData({ ...clienteData, cedula: cedula })
        }
      })
      .catch(error => {
        setPaso2(false)
        setPasoCrearUsuario(true)
        setClienteData({ ...clienteData, cedula: cedula })
        console.log('Error en la petición', error);
      });
  }

  const handleCrearCliente = () => {

    if(!handleValidarCamposRegistro()) {
      return
    }

    const datos = {
      cedula: clienteData.cedula,
      pais: clienteData.pais,
      ciudad: clienteData.ciudad,
      nombre: clienteData.primer_nombre,
      apellido: clienteData.primer_apellido,
      edad: clienteData.edad,
      genero: clienteData.genero,
    }
    fetch('http://localhost:3001/crearcliente',{
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
          setPasoCrearUsuario(false)
          setPaso2(true)
        }
      })
  }

  const handleValidarCampos = () => {
    const campos = [
      cedulaInput,
    ]
    const camposVacios = campos.some(campo => campo === '')

    if (camposVacios) {
      alert('Todos los campos son obligatorios')
      return false
    } else if (!validarCedula(cedulaInput)) {
      alert('La cédula no es válida')
      return false
    }
    return true
  }

  const handleValidarCamposRegistro = () => {
    const campos = [
      clienteData.cedula,
      clienteData.pais,
      clienteData.ciudad,
      clienteData.primer_nombre,
      clienteData.primer_apellido,
      clienteData.edad,
      clienteData.genero
    ]
    const camposVacios = campos.some(campo => campo === '')

    if (camposVacios) {
      alert('Todos los campos son obligatorios')
      return false
    }
    return true
  }

  useEffect(() => {
    setValorTotal(numEntradas * ticketData.precio);
  }, [numEntradas, ticketData]);

  const handleFechaVencimiento = () => {
    const fechaActual = new Date();
    const fechaVenc = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000)
    const fechaVencString = `${fechaVenc.getDate().toString().padStart(2, '0')}/${(fechaVenc.getMonth() + 1).toString().padStart(2, '0')}/${fechaVenc.getFullYear()} - ${fechaVenc.getHours().toString().padStart(2, '0')}:${fechaVenc.getMinutes().toString().padStart(2, '0')}`
    setFechaVencimiento(fechaVencString)
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
            <InputEtiqueta etiqueta="Cédula o pasaporte" placeholder="ej. 0403020101" width={'343px'} type={'number'} value={cedulaInput} onChange={(e) => setCedulaInput(e.target.value)} />
            <BotonNormal texto="COMPROBAR CIUDADANO" color='#28A745' onClick={handlePasarPaso} />
          </section>
        </div>
      }
      {paso2 &&
        <div className="flex flex-col items-center justify-center gap-[20px] p-4 max-w-full h-screen overflow-y-auto max-md:justify-start max-md:mt-[60px]">
          <section className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-md:flex max-md:flex-col ">
            <span className="col-span-2 subtitulo-bold ">Verificar datos del ciudadano</span>
            <InputEtiqueta etiqueta="Cédula o pasaporte" placeholder="0403020101" width={'343px'} type={'text'} disabled={true} value={clienteData.cedula} />
            <InputEtiqueta etiqueta="País de nacimiento" placeholder="ECUATORIANO" width={'343px'} type={'text'} disabled={true} value={clienteData.ciudad + ", " + clienteData.pais} />
            <InputEtiqueta etiqueta="Nombres" placeholder="Perez Terán" width={'343px'} type={'text'} disabled={true} value={clienteData.primer_nombre} />
            <InputEtiqueta etiqueta="Apellidos" placeholder="Jose David" width={'343px'} type={'text'} disabled={true} value={clienteData.primer_apellido} />
            <InputEtiqueta etiqueta="Edad" placeholder="18 agosto 2002" width={'343px'} type={'text'} disabled={true} value={clienteData.edad} />
            <InputEtiqueta etiqueta="Valor de la entrada" placeholder="Adulto 1$" width={'343px'} disabled={true} type={'text'} value={`${ticketData.descripcion} ${ticketData.precio}$`} />
          </section>
          <section className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-md:flex max-md:flex-col">
            <span className="col-span-2 subtitulo-bold">Entrada</span>
            <InputEtiqueta etiqueta="Entrada para" placeholder="Ingresa el número de entradas" width={'343px'} type={'number'} value={numEntradas} onChange={(e) => setNumEntradas(Number(e.target.value))} />
            <InputEtiqueta etiqueta="Valor total" placeholder="0$" width={'343px'} type={'text'} disabled={true} value={`${valorTotal}`} />
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
            {generarQR(numEntradas, clienteData.ciudad, clienteData.pais, ticketData.descripcion, clienteData.primer_nombre, clienteData.primer_apellido, ticketData.precio, valorTotal)}
            <span className="text-base font-light">1234-3433-3423-4343</span>
            <span className="text-center mt-[10px] text-sm">Este código QR es su entrada digital para {numEntradas} persona al Cementerio de Tulcán.</span>
          </section>
          <section className="flex flex-col mt-[25px] text-base text-center">
            <span>Fecha de vencimiento</span>
            <span className="font-bold">{fechaVencimiento}</span>
          </section>
          <section className="flex flex-col mt-[30px] text-base text-center gap-2">
            <BotonIcono texto="IMPRIMIR" color='#0069D9' marginTexto={'0 15px 0 0'} iconDerecha={<IconImprimir width={'20px'} height={'20px'} color={'white'} />} />
            <BotonNormal texto="IR AL INICIO" color='#28A745' onClick={handleIrInicio} />
          </section>
        </div>
      }
      {pasoCrearUsuario &&
        <div className="flex flex-col items-center justify-center gap-[20px] p-4 max-w-full h-screen overflow-y-auto max-md:justify-start max-md:mt-[60px]">
          <section className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-md:flex max-md:flex-col ">
            <span className="col-span-2 subtitulo-bold ">Datos del ciudadano</span>
            <InputEtiqueta
              etiqueta="Cédula o pasaporte"
              placeholder="ej. 0403020101"
              width={'343px'}
              type={'number'}
              value={clienteData.cedula}
              onChange={(e) => setClienteData({ ...clienteData, cedula: e.target.value })}
            />
            <InputEtiqueta
              etiqueta="País de nacimiento"
              placeholder="ej. Ecuador"
              width={'343px'}
              type={'text'}
              value={clienteData.pais}
              onChange={(e) => setClienteData({ ...clienteData, pais: e.target.value })}
            />
            <InputEtiqueta
              etiqueta="Ciudad"
              placeholder="ej. Tulcán"
              width={'343px'}
              type={'text'}
              value={clienteData.ciudad}
              onChange={(e) => setClienteData({ ...clienteData, ciudad: e.target.value })}
            />
            <InputEtiqueta
              etiqueta="Nombres"
              placeholder="ej. Perez Terán"
              width={'343px'}
              type={'text'}
              value={clienteData.primer_nombre}
              onChange={(e) => setClienteData({ ...clienteData, primer_nombre: e.target.value })}
            />
            <InputEtiqueta
              etiqueta="Apellidos"
              placeholder="ej. Jose David"
              width={'343px'}
              type={'text'}
              value={clienteData.primer_apellido}
              onChange={(e) => setClienteData({ ...clienteData, primer_apellido: e.target.value })}
            />
            <InputEtiqueta
              etiqueta="Edad"
              placeholder="ej. 19"
              width={'343px'}
              type={'number'}
              value={clienteData.edad}
              onChange={(e) => setClienteData({ ...clienteData, edad: e.target.value })}
            />
            <InputEtiqueta
              etiqueta="Género"
              placeholder="Masculino"
              width={'343px'}
              type={'text'}
              value={clienteData.genero}
              onChange={(e) => setClienteData({ ...clienteData, genero: e.target.value })}
            />
          </section>
          <section className="mt-[20px] ">
            <BotonNormal texto="CANCELAR" color='#C82333' onClick={handleRegresarAgregarCliente} />
            <BotonNormal texto="REGISTRAR CLIENTE" color='#28A745' margin={'0 0 0 20px'} onClick={handleCrearCliente} />
          </section>
        </div>
      }
    </div>
  )
}

export default InicioAdministrador