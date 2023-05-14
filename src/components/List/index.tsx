import { ListItem } from "./ListItem";
import * as S from "./styles";

const list = [
	{
		id: 1,
		content:
			"<p><bold>Ferramentas intuitivas</bold> e com modelos prontos, vídeos explicativos e passo a passo guiado</p>",
	},
	{
		id: 2,
		content:
			"<p><bold>Implementação com especialistas</bold> focada em planejamento e prática (nos planos Marketing Pro e Enterprise)</p>",
	},
	{
		id: 3,
		content:
			"<p><bold>Time de especialistas em Sucesso do Cliente</bold> para apoiar na otimização da estratégia em cada fase da sua jornada (nos planos Marketing Pro e Enterprise)</p>",
	},
	{
		id: 4,
		content:
			"<p><bold>Suporte técnico</bold> em português, espanhol e inglês para tirar dúvidas, <bold>com 97% de satisfação</bold> entre nossos clientes</p>",
	},
	{
		id: 5,
		content:
			"<p><bold>Muito conteúdo educativo</bold>, eventos, cursos da <a href='/'>RD University</a> e comunidades para você continuar evoluindo</p>",
	},
];

export const List = () => {
	return (
		<S.Container>
			<S.HeaderMobile>
				<S.Title>Resultados previsíveis e mais clientes para sua empresa</S.Title>

				<S.Subtitle>Torne sua atuação no Marketing Digital mais eficaz</S.Subtitle>
			</S.HeaderMobile>

			<S.Content>
				<S.ListWrapper>
					<S.HeaderDesktop>
						<S.Title>Resultados previsíveis e mais clientes para sua empresa</S.Title>

						<S.Subtitle>Torne sua atuação no Marketing Digital mais eficaz</S.Subtitle>
					</S.HeaderDesktop>

					<S.List>
						{list.map((item) => (
							<ListItem key={item.id} content={item.content} />
						))}
					</S.List>
				</S.ListWrapper>

				<S.ImageWrapper>
					<S.HighlightedImage
						src="/images/img-results.jpg"
						width={400}
						height={325}
						alt="Woman with pencil in hands"
					/>
				</S.ImageWrapper>
			</S.Content>
		</S.Container>
	);
};
