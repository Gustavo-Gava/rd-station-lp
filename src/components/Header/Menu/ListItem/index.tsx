import { useState } from "react";
import * as S from "./styles";
import { MenuContent } from "../..";

interface ListItemProps {
	title: string;
	content?: MenuContent[];
}

export const ListItem = ({ title, content }: ListItemProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleIsExpanded = () => setIsExpanded(!isExpanded);

	return (
		<S.Container>
			<S.TitleWrapper onClick={toggleIsExpanded}>
				<S.Title>{title}</S.Title>

				{content && (
					<S.ChevronIcon
						src="/svg/chevron_down.svg"
						width={24}
						height={24}
						alt="Chevron"
						isExpanded={isExpanded}
					/>
				)}
			</S.TitleWrapper>

			<S.Content isExpanded={isExpanded}>
				{content?.map((item) => (
					<S.ContentItem key={item.title}>
						<S.ContentItemTitle>{item.title}</S.ContentItemTitle>

						{item.content && (
							<>
								{item.content.map((content) => (
									<S.ContentItemLink key={content.text}>{content.text}</S.ContentItemLink>
								))}
							</>
						)}
					</S.ContentItem>
				))}
			</S.Content>
		</S.Container>
	);
};
