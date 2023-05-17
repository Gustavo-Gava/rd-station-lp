import { applyContainerStyles } from "@/styles/utils";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
	${applyContainerStyles()};

	position: relative;
	color: ${({ theme }) => theme.colors.system.background};
	overflow: hidden;

	@media (${({ theme }) => theme.devices.tablet}) {
		background-color: ${({ theme }) => theme.colors.primary.dark};
	}
`;

export const ContentContainer = styled.div`
	position: relative;
	overflow: hidden;
	padding: 40px 16px;
	margin: 0 auto;

	background-color: ${({ theme }) => theme.colors.primary.dark};

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 16px;

	@media (${({ theme }) => theme.devices.tablet}) {
		max-width: 600px;
	}
`;

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fonts.size.heading.md};
	line-height: ${({ theme }) => theme.fonts.lineHeight.heading.md};
	font-weight: ${({ theme }) => theme.fonts.weight.black};
`;

export const Description = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.body.md};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.md};
`;

export const ButtonWrapper = styled.div`
	width: fit-content;
	margin-top: 6px;
`;

export const GraphsContainer = styled.div`
	position: relative;
`;
