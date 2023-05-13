import Image from "next/image";
import * as S from "./styles";

interface ListItemProps {
	content: string;
}

export const ListItem = ({ content }: ListItemProps) => {
	return (
		<S.Container>
			<Image src="/svg/checkmark.svg" width={24} height={24} alt="Checkmark Icon" />

			<S.Text dangerouslySetInnerHTML={{ __html: content }}></S.Text>
		</S.Container>
	);
};
