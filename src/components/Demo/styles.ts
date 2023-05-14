import { applyContentContainerStyles, applyFullWidthContainerStyles } from "@/styles/utils";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
	${applyFullWidthContainerStyles()};

	background-color: ${({ theme }) => theme.colors.gray[10]};
	background-size: 90%;
`;

export const Content = styled.div`
	${applyContentContainerStyles()};

	display: flex;
	flex-direction: column;
	gap: 32px;

	@media (${({ theme }) => theme.devices.notebook}) {
		flex-direction: row;
		align-items: center;
	}
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fonts.size.heading.md};
	font-weight: ${({ theme }) => theme.fonts.weight.black};
	line-height: ${({ theme }) => theme.fonts.lineHeight.heading.md};
`;

export const ThumbnailContainer = styled.div`
	position: relative;
	width: 100%;
	height: auto;
`;

export const ThumbnailImage = styled(Image)`
	width: 100%;
	height: auto;
`;

export const PlayButton = styled.button`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
