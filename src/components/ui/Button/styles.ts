import styled, { css } from "styled-components";

type Variant = "primary" | "secondary" | "highlighted";

interface ContainerProps {
	variant: Variant;
}

function applyVariantStyles(variant: Variant) {
	if (variant === "primary") {
		return css`
			border: 2px solid ${({ theme }) => theme.colors.primary.main};
			background-color: ${({ theme }) => theme.colors.primary.main};

			&:hover {
				border-color: ${({ theme }) => theme.colors.primary.light};
				background-color: ${({ theme }) => theme.colors.primary.light};
			}
		`;
	}

	if (variant === "secondary") {
		return css`
			border: 2px solid ${({ theme }) => theme.colors.gray[100]};
			background-color: ${({ theme }) => theme.colors.system.background};

			&:hover {
				background-color: ${({ theme }) => theme.colors.gray[10]};
			}
		`;
	}

	if (variant === "highlighted") {
		return css`
			border: 2px solid ${({ theme }) => theme.colors.secondary.main};
			background-color: ${({ theme }) => theme.colors.secondary.main};

			&:hover {
				border-color: ${({ theme }) => theme.colors.secondary.light};
				background-color: ${({ theme }) => theme.colors.secondary.light};
			}
		`;
	}
}

export const Container = styled.button<ContainerProps>`
	position: relative;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 6px 16px;

	font-size: ${({ theme }) => theme.fonts.size.body.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.extrabold};
	color: ${({ theme }) => theme.colors.gray[100]};

	transition: all 0.2s;

	${({ variant }) => applyVariantStyles(variant)}

	&::after {
		content: "";
		display: block;
		position: absolute;
		top: calc(100% + 2px);
		left: calc(0% - 2px);
		width: calc(100% + (2 * 2px));
		border-top: 4px solid #000;
		border-left: 8px solid rgba(0, 0, 0, 0);
		border-right: 8px solid rgba(0, 0, 0, 0);
		height: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
`;
