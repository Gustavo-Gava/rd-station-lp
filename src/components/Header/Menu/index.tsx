import { ListItem } from "./ListItem";
import { Buttons } from "./Buttons";

import type { MenuDataProps } from "..";
import * as S from "./styles";

export const Menu = ({ listItems, buttons }: MenuDataProps) => {
	return (
		<S.Container>
			<S.ListWrapper>
				{listItems.map((item) => (
					<ListItem key={item.title} title={item.title} href={item.href} content={item.content} />
				))}
			</S.ListWrapper>

			<Buttons data={buttons} />
		</S.Container>
	);
};
