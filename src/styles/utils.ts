import { css } from "styled-components";

export const applyContainerStyles = () => css`
	box-sizing: border-box;
	width: 100%;
	padding: 40px 0;
	max-width: 1440px;
	margin: 0 auto;

	@media (max-width: 1440px) {
		padding: 40px 16px;
	}
`;

export const applyFullWidthContainerStyles = () => css`
	width: 100%;
	padding: 40px 16px;
`;

export const applyContentContainerStyles = () => css`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
`;

export const centeredModalStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
} as const;
