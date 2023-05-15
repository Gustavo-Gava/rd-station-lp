import { ListItem } from "./ListItem";
import { Buttons } from "./Buttons";

import type { MenuDataProps } from "..";
import * as S from "./styles";

interface MenuProps {
	data: MenuDataProps;
}

export const Menu = ({ data }: MenuProps) => {
	return (
		<S.Container>
			<S.ListWrapper>
				{data.listItems.map((item) => (
					<ListItem key={item.title} title={item.title} content={item.content} />
				))}
			</S.ListWrapper>

			<Buttons data={data.buttons} />
		</S.Container>
	);
};
