import Image from 'next/image'

export const Main = () => {
  // return (
  //     <section className="mx-auto w-full h-[60vh]">
  //         <div className="flex flex-col md:flex-row h-full">
  //             <div className="order-1 mg flex-1 flex flex-col justify-center">
  //                 <h1>Marya Novik</h1>
  //                 <h2>
  //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
  //                     Atque dicta non dolor illo et aspernatur esse accusantium. <br />
  //                     Iusto, odit totam, asperiores optio magnam, <br />
  //                     quis dolorem voluptates neque molestias in reprehenderit? <br />
  //                 </h2>
  //             </div>
  //             <div className="order-2 flex-1 flex justify-center align-center relative">
  //                 <Image src="/images/main.webp" alt="Marya Novik" fill={true} style={{objectFit: 'cover'}} />
  //             </div>
  //         </div>
  //     </section>
  // );

  return (
    <section id="main" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>

            </div>
          </div>
          <Image
            src="/images/main.webp"
            alt="Maryia Novik"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </section>
  )
}