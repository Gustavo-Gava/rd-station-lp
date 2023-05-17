import { applyContentContainerStyles, applyFullWidthContainerStyles } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
	${applyFullWidthContainerStyles()};
	position: relative;
	min-height: 56vh;
	background-color: ${({ theme }) => theme.colors.gray[10]};

	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;

		width: 90px;
		height: 90px;
		background-color: ${({ theme }) => theme.colors.system.background};
		clip-path: polygon(0 0, 150% 0, 250% 200%);

		@media (${({ theme }) => theme.devices.notebook}) {
			width: 720px;
			height: 720px;
		}
	}
`;

export const Content = styled.div`
	${applyContentContainerStyles()}
	position: relative;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 24px;

	@media (${({ theme }) => theme.devices.notebook}) {
		padding-top: 128px;
	}
`;

export const Title = styled.div`
	h1 {
		font-size: ${({ theme }) => theme.fonts.size.heading.lg};
		line-height: ${({ theme }) => theme.fonts.lineHeight.heading.lg};
		font-weight: ${({ theme }) => theme.fonts.weight.black};
	}

	b {
		font-family: ${({ theme }) => theme.fonts.family.heading};
		color: ${({ theme }) => theme.colors.primary.main};
	}

	@media (${({ theme }) => theme.devices.notebook}) {
		width: 40%;
	}

	@media (${({ theme }) => theme.devices.desktop}) {
		width: 50%;
	}
`;

export const Subtitle = styled.p`
	@media (${({ theme }) => theme.devices.notebook}) {
		width: 40%;
	}

	@media (${({ theme }) => theme.devices.desktop}) {
		width: 50%;
	}
`;
