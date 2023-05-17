import { Form } from "./Form";
import * as S from "./styles";

interface HeroProps {
	title: string;
	subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
	return (
		<S.Container>
			<S.Content>
				<S.Title dangerouslySetInnerHTML={{ __html: title }} />

				<S.Subtitle>{subtitle}</S.Subtitle>

				<Form />
			</S.Content>
		</S.Container>
	);
};
