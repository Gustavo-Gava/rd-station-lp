import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "highlighted";
	children: ReactNode;
	icon?: ReactNode;
}

export const Button = ({ variant = "primary", children, icon, ...rest }: ButtonProps) => {
	return (
		<S.Container variant={variant} {...rest}>
			{children}

			{icon && icon}
		</S.Container>
	);
};
