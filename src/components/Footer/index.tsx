import Image from "next/image";
import * as S from "./styles";

const socialMediaLinks = [
	{
		name: "Twitter",
		src: "/svg/twitter.svg",
		href: "https://twitter.com/rdstation",
	},
	{
		name: "Facebook",
		src: "/svg/facebook.svg",
		href: "https://www.facebook.com/rdstation",
	},
	{
		name: "LinkedIn",
		src: "/svg/linkedin.svg",
		href: "https://www.linkedin.com/company/rdstation",
	},
	{
		name: "Instagram",
		src: "/svg/instagram.svg",
		href: "https://www.instagram.com/rdstationapp",
	},
	{
		name: "Youtube",
		src: "/svg/youtube.svg",
		href: "https://www.youtube.com/channel/UCGmZg2ZEhFtBjezqns5z9VQ",
	},
];

export const Footer = () => {
	return (
		<S.Container>
			<S.ContentContainer>
				<S.LogoContainer>
					<Image src="/svg/logo.svg" width={174} height={32} alt="Logo" />
				</S.LogoContainer>

				<S.Divider />

				<S.SocialMediaLinksContainer>
					{socialMediaLinks.map((link) => (
						<S.SocialMediaLink key={link.name} href={link.href} target="_blank">
							<Image src={link.src} width={32} height={32} alt={link.name} />
						</S.SocialMediaLink>
					))}
				</S.SocialMediaLinksContainer>

				<S.CopyrightContainer>© 2021 RD Station. Política de Privacidade.</S.CopyrightContainer>
			</S.ContentContainer>
		</S.Container>
	);
};
