import { Dropdown } from "./Dropdown";
import { useState } from "react";
import { ListItem, MenuDataProps } from "..";
import { Buttons } from "./Buttons";
import { MenuList } from "./MenuList";

import * as S from "./styles";

interface MenuDesktopProps {
	data: MenuDataProps;
}

export const MenuDesktop = ({ data }: MenuDesktopProps) => {
	const [listItemSelected, setListItemSelected] = useState<ListItem | null>(null);

	const { listItems, buttons } = data;

	return (
		<S.Container>
			<MenuList
				listItems={listItems}
				listItemSelected={listItemSelected}
				setListItemSelected={setListItemSelected}
			/>

			<Buttons data={buttons} />

			{listItemSelected && listItemSelected.content && (
				<Dropdown data={listItemSelected.content} closeDropdown={() => setListItemSelected(null)} />
			)}
		</S.Container>
	);
};
