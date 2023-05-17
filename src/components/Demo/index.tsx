import Image from "next/image";
import { Button } from "../ui/Button";
import * as S from "./styles";
import { useState } from "react";
import ReactModal from "react-modal";
import { centeredModalStyles } from "@/styles/utils";
import { Video } from "./Video";

const modalStyles = {
	content: {
		...centeredModalStyles.content,
		padding: 20,
		backgroundColor: "transparent",
		border: "none",
		width: "100%",
		height: "auto",
	},
};

export const Demo = () => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<S.Container>
			<S.Content>
				<S.Header>
					<S.Title>Entenda melhor como o RD Station Marketing funciona na prática</S.Title>

					<Button variant="secondary" onClick={() => setShowVideo(true)}>
						ASSISTA A DEMONSTRAÇÃO
					</Button>
				</S.Header>

				<S.ThumbnailContainer>
					<S.ThumbnailImage
						width={400}
						height={300}
						src="/images/img-video-thumbnail.jpg"
						alt="Thumbnail"
					/>

					<S.PlayButton aria-label="Play video" onClick={() => setShowVideo(true)}>
						<Image src="/svg/play_icon.svg" width={80} height={80} alt="Play icon" />
					</S.PlayButton>
				</S.ThumbnailContainer>
			</S.Content>

			{showVideo && (
				<ReactModal
					isOpen={showVideo}
					style={modalStyles}
					onRequestClose={() => setShowVideo(false)}
				>
					<Video closeVideo={() => setShowVideo(false)} />
				</ReactModal>
			)}
		</S.Container>
	);
};
