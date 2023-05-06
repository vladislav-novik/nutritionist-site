import Image from 'next/image'

export const Main = () => {
    return (
        <section className="mx-auto w-full h-[60vh]">
            <div className="flex flex-col md:flex-row h-full">
                <div className="order-1 mg flex-1 flex flex-col justify-center">
                    <h1>Marya Novik</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Atque dicta non dolor illo et aspernatur esse accusantium. <br />
                        Iusto, odit totam, asperiores optio magnam, <br />
                        quis dolorem voluptates neque molestias in reprehenderit? <br />
                    </h2>
                </div>
                <div className="order-2 flex-1 flex justify-center align-center relative">
                    <Image src="/images/main.webp" alt="Marya Novik" fill={true} style={{objectFit: 'cover'}} />
                </div>
            </div>
        </section>
    );
}