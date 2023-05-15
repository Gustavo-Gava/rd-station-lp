import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fonts.size.body.md};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	color: ${({ theme }) => theme.colors.gray[100]};
	margin-bottom: 4px;
`;

export const Placeholder = styled.span``;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	input[type="radio"] {
		/* Add if not using autoprefixer */
		-webkit-appearance: none;
		appearance: none;
		/* For iOS < 15 to remove gradient background */
		background-color: #fff;
		/* Not removed via appearance */
		margin: 0;
	}

	/* Add a custom dot using a pseudo-element */
	input[type="radio"]::before {
		content: "";
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right: 8px;
		vertical-align: middle;
		border: 6px solid transparent;
		outline: 1px solid ${({ theme }) => theme.colors.gray[60]};
	}

	/* Change the appearance of the dot when the radio input is checked */
	input[type="radio"]:checked::before {
		border-color: ${({ theme }) => theme.colors.primary.main};
		background-color: ${({ theme }) => theme.colors.gray[100]};
		outline: 1px solid transparent;
	}
`;
