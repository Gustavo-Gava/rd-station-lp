import { useState } from "react";
import * as S from "./styles";

interface ListItemProps {
	title: string;
	content?: string;
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

			<S.Content isExpanded={isExpanded}>{content}</S.Content>
		</S.Container>
	);
};
