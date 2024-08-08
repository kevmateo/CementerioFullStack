
function InputEtiqueta({ etiqueta, type, placeholder, value, id, onChange, width, margin, gridCol, disabled }) {
  return (
    <div className="flex flex-col">
      <span className="text-base font-bold mb-[5px]">{etiqueta}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        className="h-[50px] rounded-[10px] bg-transparent border hover:border-slate-400 focus:border-slate-400 focus:outline-none px-[10px]"
        style={{ width: width, margin: margin, gridColumn: gridCol,  MozAppearance: 'textfield' }}
        disabled={disabled}
      />
      <style>{`
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        } 
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
}

export default InputEtiqueta;