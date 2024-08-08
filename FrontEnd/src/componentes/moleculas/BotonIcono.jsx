
function BotonIcono({ width, color, textColor, iconIzquierda, iconDerecha, texto, shadow, marginTexto, onClick, disabled }) {
  return (
    <button 
      className="py-[10px] px-[20px] rounded-[10px] text-base font-bold inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-white"
      style={{ width: width, backgroundColor: color, color: textColor, boxShadow: shadow }}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{iconIzquierda}</span><span style={{ margin: marginTexto }}>{texto}</span><span>{iconDerecha}</span>
    </button>
  );
}

export default BotonIcono;