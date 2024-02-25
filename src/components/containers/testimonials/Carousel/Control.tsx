type Props = {
  direction: 'left' | 'right';
}

export default function Control({ direction }: Props) {
  const icon = direction === 'right' ? (<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>) : 
    (<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>);

  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/30 group-hover:bg-emerald-400/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-emerald-400 sm:h-10 sm:w-10">
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-emerald-400 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        {icon}
      </svg>
    </span>
  );
}