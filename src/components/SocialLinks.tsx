import Link from "next/link";
import classNames from "classnames";
import { IconType } from "react-icons";
import { IoLogoTiktok, IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5'

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
}

export default function SocialLinks({ withBorder, size }: Props) {
  return (
    <div className="flex justify-center space-x-6 md:order-2">
      {socials.map(s => {
        let Component = s.icon;

        return (
          <div key={s.title} 
            className={classNames(`flex justify-center items-center cursor-pointer
            border-gray-400 text-gray-400 hover:text-emerald-600 hover:border-emerald-600`,
            [{'w-8 h-8 rounded-full bg-transparent border-[1px]': withBorder}])}>
            <Link href={s.href} target="_blank">
              <Component size={size || 16} />
            </Link>
          </div>
        )
      })}
    </div>
  );
}

type SocialLink = {
  href: string;
  title: string;
  icon: IconType;
}
