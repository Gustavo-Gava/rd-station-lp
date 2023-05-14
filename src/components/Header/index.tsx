import Image from "next/image";
import ReactModal from "react-modal";

import * as S from "./styles";
import { useState } from "react";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<S.Container>
			<S.Content>
				<S.LogoWrapper>
					<Image src="/svg/logo-rd-station-default.svg" alt="Logo" width={136} height={25} />
				</S.LogoWrapper>

				<S.Menu onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<Image src="/svg/menu.svg" width={24} height={24} alt="List Icon" />
				</S.Menu>
			</S.Content>

			<ReactModal
				isOpen={isMenuOpen}
				style={{
					content: { inset: "65px 0 0 0", padding: 0, borderRadius: 0, height: "fit-content" },
					overlay: { backgroundColor: "transparent", padding: 0 },
				}}
			>
				<S.MenuContainer>Menu</S.MenuContainer>
			</ReactModal>
		</S.Container>
	);
};
