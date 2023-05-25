"use client"

import {
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TelegramShareButton,
	TelegramIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon
} from "react-share";

const url = "https://youtube.com"

export default function ShareButtons() {
	return (
		<div className="flex space-x-4 items-center">
			<FacebookShareButton url={url}>
				<FacebookIcon round={true} size={32} />
			</FacebookShareButton>

			<LinkedinShareButton url={url}>
				<LinkedinIcon round={true} size={32} />
			</LinkedinShareButton>

			<TelegramShareButton url={url}>
				<TelegramIcon round={true} size={32} />
			</TelegramShareButton>

			<TwitterShareButton url={url}>
				<TwitterIcon round={true} size={32} />
			</TwitterShareButton>

			<WhatsappShareButton url={url}>
				<WhatsappIcon round={true} size={32} />
			</WhatsappShareButton>
		</div>
	);
}