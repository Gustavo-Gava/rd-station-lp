import { applyContentContainerStyles, applyFullWidthContainerStyles } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
	${applyFullWidthContainerStyles()};

	position: absolute;
	top: calc(100%);
	right: 0;
	left: 0;
	width: 100%;
	height: 200px;

	background-color: ${({ theme }) => theme.colors.system.background};
	box-shadow: 0 4px 12px -12px gray;
`;

export const Content = styled.div`
	${applyContentContainerStyles()};

	display: flex;
	gap: 16px;
`;

export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	flex: 1 1 0px;
`;

export const HighlightedText = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.subtitle.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.md};
	color: ${({ theme }) => theme.colors.primary.main};
`;

export const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.gray[30]};
`;

export const ListWrapper = styled.ul``;

export const ListItem = styled.li`
	font-size: ${({ theme }) => theme.fonts.size.body.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.md};
	color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ListLink = styled.a`
	text-decoration: none;
	transition: color 0.2s;

	&:visited {
		color: ${({ theme }) => theme.colors.gray[100]};
	}

	&:hover {
		color: ${({ theme }) => theme.colors.primary.main};
	}
`;
