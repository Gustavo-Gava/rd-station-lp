import { ButtonLink } from "@/components/ui/ButtonLink";
import { Button } from "@/components/ui/Button";
import { MenuDataProps } from "../..";

import * as S from "./styles";

interface ButtonsProps {
	data: MenuDataProps["buttons"];
}

export const Buttons = ({ data }: ButtonsProps) => {
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
					<Button key={button.title} variant={button.variant}>
						{button.title}
					</Button>
				);
			})}
		</S.ButtonsWrapper>
	);
};
