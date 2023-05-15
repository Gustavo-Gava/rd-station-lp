import { Button } from "@/components/ui/Button";
import * as S from "./styles";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

type Content = {
	title: string;
	content?: Array<{
		text: string;
		link: string;
	}>;
};

type ListItem = {
	title: string;
	content?: Array<Content>;
};

type Button = {
	title: string;
	isLink?: boolean;
	href?: string;
	variant?: "primary" | "secondary" | "highlighted";
};

interface MenuDesktopProps {
	data: {
		listItems: Array<ListItem>;
		buttons: Array<Button>;
	};
}

export const MenuDesktop = ({ data }: MenuDesktopProps) => {
	const [listItemSelected, setListItemSelected] = useState<ListItem | null>(null);

	const { listItems, buttons } = data;

	return (
		<S.Container>
			<S.ListWrapper>
				{listItems.map((item) => (
					<S.ListItem key={item.title} onMouseEnter={() => setListItemSelected(item)}>
						{item.title}
					</S.ListItem>
				))}
			</S.ListWrapper>

			<S.ButtonsWrapper>
				{buttons.map((button) => (
					<Button key={button.title} variant={button.variant}>
						{button.title}
					</Button>
				))}
			</S.ButtonsWrapper>

			{listItemSelected && listItemSelected.content && (
				<Dropdown data={listItemSelected.content} closeDropdown={() => setListItemSelected(null)} />
			)}
		</S.Container>
	);
};
