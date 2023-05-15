import { ContentContainer } from "./../../Footer/styles";
import {
	applyContainerStyles,
	applyContentContainerStyles,
	applyFullWidthContainerStyles,
} from "@/styles/utils";

import styled from "styled-components";

export const Container = styled.div`
	${applyContentContainerStyles()};

	display: flex;
	flex-direction: column;
`;

export const ListWrapper = styled.div`
	${applyContentContainerStyles()};
	padding: 0 16px;
`;

export const ButtonsWrapper = styled.div`
	${applyContentContainerStyles()};

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px 16px;
	gap: 16px;

	background-color: ${({ theme }) => theme.colors.gray[10]};

	button {
		width: fit-content;
	}
`;
