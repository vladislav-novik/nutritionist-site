type Props = {
    name: string;
    label?: string;
    placeholder?: string;
    rows?: number;
  };
  
  const component = ({ name, label, placeholder, rows = 5 }: Props) => {
    return (
      <div className="sm:col-span-2">
        <label
          htmlFor={name}
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          { label }
        </label>
        <div className="mt-2.5">
          <textarea
            name={name}
            id={name}
            placeholder={placeholder}
            rows={rows}
            className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#50a4d1] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    );
  };
  
  export default component;
  