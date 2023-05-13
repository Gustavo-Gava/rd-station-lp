import { BenefitCard } from "./BenefitCard";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import * as S from "./styles";

const benefits = [
	{
		title: "Torne sua operação de Marketing Digital mais produtiva",
		description:
			"Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.",
		image: {
			src: "/svg/benefits/chart-line.svg",
			alt: "",
		},
	},
	{
		title: "Crie facilmente campanhas que funcionam",
		description:
			"É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas poderosas, e contam com dezenas de modelos — como de Landing Pages, Pop-ups, emails — para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.",
		image: {
			src: "/svg/benefits/bullhorn.svg",
			alt: "Bullhorn icon",
		},
	},
	{
		title: "Construa jornadas personalizadas e gere vendas em escala",
		description:
			"Envie a mensagem certa na hora certa e construa jornadas personalizadas que geram até 5x mais conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade de Marketing e Vendas.",
		image: {
			src: "/svg/benefits/chart-network.svg",
			alt: "Chart network icon",
		},
	},
	{
		title: "Encontre automaticamente as melhores oportunidades",
		description:
			"Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários. Defina critérios para identificar automaticamente Leads com maior potencial de compra e envie para o comercial oportunidades qualificadas.",
		image: {
			src: "/svg/benefits/star.svg",
			alt: "Star icon",
		},
	},
	{
		title: "Saia da incerteza e comprove resultados",
		description:
			"Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing Digital traz mais vendas e clientes.",
		image: {
			src: "/svg/benefits/chart-pie.svg",
			alt: "Chart pie icon",
		},
	},
	{
		title: "Suporte ágil e na sua língua",
		description:
			"Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97% entre nossos clientes e um tempo médio de resolução de 6 horas. E o melhor: tudo isso em português.",
		image: {
			src: "/svg/benefits/globe.svg",
			alt: "Globe icon",
		},
	},
];

export const Benefits = () => {
	return (
		<S.Container>
			<S.Title>A ferramenta de Automação de Marketing líder na América Latina</S.Title>

			<Swiper modules={[Navigation, Pagination, A11y]} pagination={{ clickable: true }}>
				{benefits.map((benefit) => (
					<SwiperSlide key={benefit.title}>
						<BenefitCard data={benefit} />
					</SwiperSlide>
				))}
			</Swiper>

			<S.BenefitsContainerDesktop>
				{benefits.map((benefit) => (
					<BenefitCard key={benefit.title} data={benefit} />
				))}
			</S.BenefitsContainerDesktop>
		</S.Container>
	);
};
