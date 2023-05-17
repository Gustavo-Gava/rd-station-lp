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

export const topModalStyles = {
	content: {
		inset: "65px 0 0 0",
		padding: 0,
		borderRadius: 0,
		height: "fit-content",
		zIndex: 3,
	},
	overlay: { padding: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 2 },
};
