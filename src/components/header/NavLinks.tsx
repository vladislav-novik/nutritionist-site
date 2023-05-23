const links: NavLink[] = [{
  href: '#about',
  title: 'About'
}, {
  href: '#services',
  title: 'Services'
}, {
  href: '#testimonials',
  title: 'Testimonials'
}, {
  href: '#articles',
  title: 'Articles'
}, {
  href: '#contact-me',
  title: 'Contact me'
}];

type Props = {
  mobileMenu: boolean
}

export default function NavLinks({ mobileMenu }: Props) {
  const mobileClasses = "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  const desktopClasses = "text-sm font-semibold leading-6 text-gray-900" 

  const classNames = mobileMenu ? mobileClasses : desktopClasses;

  return (
    <>
      {links.map(l => (
        <a key={l.title} href={l.href} className={classNames}>
          {l.title}
        </a>
      ))}
    </>

  );
}

type NavLink = {
  href: string;
  title: string;
}