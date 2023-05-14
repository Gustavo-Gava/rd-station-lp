import Image from "next/image";
import { Button } from "../ui/Button";
import * as S from "./styles";

export const Demo = () => {
	return (
		<S.Container>
			<S.Content>
				<S.Header>
					<S.Title>Entenda melhor como o RD Station Marketing funciona na prática</S.Title>

					<Button variant="secondary">ASSISTA A DEMONSTRAÇÃO</Button>
				</S.Header>

				<S.ThumbnailContainer>
					<S.ThumbnailImage
						width={400}
						height={300}
						src="/images/img-video-thumbnail.jpg"
						alt="Thumbnail"
					/>

					<S.PlayButton aria-label="Play video">
						<Image src="/svg/play_icon.svg" width={80} height={80} alt="Play icon" />
					</S.PlayButton>
				</S.ThumbnailContainer>
			</S.Content>
		</S.Container>
	);
};
