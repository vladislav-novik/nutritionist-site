import { motion } from 'framer-motion';
import { Link } from 'react-scroll'
import classnames from 'classnames'

const links: NavLink[] = [{
  href: 'about',
  title: 'About'
}, {
  href: 'services',
  title: 'Services'
}, {
  href: 'testimonials',
  title: 'Testimonials'
}, {
  href: 'articles',
  title: 'Articles'
}, {
  href: 'contact-me',
  title: 'Contact me'
}];

type Props = {
  mobileMenu: boolean
}

export default function NavLinks({ mobileMenu }: Props) {
  return (
    <>
      {links && links.map(l => (
        <Link
          key={l.title}
          className={classnames("text-gray-900 transition hover:text-emerald-700", [{
            "-mx-3 block rounded-lg px-3 py-2 text-center cursor-pointer text-base font-semibold leading-7": mobileMenu,
            "cursor-pointer text-base font-semibold leading-6": !mobileMenu
          }])}
          activeClass="text-emerald-700"
          to={l.href}
          spy={true}
          smooth={true}
          isDynamic={true}
          duration={500}
          delay={300}
          offset={-64}
          spyThrottle={500}>
          {l.title}
        </Link>
      ))}
    </>

  );
}

type NavLink = {
  href: string;
  title: string;
}