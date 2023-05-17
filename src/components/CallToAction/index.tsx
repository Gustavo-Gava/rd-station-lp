import { Button } from "@/components/ui/Button";
import * as S from "./styles";
import { ButtonLink } from "../ui/ButtonLink";
import { VisualGraphsDesktop } from "./VisualGraphsDesktop";
import { VisualGraphsMobile } from "./VisualGraphsMobile";

interface CallToActionProps {
	title: string;
	description: string;
	button: {
		text: string;
		link: string;
	};
}

export const CallToAction = ({ title, button, description }: CallToActionProps) => {
	return (
		<S.Container>
			<S.ContentContainer>
				<S.Title>{title}</S.Title>

				<S.Description>{description}</S.Description>

				<S.ButtonWrapper>
					<ButtonLink variant="highlighted" href={button.link} withIcon={false}>
						{button.text}
					</ButtonLink>
				</S.ButtonWrapper>

				<VisualGraphsMobile />
			</S.ContentContainer>

			<VisualGraphsDesktop />
		</S.Container>
	);
};
