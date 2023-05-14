import Image from "next/image";
import * as S from "./styles";
import { Button } from "../ui/Button";

type Data = {
	title: string;
	description: string;
	platforms: Array<{
		name: string;
		icon: string;
	}>;
};

interface IntegrationsProps {
	data: Data;
}

export const Integrations = ({ data }: IntegrationsProps) => {
	const { title, description, platforms } = data;

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
				<Button>CRIAR CONTA GRATUITA</Button>
			</S.ButtonWrapperMobile>
		</S.Container>
	);
};
