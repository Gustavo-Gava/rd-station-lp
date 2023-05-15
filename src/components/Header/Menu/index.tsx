import { Button } from "@/components/ui/Button";
import { ListItem } from "./ListItem";
import * as S from "./styles";
import Image from "next/image";
import { MenuDataProps } from "..";
import { Buttons } from "./Buttons";

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

				{/* <ListItem title="List 1" />
				<ListItem title="List 2" />
				<ListItem title="List 3" content="List Item Content" />
				<ListItem title="List 4" content="List Item Content" /> */}
			</S.ListWrapper>

			<Buttons data={data.buttons} />
		</S.Container>
	);
};
