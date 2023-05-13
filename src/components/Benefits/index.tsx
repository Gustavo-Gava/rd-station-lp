import { BenefitCard } from "./BenefitCard";
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
		title: "Torne sua operação de Marketing Digital mais produtiva",
		description:
			"Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.",
		image: {
			src: "/svg/benefits/chart-line.svg",
			alt: "",
		},
	},
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
		title: "Torne sua operação de Marketing Digital mais produtiva",
		description:
			"Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.",
		image: {
			src: "/svg/benefits/chart-line.svg",
			alt: "",
		},
	},
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
		title: "Torne sua operação de Marketing Digital mais produtiva",
		description:
			"Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.",
		image: {
			src: "/svg/benefits/chart-line.svg",
			alt: "",
		},
	},
];

export const Benefits = () => {
	return (
		<S.Container>
			{benefits.map((benefit) => (
				<BenefitCard key={benefit.title} data={benefit} />
			))}
		</S.Container>
	);
};
