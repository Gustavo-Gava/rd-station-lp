import { Button } from "@/components/ui/Button";
import { ListItem } from "./ListItem";
import * as S from "./styles";
import Image from "next/image";

export const Menu = () => {
	return (
		<S.Container>
			<S.ListWrapper>
				<ListItem title="List 1" />
				<ListItem title="List 2" />
				<ListItem title="List 3" content="List Item Content" />
				<ListItem title="List 4" content="List Item Content" />
			</S.ListWrapper>

			<S.ButtonsWrapper>
				<Button variant="secondary">BUTTON</Button>
				<Button icon={<Image width={14} height={14} src="/svg/long_arrow.svg" alt="arrow" />}>
					BUTTON
				</Button>
			</S.ButtonsWrapper>
		</S.Container>
	);
};
