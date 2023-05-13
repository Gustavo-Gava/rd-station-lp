import { Button } from "@/components/ui/Button";
import * as S from "./styles";

export const CallToAction = () => {
	return (
		<S.Container>
			<S.ContentContainer>
				<S.Title>Por que mais de 25.000 empresas escolheram o RD Station?</S.Title>

				<S.Description>
					Combinamos nossos produtos de Marketing e Vendas com pessoas que se importam com seus
					resultados e um ecossistema que apoia o seu negócio do planejamento à prática.
				</S.Description>

				<S.ButtonWrapper>
					<Button variant="highlighted">CRIAR CONTA GRATUITA</Button>
				</S.ButtonWrapper>
			</S.ContentContainer>
		</S.Container>
	);
};
