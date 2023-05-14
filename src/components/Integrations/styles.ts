import { applyContainerStyles } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
	${applyContainerStyles()};

	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (${({ theme }) => theme.devices.notebook}) {
		flex-direction: row;
		gap: 48px;
	}
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (${({ theme }) => theme.devices.notebook}) {
		gap: 24px;
	}
`;

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fonts.size.heading.md};
	font-weight: ${({ theme }) => theme.fonts.weight.black};
	line-height: ${({ theme }) => theme.fonts.lineHeight.heading.md};
`;

export const Description = styled.p`
	font-size: ${({ theme }) => theme.fonts.size.body.md};
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.md};
	color: ${({ theme }) => theme.colors.gray[100]};

	@media (${({ theme }) => theme.devices.notebook}) {
		font-size: ${({ theme }) => theme.fonts.size.body.lg};
	}
`;

export const IconsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: 40px;
	flex: 1;

	@media (${({ theme }) => theme.devices.notebook}) {
		grid-template-columns: repeat(5, 1fr);
		column-gap: 40px;
	}
`;

export const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;

	font-size: ${({ theme }) => theme.fonts.size.body.md};
`;

export const Icon = styled.div``;

export const IconName = styled.span`
	width: fit-content;

	// make do not break line
	white-space: nowrap;
`;

export const ButtonWrapperMobile = styled.div`
	@media (${({ theme }) => theme.devices.notebook}) {
		display: none;
	}
`;

export const ButtonWrapperDesktop = styled.div`
	display: none;

	@media (${({ theme }) => theme.devices.notebook}) {
		display: block;
		width: fit-content;
		margin-top: 24px;
	}
`;
