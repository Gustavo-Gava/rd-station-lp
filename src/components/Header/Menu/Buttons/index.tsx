import { Button } from "@/components/ui/Button";
import Image from "next/image";

import * as S from "./styles";
import { MenuDataProps } from "../..";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { toast } from "react-toastify";

interface ButtonsProps {
	data: MenuDataProps["buttons"];
}

export const Buttons = ({ data }: ButtonsProps) => {
	function handleClick() {
		toast.success("Click registrado 🥳");
	}

	return (
		<S.ButtonsWrapper>
			{data.map((button) => {
				if (button.isLink) {
					return (
						<ButtonLink key={button.title} href={button.href} variant={button.variant}>
							{button.title}
						</ButtonLink>
					);
				}

				return (
					<Button onClick={handleClick} key={button.title} variant={button.variant}>
						{button.title}
					</Button>
				);
			})}
		</S.ButtonsWrapper>
	);
};
