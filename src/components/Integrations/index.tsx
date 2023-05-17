import Image from "next/image";
import * as S from "./styles";
import { Button } from "../ui/Button";
import { ButtonLink } from "../ui/ButtonLink";

interface IntegrationsProps {
	title: string;
	description: string;
	platforms: Array<{
		name: string;
		icon: string;
	}>;
}

export const Integrations = ({ title, description, platforms }: IntegrationsProps) => {
	return (
		<S.Container>
			<S.Header>
				<S.Title>{title}</S.Title>

				<S.Description>{description}</S.Description>

				<S.ButtonWrapperDesktop>
					<Button>CRIAR CONTA GRATUITA</Button>
				</S.ButtonWrapperDesktop>
			</S.Header>

			<S.IconsContainer>
				{platforms.map((platform) => (
					<S.IconWrapper key={platform.name}>
						<Image width={40} height={40} src={platform.icon} alt={platform.name} />

						<S.IconName>{platform.name}</S.IconName>
					</S.IconWrapper>
				))}
			</S.IconsContainer>

			<S.ButtonWrapperMobile>
				<ButtonLink href="https://app.rdstation.com.br/signup" withIcon={false}>
					CRIAR CONTA GRATUITA
				</ButtonLink>
			</S.ButtonWrapperMobile>
		</S.Container>
	);
};
