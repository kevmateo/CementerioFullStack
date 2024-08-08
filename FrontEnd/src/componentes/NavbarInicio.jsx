import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/logo-fronteratech.svg';
import IconUser from './iconos/IconUser';
import { PATH_INICIO, PATH_HISTORIAL_ENTRADAS } from '../routes/paths.js';
import IconMenu from './iconos/IconMenu.jsx';
import MenuDesplegable from './MenuDesplegable.jsx';

function NavbarInicio() {
  const location = useLocation();
  const isPhone = window.innerWidth < 768;
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { nombre: 'INICIO', path: PATH_INICIO },
    { nombre: 'HISTORIAL DE ENTRADAS', path: PATH_HISTORIAL_ENTRADAS }
  ];

  const handleMostrarMenu = () => {
    setShowMenu(true);
  };

  const handleOcultarMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 h-20 w-full flex items-center justify-between px-6 max-md:px-4 z-50">
      <div className="flex items-center">
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mr-[20px] border">
          <img src={Logo} className="h-[40px] w-[40px] object-cover" alt="logo" />
        </div>
        <div className="max-md:hidden">
          <span className="text-black text-3xl font-Logo font-bold">Frontera Tech</span>
          <span className="text-3xl font-Logo font-bold text-Verde"> Tour</span>
        </div>
      </div>
      <div className="flex items-center">
        <Link
          to={PATH_INICIO}
          className={`text-base text-black mx-6 max-md:hidden ${location.pathname === PATH_INICIO ? 'font-bold' : ''}`}
        >
          INICIO
        </Link>
        <Link
          to={PATH_HISTORIAL_ENTRADAS}
          className={`text-base text-black mx-6 max-md:hidden ${location.pathname === PATH_HISTORIAL_ENTRADAS ? 'font-bold' : ''}`}
        >
          HISTORIAL DE ENTRADAS
        </Link>
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center border ml-[40px] max-md:hidden">
          <IconUser width={25} height={25} color="black" />
        </div>
        {isPhone && (
          <div
            className="h-16 w-16 bg-white rounded-full flex items-center justify-center border ml-[20px]"
            onClick={handleMostrarMenu}
          >
            <IconMenu width={30} height={30} color="black" />
          </div>
        )}
      </div>
      {showMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOcultarMenu}>
          <MenuDesplegable links={links} />
        </div>
      )}
    </nav>
  );
}

export default NavbarInicio;