import { applyContainerStyles, applyContentContainerStyles } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
	color: ${({ theme }) => theme.colors.gray[100]};

	.swiper {
		max-width: ${({ theme }) => theme.container.width.xl};
		padding-bottom: 36px;

		@media (${({ theme }) => theme.devices.notebook}) {
			display: none;
		}

		.swiper-slide {
			height: auto;
			padding: 16px;
		}

		.swiper-pagination {
			.swiper-pagination-bullet {
				width: 16px;
				height: 16px;
				margin: 0 8px;

				background-color: transparent;
				border: 2px solid ${({ theme }) => theme.colors.gray[30]};

				&.swiper-pagination-bullet-active {
					background-color: ${({ theme }) => theme.colors.primary.main};
					border-color: ${({ theme }) => theme.colors.primary.main};
				}
			}
		}
	}
`;

export const Title = styled.h3`
	${applyContentContainerStyles()};

	font-size: ${({ theme }) => theme.fonts.size.heading.sm};
	line-height: ${({ theme }) => theme.fonts.lineHeight.heading.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.black};
	padding: 0 16px;

	@media (${({ theme }) => theme.devices.notebook}) {
		margin: 0 auto;
		padding: 0;
	}
`;

export const BenefitsContainerDesktop = styled.div`
	display: none;
	${applyContainerStyles()};

	@media (${({ theme }) => theme.devices.notebook}) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
	}

	@media (${({ theme }) => theme.devices.desktop}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
