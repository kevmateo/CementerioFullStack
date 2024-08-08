
function RadioBoton({ text, width, checked, onChange }) {
  return (
    <div className="h-[50px] rounded-[10px] bg-transparent border hover:border-slate-400 focus:border-slate-400 focus:outline-none px-[15px] inline-flex items-center justify-start gap-[10px]"  style={{ width: width }} >
      <input type="radio" checked={checked} onChange={onChange}/><span>{text}</span>
    </div>
  )
}

export default RadioBoton;