import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	gap: 40px;
`;

export const DropdownWrapper = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	left: 0;
	width: 100%;
	height: 200px;

	background-color: ${({ theme }) => theme.colors.system.background};
`;
