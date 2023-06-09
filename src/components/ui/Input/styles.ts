import styled from "styled-components";

interface InputContainerProps {
	$error?: boolean;
}

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fonts.size.body.md};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	margin-bottom: 4px;
`;

export const InputContainer = styled.div<InputContainerProps>`
	position: relative;
	display: flex;
	border: 2px solid
		${({ theme, $error }) => ($error ? theme.colors.actions.error : theme.colors.gray[100])};
	padding: 8px 12px;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 2px;
		background-color: ${({ theme }) => theme.colors.primary.transparent};
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.primary.transparent};
	}

	&:has(input:disabled) {
		background-color: ${({ theme }) => theme.colors.gray[30]};
		border-color: ${({ theme }) => theme.colors.gray[60]};
		filter: opacity(0.5);
		cursor: not-allowed;

		&::after,
		&::before {
			background-color: ${({ theme }) => theme.colors.gray[30]};
		}
	}
`;

export const Input = styled.input`
	display: flex;
	flex: 1;
	outline: none;
	background-color: transparent;
`;

export const Error = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.body.sm};
	color: ${({ theme }) => theme.colors.actions.error};
`;
