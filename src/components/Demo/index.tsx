import Image from "next/image";
import { Button } from "../ui/Button";
import * as S from "./styles";
import { useEffect, useState } from "react";
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

interface DemoProps {
	title: string;
	thumbnail: {
		src: string;
		alt: string;
	};
	videoLink: string;
}

export const Demo = ({ title, thumbnail, videoLink }: DemoProps) => {
	const [showVideo, setShowVideo] = useState(false);

	useEffect(() => {
		if (showVideo) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [showVideo]);

	return (
		<S.Container>
			<S.Content>
				<S.Header>
					<S.Title>{title}</S.Title>

					<Button variant="secondary" onClick={() => setShowVideo(true)}>
						ASSISTA A DEMONSTRAÇÃO
					</Button>
				</S.Header>

				<S.ThumbnailContainer>
					<S.ThumbnailImage width={400} height={300} src={thumbnail.src} alt={thumbnail.alt} />

					<S.PlayButton aria-label="Play video" onClick={() => setShowVideo(true)}>
						<Image src="/svg/play_icon.svg" width={80} height={80} alt="Play icon" />
					</S.PlayButton>
				</S.ThumbnailContainer>
			</S.Content>

			<ReactModal isOpen={showVideo} style={modalStyles} onRequestClose={() => setShowVideo(false)}>
				<Video closeVideo={() => setShowVideo(false)} link={videoLink} />
			</ReactModal>
		</S.Container>
	);
};
