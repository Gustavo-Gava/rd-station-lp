import * as S from "./styles";

const politics = [
	{
		id: 1,
		content:
			"<p>Ao criar minha conta estou e acordo com os <a href='https://legal.rdstation.com/pt/rdstation-services-agreement/' target='_blank'>termos de uso<a/> do software e <a href='https://legal.rdstation.com/pt/privacy-policy/' target='_blank'>política de privacidade</a>.</p>",
	},
	{
		id: 2,
		content:
			"<p>Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.</p>",
	},
	{
		id: 3,
		content: "<p>*Você pode alterar suas permissões de comunicação a qualquer tempo.</p>",
	},
];

export const Politics = () => {
	return (
		<S.Container>
			{politics.map((item) => (
				<S.Item key={item.id}>
					<S.ItemBullet>•</S.ItemBullet>

					<S.ItemContent dangerouslySetInnerHTML={{ __html: item.content }} />
				</S.Item>
			))}
		</S.Container>
	);
};
