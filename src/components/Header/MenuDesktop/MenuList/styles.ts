import styled from "styled-components";

interface ListItemProps {
	active?: boolean;
}

export const Container = styled.div`
	display: flex;
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

export const ListItemLink = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.main};
	}

	&:visited {
		color: ${({ theme }) => theme.colors.gray[100]};
	}
`;
