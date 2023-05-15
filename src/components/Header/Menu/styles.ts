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
