import Image from "next/image";

import * as S from "./styles";

export const Header = () => {
	return (
		<S.Container>
			<S.Content>
				<S.LogoWrapper>
					<Image src="/svg/logo-rd-station-default.svg" alt="Logo" width={136} height={25} />
				</S.LogoWrapper>

				<S.Menu>
					<Image src="/svg/menu.svg" width={24} height={24} alt="List Icon" />
				</S.Menu>
			</S.Content>
		</S.Container>
	);
};
