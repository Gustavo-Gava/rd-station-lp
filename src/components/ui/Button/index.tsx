import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "highlighted";
	children: ReactNode;
}

export const Button = ({ variant = "primary", children, ...rest }: ButtonProps) => {
	return (
		<S.Container variant={variant} {...rest}>
			{children}
		</S.Container>
	);
};
