import Link from "next/link";
import classNames from "classnames";
import { IconType } from "react-icons";
import { IoLogoTiktok, IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5'

type SocialLink = {
  href: string;
  title: string;
  icon: IconType;
}

const socials: SocialLink[] = [{
  href: 'https://instagram.com',
  icon: IoLogoInstagram,
  title: 'instagram',
}, {
  href: 'https://facebook.com',
  icon: IoLogoFacebook,
  title: 'facebook',
}, {
  href: 'https://linkedin.com',
  icon: IoLogoLinkedin,
  title: 'linkedin',
}, {
  href: 'https://tiktok.com',
  icon: IoLogoTiktok,
  title: 'tiktok',
}];

type Props = {
  withBorder?: boolean;
  size?: number;
  layout?: 'horizontal' | 'vertical';
}

const component = ({ withBorder = false, size = 16, layout = 'horizontal' }: Props) => (
  socials && socials.map(s => {
    let Component = s.icon;

    return (
      <div key={s.title} 
        className={classNames(`flex justify-center items-center cursor-pointer
         text-brand transition hover:text-brand-dark`,
         {'flex-col': layout === 'vertical', 'flex-row': layout === 'horizontal'},
        [{'w-8 h-8 rounded-full bg-transparent border-[1px] border-brand-darker hover:border-secondary': withBorder}])}>
        <Link href={s.href} target="_blank">
          <Component size={size} />
        </Link>
      </div>
    )
  })
);

export default component
