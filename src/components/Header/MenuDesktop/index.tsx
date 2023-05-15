import { Button } from "@/components/ui/Button";
import * as S from "./styles";
import { Dropdown } from "./Dropdown";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";
import { ListItem, MenuDataProps } from "..";

interface MenuDesktopProps {
	data: MenuDataProps;
}

export const MenuDesktop = ({ data }: MenuDesktopProps) => {
	const [listItemSelected, setListItemSelected] = useState<ListItem | null>(null);

	const { listItems, buttons } = data;

	return (
		<S.Container>
			<S.ListWrapper>
				{listItems.map((item) => (
					<S.ListItem
						key={item.title}
						active={listItemSelected?.title === item.title && !!item.content}
						onMouseEnter={() => setListItemSelected(item)}
					>
						<span>{item.title}</span>

						{item.content && (
							<Image src="/svg/chevron_down.svg" width={16} height={16} alt="Chevron Down" />
						)}
					</S.ListItem>
				))}
			</S.ListWrapper>

			<S.ButtonsWrapper>
				{buttons.map((button) => {
					if (button.isLink) {
						return (
							<ButtonLink key={button.title} href={button.href} variant={button.variant}>
								{button.title}
							</ButtonLink>
						);
					}

					return (
						<Button key={button.title} variant={button.variant}>
							{button.title}
						</Button>
					);
				})}
			</S.ButtonsWrapper>

			{listItemSelected && listItemSelected.content && (
				<Dropdown data={listItemSelected.content} closeDropdown={() => setListItemSelected(null)} />
			)}
		</S.Container>
	);
};
