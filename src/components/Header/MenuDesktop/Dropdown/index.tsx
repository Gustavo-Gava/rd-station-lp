import { Fragment } from "react";
import * as S from "./styles";
import Link from "next/link";

type Data = {
	title: string;
	content?: Array<{
		text: string;
		link: string;
	}>;
};

interface DropdownProps {
	data: Data[] | undefined;
	closeDropdown: () => void;
	isActive?: boolean;
}

export const Dropdown = ({ data, isActive, closeDropdown }: DropdownProps) => {
	return (
		<S.Container $visible={!!isActive} onMouseLeave={closeDropdown}>
			{data?.[0] && (
				<S.Content>
					{data.map((item) => (
						<S.ListContainer key={item.title}>
							<S.HighlightedText>{item.title}</S.HighlightedText>

							<S.Line />

							{item.content && (
								<S.ListWrapper>
									{item.content.map((content) => (
										<S.ListItem key={content.text}>
											<S.ListLink href={content.link}>{content.text}</S.ListLink>
										</S.ListItem>
									))}
								</S.ListWrapper>
							)}
						</S.ListContainer>
					))}
				</S.Content>
			)}
		</S.Container>
	);
};
