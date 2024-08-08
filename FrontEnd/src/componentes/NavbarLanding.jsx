import { Link, useLocation } from "react-router-dom"
import Logo from '../assets/logo-fronteratech.svg'

function NavbarLanding({ onClickLogin, onClickRegistrar }) {

  return (
    <nav className="h-20 w-full flex items-center justify-between px-6 max-md:px-4">
      <div className="flex items-center">
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-normal mr-[20px]">
          <img src={Logo} className='h-[40px] w-[40px] object-cover' alt='logo' />
        </div>
        <div className="max-md:hidden"><span className="text-white text-3xl font-Logo font-bold">Frontera Tech</span><span className="text-3xl font-Logo font-bold text-Verde"> Tour</span></div>
      </div>
      <div>
        <button className='p-[10px] mx-[10px] rounded-[10px] text-white normal-bold border-white border shadow-normal max-md:mx-[5px]'
        onClick={onClickRegistrar}
        >REGISTRATE</button>
        <button className='p-[10px] ml-[10px] rounded-[10px] bg-Verde text-white normal-bold shadow-normal max-md:ml-[5px]' 
        onClick={onClickLogin}
        >INGRESAR</button>
      </div>
    </nav>

  )
}

export default NavbarLanding