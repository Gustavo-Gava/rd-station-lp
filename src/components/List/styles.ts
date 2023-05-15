import { applyContentContainerStyles, applyFullWidthContainerStyles } from "@/styles/utils";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
	${applyFullWidthContainerStyles()}

	position: relative;
	display: flex;
	flex-direction: column;
	gap: 24px;
	background-color: ${({ theme }) => theme.colors.gray[10]};

	overflow: none;

	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;

		width: 300px;
		height: 300px;

		clip-path: polygon(0 0, 0% 100%, 100% 100%);
		background-color: ${({ theme }) => theme.colors.system.background};

		@media (${({ theme }) => theme.devices.notebook}) {
			width: 550px;
			height: 550px;
		}
	}
`;

export const HeaderMobile = styled.header`
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media (${({ theme }) => theme.devices.tablet}) {
		display: none;
	}
`;

export const HeaderDesktop = styled.header`
	display: none;

	@media (${({ theme }) => theme.devices.tablet}) {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
`;

export const Content = styled.main`
	${applyContentContainerStyles()};

	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (${({ theme }) => theme.devices.tablet}) {
		flex-direction: row;
	}
`;

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fonts.size.heading.md};
	line-height: ${({ theme }) => theme.fonts.lineHeight.heading.md};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Subtitle = styled.p``;

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	flex: 1;

	@media (${({ theme }) => theme.devices.tablet}) {
		order: 3;
	}
`;

export const List = styled.ul`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 24px;
	order: 2;
`;

export const ImageWrapper = styled.div`
	flex: 1;
	position: relative;
	order: 2;

	max-width: 600px;
	max-height: 600px;

	&::before {
		content: "";
		position: absolute;
		top: 0px;
		right: -2px;

		width: 65px;
		height: 65px;
		clip-path: polygon(0 0, 100% 0, 100% 100%);

		background-color: ${({ theme }) => theme.colors.gray[10]};
		z-index: 2;
	}
`;

export const HighlightedImage = styled(Image)`
	width: 100%;
	height: auto;
`;
