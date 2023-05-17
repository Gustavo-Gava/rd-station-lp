import styled from "styled-components";

interface ContainerProps {
	error?: boolean;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
	font-size: ${({ theme }) => theme.fonts.size.body.sm};

	.react-select__control {
		position: relative;
		display: flex;
		border: 2px solid
			${({ theme, error }) => (error ? theme.colors.actions.error : theme.colors.gray[100])};
		padding: 8px 12px;

		font-size: ${({ theme }) => theme.fonts.size.body.sm};
	}

	.react-select__placeholder {
		font-size: ${({ theme }) => theme.fonts.size.body.sm};
		color: ${({ theme }) => theme.colors.gray[60]};
	}

	.react-select__menu {
		background-color: ${({ theme }) => theme.colors.system.background};
		padding: 8px;
		border: 2px solid ${({ theme }) => theme.colors.gray[100]};
		height: fit-content;

		.react-select__option {
			transition: background-color 0.2s ease-in-out;
			padding: 8px 12px;
			cursor: pointer;
			font-size: ${({ theme }) => theme.fonts.size.body.sm};

			&:hover {
				background-color: ${({ theme }) => theme.colors.gray[10]};
			}
		}
	}
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fonts.size.body.md};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	margin-bottom: 4px;
`;

export const Error = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.body.sm};
	color: ${({ theme }) => theme.colors.actions.error};
`;
