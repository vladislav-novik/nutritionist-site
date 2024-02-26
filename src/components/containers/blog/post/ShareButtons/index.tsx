"use client";

import { usePathname } from "next/navigation";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import Copy from "./Copy";

export default function ShareButtons() {
  const rootUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL
      : window.location.origin;
  const pathname = usePathname();
  const url = `${rootUrl}${pathname}`;

  const className = `h-6 w-6 fill-zinc-400 transition-all duration-200 hover:fill-[#154a2c] lg:w-7 lg:h-7`;

  return (
    <ul className="flex justify-end space-x-3 lg:space-y-4 lg:space-x-0 lg:flex-col lg:items-center">
      <li>
        <Copy className={className} />
      </li>

      <li>
        <FacebookShareButton url={url}>
          <Facebook className={className} />
        </FacebookShareButton>
      </li>

      <li>
        <LinkedinShareButton url={url}>
          <Linkedin className={className} />
        </LinkedinShareButton>
      </li>
      
      <li>
        <TwitterShareButton url={url}>
          <Twitter className={className} />
        </TwitterShareButton>
      </li>
    </ul>
  );
}
