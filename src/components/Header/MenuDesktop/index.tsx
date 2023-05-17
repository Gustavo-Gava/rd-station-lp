import { Dropdown } from "./Dropdown";
import { useState } from "react";
import { ListItem, MenuDataProps } from "..";
import { Buttons } from "./Buttons";
import { MenuList } from "./MenuList";

import * as S from "./styles";

export const MenuDesktop = ({ buttons, listItems }: MenuDataProps) => {
	const [listItemSelected, setListItemSelected] = useState<ListItem | null>(null);

	return (
		<S.Container>
			<MenuList
				listItems={listItems}
				listItemSelected={listItemSelected}
				setListItemSelected={setListItemSelected}
			/>

			<Buttons data={buttons} />

			<Dropdown
				isActive={!!listItemSelected && !!listItemSelected.content}
				data={listItemSelected?.content}
				closeDropdown={() => setListItemSelected(null)}
			/>
		</S.Container>
	);
};
