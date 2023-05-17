import { useState } from "react";
import * as S from "./styles";
import { MenuContent } from "../..";

interface ListItemProps {
	title: string;
	href?: string;
	content?: MenuContent[];
}

export const ListItem = ({ title, href, content }: ListItemProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleIsExpanded = () => setIsExpanded(!isExpanded);

	return (
		<S.Container>
			<S.TitleWrapper onClick={toggleIsExpanded}>
				{content ? (
					<S.Title>{title}</S.Title>
				) : (
					<S.TitleLink href={href} target="_blank">
						{title}
					</S.TitleLink>
				)}

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
						{item.content && (
							<>
								<S.ContentItemTitle>{item.title}</S.ContentItemTitle>

								{item.content.map((content) => (
									<S.ContentItemLink key={content.text} href={content.link} target="_blank">
										{content.text}
									</S.ContentItemLink>
								))}
							</>
						)}
					</S.ContentItem>
				))}
			</S.Content>
		</S.Container>
	);
};
