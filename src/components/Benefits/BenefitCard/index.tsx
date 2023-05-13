import Image from "next/image";
import * as S from "./styles";

interface BenefitCardProps {
	data: {
		title: string;
		description: string;
		image: {
			src: string;
			alt: string;
		};
	};
}

export const BenefitCard = ({ data }: BenefitCardProps) => {
	const { title, description, image } = data;

	return (
		<S.Container>
			<S.ImageWrapper>
				<Image width={32} height={24} alt={image.alt} src={image.src} />
			</S.ImageWrapper>

			<S.Title>{title}</S.Title>

			<S.Description>{description}</S.Description>
		</S.Container>
	);
};
