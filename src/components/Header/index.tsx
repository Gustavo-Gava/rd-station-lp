import Image from "next/image";
import ReactModal from "react-modal";

import * as S from "./styles";
import { useState } from "react";
import { Menu } from "./Menu";
import { MenuDesktop } from "./MenuDesktop";
import { topModalStyles } from "@/styles/utils";

export type ButtonVariant = "primary" | "secondary" | "highlighted";

export type MenuContent = {
	title: string;
	href?: string;
	content?: Array<{
		text: string;
		link: string;
	}>;
};

export type ListItem = {
	title: string;
	href?: string;
	content?: Array<MenuContent>;
};

export type Button = {
	title: string;
	isLink?: boolean;
	href?: string;
	variant?: "primary" | "secondary" | "highlighted";
};

export interface MenuDataProps {
	listItems: Array<ListItem>;
	buttons: Array<Button>;
}

export const Header = ({ listItems, buttons }: MenuDataProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuIcon = isMenuOpen ? "/svg/x.svg" : "/svg/menu.svg";

	return (
		<S.Container>
			<S.Content>
				<S.LogoWrapper href="/">
					<S.Logo src="/svg/logo-rd-station-default.svg" alt="Logo" width={136} height={25} />
				</S.LogoWrapper>

				<S.MenuMobileButtonWrapper>
					<S.Menu onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Image src={menuIcon} width={24} height={24} alt="List Icon" />
					</S.Menu>
				</S.MenuMobileButtonWrapper>

				<S.MenuDesktopWrapper>
					<MenuDesktop buttons={buttons} listItems={listItems} />
				</S.MenuDesktopWrapper>
			</S.Content>

			<ReactModal
				isOpen={isMenuOpen}
				closeTimeoutMS={200}
				onRequestClose={() => setIsMenuOpen(false)}
				ariaHideApp={false}
				style={topModalStyles}
			>
				<Menu buttons={buttons} listItems={listItems} />
			</ReactModal>
		</S.Container>
	);
};
