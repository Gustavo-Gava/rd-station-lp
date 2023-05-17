import styled from "styled-components";

import Image from "next/image";

export const GraphsLeftDesktop = styled(Image)`
	display: none;
	width: 500px;
	height: 500px;
	position: absolute;
	bottom: -130px;
	left: -145px;

	@media (${({ theme }) => theme.devices.tablet}) {
		display: block;
	}
`;

export const GraphsRightDesktop = styled(Image)`
	display: none;
	width: 500px;
	height: 500px;
	position: absolute;
	top: -130px;
	right: -145px;

	@media (${({ theme }) => theme.devices.tablet}) {
		display: block;
	}
`;
