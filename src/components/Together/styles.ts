import {
	applyContainerStyles,
	applyContentContainerStyles,
	applyFullWidthContainerStyles,
} from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
	${applyFullWidthContainerStyles()}

	position: relative;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.primary.dark};
	color: ${({ theme }) => theme.colors.system.background};

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;

		width: 48px;
		height: 48px;
		clip-path: polygon(0 0, 100% 0, 0 100%);

		background-color: ${({ theme }) => theme.colors.gray[10]};
	}
`;

export const Content = styled.div`
	${applyContentContainerStyles()}
	width: 100%;

	@media (${({ theme }) => theme.devices.notebook}) {
		padding: 80px 0;
	}
`;

export const TextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (${({ theme }) => theme.devices.notebook}) {
		width: 40%;
		justify-content: flex-start;
		align-items: flex-start;
	}

	@media (${({ theme }) => theme.devices.desktop}) {
		width: 50%;
	}
`;

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fonts.size.heading.md};
	line-height: ${({ theme }) => theme.fonts.lineHeight.heading.md};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Paragraph = styled.p`
	font-size: ${({ theme }) => theme.fonts.size.body.md};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.md};
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
`;
