// import { useRef } from 'react'

type Props = {
  className?: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  focus?: boolean;
  focusDelay?: number;
};

const Component = ({ name, label, placeholder, type = 'text', focus = false, focusDelay = 0, className }: Props) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-left text-md font-semibold leading-6 text-brand-darker"
      >
        { label }
      </label>
      <div className="mt-2.5">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="block w-full border-0 rounded-lg px-3.5 py-2 text-brand-darkest ring-1 ring-inset ring-brand 
            placeholder:text-brand-darkest placeholder:text-opacity-50 
            focus:ring-2 focus:ring-inset focus:ring-brand-dark 
            sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Component;
