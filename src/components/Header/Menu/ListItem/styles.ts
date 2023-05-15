import { applyContainerStyles } from "@/styles/utils";
import Image from "next/image";
import styled, { css } from "styled-components";

interface ContentProps {
	isExpanded: boolean;
}

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 16px 0;

	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[30]};
`;

export const TitleWrapper = styled.button`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.body.md};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Content = styled.div<ContentProps>`
	display: flex;
	flex-direction: column;
	gap: 16px;
	transition: all 0.3s;
	overflow: hidden;

	${({ isExpanded }) =>
		isExpanded
			? css`
					transition: all 0.3s;
					max-height: 200px;
					height: auto;
			  `
			: css`
					max-height: 0;
			  `}
`;

export const ChevronIcon = styled(Image)<ContentProps>`
	transition: all 0.3s;
	width: 24px;
	height: 24px;

	${({ isExpanded }) =>
		isExpanded
			? css`
					transform: rotate(180deg);
			  `
			: css`
					transform: rotate(0deg);
			  `}
`;

export const ContentItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 8px;
`;

export const ContentItemTitle = styled.div`
	font-size: ${({ theme }) => theme.fonts.size.body.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.sm};
	color: ${({ theme }) => theme.colors.primary.main};
`;

export const ContentItemDivider = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.gray[30]};
`;

export const ContentItemLink = styled.div`
	font-size: ${({ theme }) => theme.fonts.size.body.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.sm};
	color: ${({ theme }) => theme.colors.gray[100]};
`;
