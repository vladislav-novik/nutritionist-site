import { motion } from 'framer-motion';
import Link from 'next/link'
import classnames from 'classnames'
import config from '@/app/app.config';

type Props = {
  mobileMenu: boolean
}

const component = ({ mobileMenu }: Props) => {
  const { dict: { header: { links } } } = config

  return (
    <>
      {links && links.map(l => (
        <Link
          key={l.title}
          href={`/${l.href}`}
          className={classnames("text-brand-dark transition hover:text-brand", [{
            "-mx-3 block rounded-lg px-3 py-2 text-center cursor-pointer text-base font-semibold leading-7": mobileMenu,
            "cursor-pointer text-lg font-semibold leading-6": !mobileMenu
          }])}
          // activeClass="text-emerald-700"
          >
          {l.title}
        </Link>
      ))}
    </>

  );
}

export default component
