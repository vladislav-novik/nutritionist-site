import Button from '@/components/shared/buttons/Button'
import CTAButton from '@/components/shared/buttons/CTAButton'
import Section from '@/components/shared/section/Section'
import Image from "next/image";

const component = () => {
  return (
    <Section id="hero" className="pt-10 overflow-hidden bg-[#fbf8e9] md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-center text-3xl font-bold leading-tight text-[#154a2c] md:text-left sm:text-4xl lg:text-5xl">
              Cut back on your drinking with no pressure to quit
            </h1>
            <p className="text-center max-w-lg mt-3 text-lg leading-relaxed text-[#345753] md:text-left md:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            {/* <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Twitter
              </a>
            </p> */}
            
            {/* <CTAButton /> */}
            <div className="mt-8 flex justify-center md:justify-start">
              <Button className="px-12 py-2" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 -mb-40 left-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="551" height="545" viewBox="0 0 551 545" fill="none">
                <path d="M551 224.656C551 373.677 434.779 545 285.54 545C136.3 545 15.3176 424.195 15.3176 275.174C15.3176 126.154 -52.379 0 96.8605 0C246.1 0 551 75.636 551 224.656Z" fill="#ffe536"/>
                {/* <defs>
                <linearGradient id="paint0_linear" x1="11.4792" y1="0.000136836" x2="567.423" y2="17.3016" gradientUnits="userSpaceOnUse">
                <stop stop-color="#ffe536"/>
                <stop offset="1" stop-color="#2925EB"/>
                </linearGradient>
                </defs> */}
              </svg>
            </div>
            <Image
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              alt=""
              width={450}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default component;
