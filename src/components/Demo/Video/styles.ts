import styled from "styled-components";

export const Container = styled.div`
	display: flex;
`;

export const IFrameContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding-top: 40px;
	max-width: ${({ theme }) => theme.container.width.xl};
	margin: 0 auto;
`;

export const IFrame = styled.iframe`
	height: 350px;

	@media (${({ theme }) => theme.devices.tablet}) {
		height: 500px;
	}

	@media (${({ theme }) => theme.devices.notebook}) {
		height: 600px;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 5;
`;
