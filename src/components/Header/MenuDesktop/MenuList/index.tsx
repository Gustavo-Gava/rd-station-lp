import { ListItem } from "../..";
import Image from "next/image";

import * as S from "./styles";

interface MenuListProps {
	listItems: Array<ListItem>;
	listItemSelected: ListItem | null;
	setListItemSelected: (item: ListItem) => void;
}

export const MenuList = ({ listItems, setListItemSelected, listItemSelected }: MenuListProps) => {
	return (
		<S.ListWrapper>
			{listItems.map((item) => {
				if (!item.content) {
					return (
						<S.ListItemLink
							key={item.title}
							href="/"
							target="_blank"
							onMouseEnter={() => setListItemSelected(item)}
						>
							<span>{item.title}</span>
						</S.ListItemLink>
					);
				}

				return (
					<S.ListItem
						key={item.title}
						$active={listItemSelected?.title === item.title && !!item.content}
						onMouseEnter={() => setListItemSelected(item)}
					>
						<span>{item.title}</span>

						<S.Chevron
							$active={listItemSelected?.title === item.title && !!item.content}
							src="/svg/chevron_down.svg"
							width={16}
							height={16}
							alt="Chevron Down"
						/>
					</S.ListItem>
				);
			})}
		</S.ListWrapper>
	);
};
