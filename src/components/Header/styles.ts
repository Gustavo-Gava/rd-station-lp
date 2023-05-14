import { applyContentContainerStyles, applyFullWidthContainerStyles } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
	${applyFullWidthContainerStyles()};
	position: relative;
	display: flex;
	padding: 20px 16px;

	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[30]};
	z-index: 5;
`;

export const Content = styled.div`
	${applyContentContainerStyles()}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LogoWrapper = styled.div``;

export const Menu = styled.button``;

export const MenuOverlay = styled.div``;

export const MenuContainer = styled.div`
	${applyFullWidthContainerStyles()};
`;
