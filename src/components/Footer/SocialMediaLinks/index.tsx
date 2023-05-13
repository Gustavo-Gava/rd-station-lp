import Image from "next/image";

import * as S from "./styles";

const socialMediaLinks = [
	{
		name: "Twitter",
		src: "/svg/twitter.svg",
		href: "https://twitter.com/rd_station",
	},
	{
		name: "Facebook",
		src: "/svg/facebook.svg",
		href: "https://www.facebook.com/ResultadosDigitais/",
	},
	{
		name: "LinkedIn",
		src: "/svg/linkedin.svg",
		href: "https://www.linkedin.com/company/resultadosdigitais",
	},
	{
		name: "Instagram",
		src: "/svg/instagram.svg",
		href: "https://www.instagram.com/resdigitais/",
	},
	{
		name: "Youtube",
		src: "/svg/youtube.svg",
		href: "https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ",
	},
];

export const SocialMediaLinks = () => {
	return (
		<S.SocialMediaLinksContainer>
			{socialMediaLinks.map((link) => (
				<S.SocialMediaLink key={link.name} href={link.href} target="_blank">
					<Image src={link.src} width={32} height={32} alt={link.name} />
				</S.SocialMediaLink>
			))}
		</S.SocialMediaLinksContainer>
	);
};
