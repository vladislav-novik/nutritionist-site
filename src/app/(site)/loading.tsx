import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed bg-white inset-0 z-100 w-screen h-screen flex items-center justify-center">
      <Image src={'/images/loader.gif'} width={200} height={200} alt='loader' aria-hidden></Image>
    </div>
  )
}