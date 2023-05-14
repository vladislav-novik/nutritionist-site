type PropsType = {
    children: React.ReactNode;
}

export default function CarouselItem({ children }: PropsType) {
    return (
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active>
          { children }
        </div>
    );
}