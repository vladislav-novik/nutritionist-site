import { useRef } from 'react'

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  focus?: boolean;
  focusDelay?: number;
};

const Component = ({ name, label, placeholder, type = 'text', focus = false, focusDelay = 0 }: Props) => {
  const ref = useRef(null);

  if (focus) {
    setTimeout(() => {
      if (ref) {
        ref.current.focus()
      }
    }, focusDelay)
  }

  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={name}
        className="block text-left text-md font-semibold leading-6 text-brand-darker"
      >
        { label }
      </label>
      <div className="mt-2.5">
        <input
          // TODO: check why it broke the animation
          ref={ref}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="block w-full border-0 rounded-lg px-3.5 py-2 text-brand-darkest ring-1 ring-inset ring-btn-border placeholder:text-brand-darkest placeholder:text-opacity-50 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Component;
