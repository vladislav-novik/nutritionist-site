"use client"

import { usePathname } from "next/navigation";
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton
} from "react-share";
import Facebook from "./ShareButtons/Facebook";
import Linkedin from "./ShareButtons/Linkedin";
import Twitter from "./ShareButtons/Twitter";
import Copy from "./ShareButtons/Copy";

export default function ShareButtons() {
	const rootUrl = typeof window === 'undefined' ? process.env.BASE_URL : window.location.origin
	const pathname = usePathname()
	const url = `${rootUrl}${pathname}`

	const className="h-10 w-10 fill-zinc-500 transition hover:fill-zinc-600"

	return (
		<div className="flex space-x-6 items-center">
			<Copy className="h-10 w-10 stroke-zinc-500 transition hover:stroke-zinc-600" />

			<FacebookShareButton url={url}>
				<Facebook className={className} />
			</FacebookShareButton>

			<LinkedinShareButton url={url}>
				<Linkedin className={className} />
			</LinkedinShareButton>

			<TwitterShareButton url={url}>
				<Twitter className={className} />
			</TwitterShareButton>
		</div>
	);
}