import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import img001 from '../assets/image00004.jpeg';
import img002 from '../assets/image00001.jpeg';
import img003 from '../assets/image00002.jpeg';
import img004 from '../assets/image00006.jpeg';
import img005 from '../assets/image00005.jpeg';
import img006 from '../assets/image00007.jpg';
import img007 from '../assets/image00008.jpg';
import img008 from '../assets/image00009.jpg';
import NavbarLanding from "../componentes/NavbarLanding";
import Login from '../componentes/Login';
import Registrar from '../componentes/Registrar';
import OlvidarContraseña from '../componentes/OlvidarContraseña';
import { PATH_INICIO } from '../routes/paths.js';

function Home() {

  const [imagenActual, setImagenActual] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistrar, setShowRegistrar] = useState(false);
  const [showOlvidarContraseña, setShowOlvidarContraseña] = useState(false);
  const [info, setInfo] = useState([]);
  const isPhone = window.innerWidth < 768;
  const navigate = useNavigate();
  const imagenes = [
    img001,
    img002,
    img003,
    img004
  ]
  const imagenesPhone = [
    img005,
    img006,
    img007,
    img008
  ]

  const pasarImagenesFondo = () => {
    setImagenActual((imagenActual + 1) % (isPhone ? imagenesPhone.length : imagenes.length));
  }

  const handleAbrirLogin = () => {
    setShowLogin(true);
  }

  const handleCerrarLogin = () => {
    setShowLogin(false);
  }

  const handleAbrirRegistrar = () => {
    setShowRegistrar(true);
  }

  const handleCerrarRegistrar = () => {
    setShowRegistrar(false);
  }

  const handleAbrirOlvidarContraseña = () => {
    setShowOlvidarContraseña(true);
  }

  const handleCerrarOlvidarContraseña = () => {
    setShowOlvidarContraseña(false);
  }

  const handleIniciarSesion = () => {
    navigate(PATH_INICIO);
  }

  const handleDatosInfo = () => {
    fetch('http://localhost:3001/informacion', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error al obtener la información');
        }
      })
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        console.log('Error en la petición', error);
      });
  }

  useEffect(() => {
    handleDatosInfo();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(pasarImagenesFondo, 7000);

    return () => clearInterval(intervalo)
  }, [imagenActual, isPhone])

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <img src={isPhone ? imagenesPhone[imagenActual] : imagenes[imagenActual]} className="w-full h-full object-fill" alt="Fondo de pantalla" />
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavbarLanding onClickLogin={handleAbrirLogin} onClickRegistrar={handleAbrirRegistrar} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="w-[796px] text-white text-justify max-md:px-4 max-md:text-left">
          <h1 className="text-[32px] font-bold mb-[5px]">{info.titulo_bienvenida}</h1>
          <h2 className="titulo-bold mb-[10px]">{info.subtitulo_bienvenida}</h2>
          <p className="mb-[25px] text-base max-md:text-justify">{info.parrafo_inicial}</p>
          <button
            className='py-[10px] px-[20px] bg-Azul rounded-[10px] text-base font-bold shadow-normal'
            onClick={handleAbrirLogin}
          >Compra tus entradas aquí!</button>
        </div>
      </div>
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Login
            onClickSalir={handleCerrarLogin}
            onClickAbrirRegistrar={() => {
              handleCerrarLogin();
              handleAbrirRegistrar();
            }}
            onClickAbrirOlvidarContraseña={() => {
              handleCerrarLogin();
              handleAbrirOlvidarContraseña();
            }}
            onClickIniciarSesion={handleIniciarSesion}
          />
        </div>
      )}
      {showRegistrar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Registrar
            onClickSalir={handleCerrarRegistrar}
            onClickTerminarRegistro={handleCerrarRegistrar}
            onClickAbrirIniciarSesion={() => {
              handleCerrarRegistrar();
              handleAbrirLogin();
            }}
          />
        </div>
      )}
      {showOlvidarContraseña && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <OlvidarContraseña
            onClickSalir={handleCerrarOlvidarContraseña}
          />
        </div>
      )}
    </div>
  );
}

export default Home;