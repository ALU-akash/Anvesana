export default function FormInput({ label, type, name, placeholder, value, onChange}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {" "}
        {label}{" "}
      </label>{" "}
      <input
        className="p-2 border border-gray-300 rounded-md focus:border-[#2BACDE] focus:ring-0"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />{" "}
    </div>
  );
}
