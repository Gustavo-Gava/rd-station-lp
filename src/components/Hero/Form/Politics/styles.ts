import styled from "styled-components";

export const Container = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Item = styled.li`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 8px;

	font-size: ${({ theme }) => theme.fonts.size.body.xs};
	line-height: ${({ theme }) => theme.fonts.lineHeight.body.xs};
	color: ${({ theme }) => theme.colors.gray[70]};
`;

export const ItemBullet = styled.span`
	display: inline-flex;
`;

export const ItemContent = styled.div`
	a {
		color: ${({ theme }) => theme.colors.primary.main};
		text-decoration: underline;
	}
`;
