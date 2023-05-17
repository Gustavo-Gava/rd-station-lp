import { BenefitCard } from "./BenefitCard";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import * as S from "./styles";

interface BenefitItem {
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
}

interface BenefitsProps {
	title: string;
	benefits: BenefitItem[];
}

export const Benefits = ({ benefits, title }: BenefitsProps) => {
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
