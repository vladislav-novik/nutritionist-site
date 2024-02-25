const component = () => {
  return (
    <a
      href="#"
      title=""
      className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#5dc3fa] rounded-full lg:mt-16 hover:bg-[#50a4d1] focus:bg-[#50a4d1]"
      role="button"
    >
      Join for free
      <svg
        className="w-6 h-6 ml-8 -mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </a>
  );
};

export default component;