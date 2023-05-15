import { Fragment } from "react";
import * as S from "./styles";

type Data = {
	title: string;
	content: Array<{
		text: string;
		link: string;
	}>;
};

interface DropdownProps {
	data: Data[];
	closeDropdown: () => void;
}

export const Dropdown = ({ data, closeDropdown }: DropdownProps) => {
	return (
		<S.Container onMouseLeave={closeDropdown}>
			<S.Content>
				{data.map((item) => (
					<S.ListContainer key={item.title}>
						<S.HighlightedText>{item.title}</S.HighlightedText>

						<S.Line />

						<S.ListWrapper>
							{item.content.map((content) => (
								<S.ListItem key={content.text}>{content.text}</S.ListItem>
							))}
						</S.ListWrapper>
					</S.ListContainer>
				))}
			</S.Content>
		</S.Container>
	);
};
