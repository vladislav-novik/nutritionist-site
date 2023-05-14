type PropsType = {
  direction: 'left' | 'right';
}

export default function Control({ direction }: PropsType) {
  const icon = direction === 'right' ? (<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>) : 
    (<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>);

  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-300/30 group-hover:bg-green-300/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-green-300 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-green-300 dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        {icon}
      </svg>
    </span>
  );
}