import Link from 'next/link'

const component = () => {
  return (
    <Link className="bg-[#5dc3fa] px-12 py-2
        text-white font-semibold 
        transition-colors duration-200
    hover:bg-[#50a4d1] 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#50a4d1]" href={'/articles'}>Read more!</Link>
  );
}

export default component;