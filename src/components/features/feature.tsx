import { Service } from "@/types/service";

type Props = {
  feature: Service;
};

export const component = ({ feature }: Props) => {
  return (
    <div key={feature.name}>
      <div className="relative flex items-center justify-center mx-auto">
        <svg
          className="text-[#ffe536]"
          width="62"
          height="65"
          viewBox="0 0 62 65"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z" />
        </svg>

        <svg
          className="absolute text-[#154a2c] w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <h3 className="mt-8 font-content text-lg font-semibold text-[#154a2c]">
        Fast & Easy to Load
      </h3>
      <p className="mt-4 font-content text-base text-gray-600">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
  );
};

export default component;
