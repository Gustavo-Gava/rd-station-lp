import { Form } from "./Form";
import * as S from "./styles";

export const Hero = () => {
	return (
		<S.Container>
			<S.Content>
				<S.Title>
					Gere mais <b>oportunidades</b> para seu negócio
				</S.Title>

				<S.Subtitle>
					O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir
					Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados.
				</S.Subtitle>

				<Form />
			</S.Content>
		</S.Container>
	);
};
