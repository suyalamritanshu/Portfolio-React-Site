
const InputField = (props) => {
  const { handleChange, name, type, value, required = true } = props;
  return (
    <div className="mb-5">

      <input id={name} className="border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2" type={type} onChange={handleChange} value={value} name={name} required={required} />
    </div>
  )
}

export default InputField
