import { ListItem } from "./ListItem";
import * as S from "./styles";

interface ListProps {
	title: string;
	subtitle: string;
	listItems: Array<{
		id: number;
		content: string;
	}>;
}

export const List = ({ title, subtitle, listItems }: ListProps) => {
	return (
		<S.Container>
			<S.HeaderMobile>
				<S.Title>{title}</S.Title>

				<S.Subtitle>{subtitle}</S.Subtitle>
			</S.HeaderMobile>

			<S.Content>
				<S.ListWrapper>
					<S.HeaderDesktop>
						<S.Title>{title}</S.Title>

						<S.Subtitle>{subtitle}</S.Subtitle>
					</S.HeaderDesktop>

					<S.List>
						{listItems.map((item) => (
							<ListItem key={item.id} content={item.content} />
						))}
					</S.List>
				</S.ListWrapper>

				<S.ImageWrapper>
					<S.HighlightedImage
						src="/images/img-results.jpg"
						width={400}
						height={325}
						alt="Woman with pencil in hands"
					/>
				</S.ImageWrapper>
			</S.Content>
		</S.Container>
	);
};
