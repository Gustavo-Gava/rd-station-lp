import styled from "styled-components";

import Image from "next/image";

export const GraphsLeftMobile = styled(Image)`
	width: 500px;
	height: 500px;
	position: absolute;
	bottom: -220px;
	left: -155px;

	@media screen and (min-width: 450px) {
		bottom: -220px;
		left: -200px;
	}

	@media (${({ theme }) => theme.devices.tablet}) {
		display: none;
	}
`;

export const GraphsRightMobile = styled(Image)`
	width: 500px;
	height: 500px;
	position: absolute;
	top: -220px;
	right: -155px;

	@media screen and (min-width: 450px) {
		top: -220px;
		right: -200px;
	}

	@media (${({ theme }) => theme.devices.tablet}) {
		display: none;
	}
`;
