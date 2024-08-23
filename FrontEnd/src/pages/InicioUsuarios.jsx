import { useState, useEffect } from "react";
import NavbarUsuario from "../componentes/NavbarUsuario";
import InputEtiqueta from "../componentes/moleculas/InputEtiqueta";
import BotonNormal from "../componentes/moleculas/BotonNormal";
import BotonIcono from "../componentes/moleculas/BotonIcono";
import IconDescargar from "../componentes/iconos/IconDescargar";
import { obtenerInfoTicket } from '../tickets'
import { generarQR } from '../generadorQR'

function InicioUsuarios() {
  const [paso1, setPaso1] = useState(true);
  const [paso2, setPaso2] = useState(false);
  const [ticketData, setTicketData] = useState({ descripcion: "", precio: 0 });
  const [numEntradas, setNumEntradas] = useState(1);
  const [valorTotal, setValorTotal] = useState(0);
  const [motivoVisita, setMotivoVisita] = useState("")
  const [fechaEmision, setFechaEmision] = useState(new Date().toISOString());
  const [fechaCaducidad, setFechaCaducidad] = useState("");
  const [clienteData, setClienteData] = useState({
    id_cliente: "",
    cedula: "",
    pais: "",
    ciudad: "",
    primer_nombre: "",
    primer_apellido: "",
    edad: "",
  });

  useEffect(() => {
    const handlerGetClienteByCedula = () => {
      const cedula = localStorage.getItem('userCI');
      fetch(`http://localhost:3001/cliente?cedula=${cedula}`)
        .then(response => response.json())
        .then(data => {
          setClienteData({
            id_cliente: data.id_cliente || "",
            cedula: data.cedula || "",
            pais: data.pais || "",
            ciudad: data.ciudad || "",
            primer_nombre: data.primer_nombre || "",
            primer_apellido: data.primer_apellido || "",
            edad: data.edad || "",
          });
          const ticketInfo = obtenerInfoTicket(data.edad, cedula)
          setTicketData(ticketInfo)
        })
        .catch(error => console.log('Error en la petición', error));
    };

    handlerGetClienteByCedula();
  }, []);

  useEffect(() => {
    setValorTotal(numEntradas * ticketData.precio);

    const emisionDate = new Date(fechaEmision)
    emisionDate.setDate(emisionDate.getDate() + 1)
    setFechaCaducidad(emisionDate.toISOString())
  }, [numEntradas, ticketData, fechaEmision]);


  const handleIrInicio = () => {
    setMotivoVisita("");
    setPaso2(false);
    setPaso1(true);
  };

  const handleGuardarTicket = () => {

    if (!handleValidarCamposDeCompra()) {
      return
    }

    const datos = {
      id_cliente: clienteData.id_cliente,
      cedula: clienteData.cedula,
      id_tipo_ticket: ticketData.id,
      fecha_emision: fechaEmision,
      fecha_caducidad: fechaCaducidad,
      valido_por: numEntradas,
      motivo_visita: motivoVisita,
      codigo_qr: generarQR(numEntradas, clienteData.ciudad, clienteData.pais, ticketData.descripcion, clienteData.primer_nombre, clienteData.primer_apellido, ticketData.precio, valorTotal),
    }
    console.log(datos)
    fetch('http://localhost:3001/guardarTicket', {
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
          setPaso1(false)
          setPaso2(true)
        }
      })
  }

  const handleValidarCamposDeCompra = () => {

    const campos = [numEntradas, motivoVisita];
    const camposVacios = campos.some(campo => campo === '');

    if (camposVacios) {
      alert('Todos los campos son obligatorios');
      return false;
    } else if (numEntradas <= 0) {
      alert('El número de entradas debe ser mayor a 0');
      return false;
    }
    return true;
  }

  return (
    <div className="bg-Gris-Fondos h-screen flex flex-col items-center justify-center w-screen">
      <NavbarUsuario />
      {paso1 && (
        <div className="flex flex-col items-center justify-center gap-[20px] p-4 max-w-full h-screen overflow-y-auto max-md:justify-start max-md:mt-[60px]">
          <section className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-md:flex max-md:flex-col ">
            <span className="col-span-2 subtitulo-bold ">Datos Personales</span>
            <InputEtiqueta etiqueta="Cédula o pasaporte" placeholder="0403020101" width={'343px'} type={'text'} disabled={true} value={clienteData.cedula} />
            <InputEtiqueta etiqueta="País de nacimiento" placeholder="ECUATORIANO" width={'343px'} type={'text'} disabled={true} value={clienteData.ciudad + ", " + clienteData.pais} />
            <InputEtiqueta etiqueta="Nombres" placeholder="Perez Terán" width={'343px'} type={'text'} disabled={true} value={clienteData.primer_nombre} />
            <InputEtiqueta etiqueta="Apellidos" placeholder="Jose David" width={'343px'} type={'text'} disabled={true} value={clienteData.primer_apellido} />
            <InputEtiqueta etiqueta="Edad" placeholder="18 agosto 2002" width={'343px'} type={'text'} disabled={true} value={clienteData.edad} />
            <InputEtiqueta etiqueta="Valor de la entrada" placeholder="Adulto 1$" width={'343px'} type={'text'} disabled={true} value={`${ticketData.descripcion} ${ticketData.precio}$`} />
            <InputEtiqueta etiqueta="Motivo de la visita" placeholder="ej. Turismo" width={'343px'} type={'text'} value={motivoVisita} onChange={(e) => setMotivoVisita(e.target.value)} />
          </section>
          <section className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-md:flex max-md:flex-col">
            <span className="col-span-2 subtitulo-bold">Entrada</span>
            <InputEtiqueta etiqueta="Entrada para" placeholder="Ingresa el número de entradas" width={'343px'} type={'number'} value={numEntradas} onChange={(e) => setNumEntradas(Number(e.target.value))} />
            <InputEtiqueta etiqueta="Valor total" placeholder="0$" width={'343px'} type={'text'} disabled={true} value={`${valorTotal}`} />
          </section>
          <section className="mt-[20px] ">
            <BotonNormal texto="COMPRAR ENTRADA" color='#28A745' margin={'0 0 0 20px'} onClick={handleGuardarTicket} />
          </section>
        </div>
      )}
      {paso2 && (
        <div className="flex flex-col items-center border w-[339px] px-[30px] py-[30px] rounded-t-[20px] overflow-y-auto no-scrollbar justify-start mt-[80px] mb-[20px]">
          <span className="text-4xl font-bold font-Logo">Frontera Tech</span>
          <section className="flex flex-col items-center mt-[20px]">
            {generarQR(numEntradas, clienteData.ciudad, clienteData.pais, ticketData.descripcion, clienteData.primer_nombre, clienteData.primer_apellido, ticketData.precio, valorTotal)}
            <span className="text-base font-light">1234-3433-3423-4343</span>
            <span className="text-center mt-[10px] text-sm">Este código QR es su entrada digital para {numEntradas} persona al Cementerio de Tulcán.</span>
          </section>
          <section className="flex flex-col mt-[25px] text-base text-center">
            <span>Fecha de vencimiento</span>
            <span className="font-bold">{fechaCaducidad.split('T')[0]}</span>
          </section>
          <section className="flex flex-col mt-[30px] text-base text-center gap-2">
            <BotonIcono texto="DESCARGAR" color='#0069D9' marginTexto={'0 15px 0 0'} iconDerecha={<IconDescargar width={'20px'} height={'20px'} color={'white'} color2={'white'} />} />
            <BotonNormal texto="IR AL INICIO" color='#28A745' onClick={handleIrInicio} />
          </section>
        </div>
      )}
    </div>
  );
}

export default InicioUsuarios;
