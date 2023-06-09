import { applyContentContainerStyles, applyFullWidthContainerStyles } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
	${applyFullWidthContainerStyles()};
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	padding: 20px 16px;

	background-color: ${({ theme }) => theme.colors.system.background};

	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[30]};
	z-index: 100;
`;

export const LogoWrapper = styled(Link)``;

export const Logo = styled(Image)`
	width: 134px;
	height: 25px;

	@media (${({ theme }) => theme.devices.notebook}) {
		width: 174px;
		height: 32px;
	}
`;

export const Content = styled.div`
	${applyContentContainerStyles()}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Menu = styled.button`
	display: inline-flex;
	width: 24px;
	height: 24px;
`;

export const MenuMobileButtonWrapper = styled.div`
	@media (${({ theme }) => theme.devices.notebook}) {
		display: none;
	}
`;

export const MenuDesktopWrapper = styled.div`
	display: none;

	@media (${({ theme }) => theme.devices.notebook}) {
		display: block;
		width: 100%;
	}
`;
