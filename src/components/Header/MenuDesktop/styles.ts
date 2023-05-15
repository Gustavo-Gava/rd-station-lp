import styled from "styled-components";

interface ListItemProps {
	active?: boolean;
}

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	gap: 40px;
`;

export const ListWrapper = styled.div`
	display: flex;
	align-items: center;

	gap: 40px;

	font-size: ${({ theme }) => theme.fonts.size.body.md};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const ListItem = styled.div<ListItemProps>`
	position: relative;
	display: flex;
	align-items: center;
	gap: 8px;
	color: ${({ theme, active }) => (active ? theme.colors.primary.main : "inherit")};
	cursor: pointer;

	&::after {
		content: "";
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 100%;
		height: 2px;

		background-color: ${({ theme, active }) =>
			active ? theme.colors.primary.main : "transparent"};
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
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
