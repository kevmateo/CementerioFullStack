
function BotonNormal({ texto, onClick , color, width, margin }) {
  return (
    <button 
      className="py-[10px] px-[20px] rounded-[10px] text-base font-bold shadow-normal text-white"
      onClick={onClick}
      style={{ backgroundColor: color, width: width, margin: margin }}
    >{texto}
    </button>
  );
}

export default BotonNormal;