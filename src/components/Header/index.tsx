import Image from "next/image";
import ReactModal from "react-modal";

import * as S from "./styles";
import { useState } from "react";
import { Menu } from "./Menu";
import { MenuDesktop } from "./MenuDesktop";

type ButtonVariant = "primary" | "secondary" | "highlighted";

export type MenuContent = {
	title: string;
	content?: Array<{
		text: string;
		link: string;
	}>;
};

export type ListItem = {
	title: string;
	content?: Array<MenuContent>;
};

type Button = {
	title: string;
	isLink?: boolean;
	href?: string;
	variant?: "primary" | "secondary" | "highlighted";
};

export interface MenuDataProps {
	listItems: Array<ListItem>;
	buttons: Array<Button>;
}

const menuData = {
	listItems: [
		{ title: "Menu 1" },
		{
			title: "Menu 2",
			content: [
				{ title: "METODOLOGIA", content: [{ text: "Tudo sobre Inbound Marketing", link: "/" }] },
				{
					title: "CURSOS",
					content: [{ text: "RD University", link: "https://app.rdstation.com.br/signup/" }],
				},
			],
		},
		{ title: "Menu 3" },
		{ title: "Menu 4" },
	],
	buttons: [
		{ title: "Button", variant: "secondary" as ButtonVariant },
		{
			title: "Button",
			variant: "primary" as ButtonVariant,
			isLink: true,
			href: "https://app.rdstation.com.br/signup/",
		},
	],
};

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuIcon = isMenuOpen ? "/svg/x.svg" : "/svg/menu.svg";

	return (
		<S.Container>
			<S.Content>
				<S.LogoWrapper>
					<Image src="/svg/logo-rd-station-default.svg" alt="Logo" width={136} height={25} />
				</S.LogoWrapper>

				<S.MenuMobileButtonWrapper>
					<S.Menu onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Image src={menuIcon} width={24} height={24} alt="List Icon" />
					</S.Menu>
				</S.MenuMobileButtonWrapper>

				<S.MenuDesktopWrapper>
					<MenuDesktop data={menuData} />
				</S.MenuDesktopWrapper>
			</S.Content>

			<ReactModal
				isOpen={isMenuOpen}
				style={{
					content: {
						inset: "65px 0 0 0",
						padding: 0,
						borderRadius: 0,
						height: "fit-content",
						zIndex: 99,
					},
					overlay: { padding: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" },
				}}
			>
				<Menu data={menuData} />
			</ReactModal>
		</S.Container>
	);
};
