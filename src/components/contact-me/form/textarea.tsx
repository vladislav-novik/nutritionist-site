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
          className="block text-left text-md font-semibold leading-6 text-primary"
        >
          { label }
        </label>
        <div className="mt-2.5">
          <textarea
            name={name}
            id={name}
            placeholder={placeholder}
            rows={rows}
            className="block w-full border-0 rounded-lg px-3.5 py-2 text-primary-dark ring-1 ring-inset ring-btn-border placeholder:text-primary-dark placeholder:text-opacity-50 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    );
  };
  
  export default component;
  