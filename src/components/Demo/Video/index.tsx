import Image from "next/image";

import * as S from "./styles";

interface VideoProps {
	closeVideo: () => void;
	link: string;
}

export const Video = ({ closeVideo, link }: VideoProps) => {
	return (
		<S.IFrameContainer>
			<S.IFrame
				width="100%"
				height="315"
				src={link}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>

			<S.CloseButton aria-label="Close video" onClick={closeVideo}>
				<Image width={24} height={24} alt="X" src="/svg/circle-xmark.svg" />
			</S.CloseButton>
		</S.IFrameContainer>
	);
};
