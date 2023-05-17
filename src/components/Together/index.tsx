import * as S from "./styles";

interface TogetherProps {
	title: string;
	content: string;
}

export const Together = ({ content, title }: TogetherProps) => {
	return (
		<S.Container>
			<S.Content>
				<S.TextWrapper>
					<S.Title>{title}</S.Title>

					<S.TextContent dangerouslySetInnerHTML={{ __html: content }} />
				</S.TextWrapper>
			</S.Content>
		</S.Container>
	);
};
