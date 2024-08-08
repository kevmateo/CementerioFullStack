import { Link, useLocation } from "react-router-dom";

function MenuDesplegable({ links }) {
  const location = useLocation();

  return (
    <div className="p-[20px] w-[255px] h-auto bg-white rounded-[20px] border border-zinc-300 flex-col justify-center items-center gap-5 inline-flex duration-300 ease-out z-50 shadow-lg transform transition-transform">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={`text-center py-[12px] px-[23px] w-full rounded-[20px] flex items-center justify-center ${location.pathname === link.path ? 'bg-[#D9D9D9] font-bold' : 'hover:bg-zinc-200'}`}
        >
          {link.nombre}
        </Link>
      ))}
    </div>
  );
}

export default MenuDesplegable;