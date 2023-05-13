import Image from "next/image";
import * as S from "./styles";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => {
	return (
		<S.Container>
			<S.ContentContainer>
				<S.SocialContentWrapper>
					<S.LogoContainer>
						<Image src="/svg/logo-rd-station-default.svg" width={174} height={32} alt="Logo" />
					</S.LogoContainer>

					<S.LinksContainerDesktop>
						<SocialMediaLinks />
					</S.LinksContainerDesktop>
				</S.SocialContentWrapper>

				<S.Divider />

				<S.LinksContainerMobile>
					<SocialMediaLinks />
				</S.LinksContainerMobile>

				<S.CopyrightContainer>© 2021 RD Station. Política de Privacidade.</S.CopyrightContainer>
			</S.ContentContainer>
		</S.Container>
	);
};
