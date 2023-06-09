import { applyContentContainerStyles } from "@/styles/utils";
import styled from "styled-components";

export const ButtonsWrapper = styled.div`
	${applyContentContainerStyles()};

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px 16px;
	gap: 16px;

	background-color: ${({ theme }) => theme.colors.gray[10]};

	button,
	a {
		width: max-content;
	}
`;
