type PropsType = {
  amount: number;
};

export default function Indicators({ amount }: PropsType) {
  const buttons = [];

  for (let i = 0; i < amount; i++) {
    buttons.push(
      <button
        type="button"
        data-te-target="#carousel"
        data-te-slide-to={i}
        data-te-carousel-active
        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
        aria-current="true"
        aria-label={`Slide ${i + 1}`}></button>
    );
  }

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
      data-te-carousel-indicators>
      {buttons}
    </div>
  );
}