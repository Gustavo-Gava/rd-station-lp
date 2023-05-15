import { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button";
import Link from "next/link";
import Image from "next/image";

import * as S from "./styles";

interface ButtonLinkProps extends HTMLAttributes<HTMLAnchorElement> {
	href?: string;
	children: ReactNode;
	variant?: "primary" | "secondary" | "highlighted";
	buttonProps?: HTMLAttributes<HTMLButtonElement>;
	withIcon?: boolean;
}

export const ButtonLink = ({
	children,
	href = "/",
	variant = "primary",
	withIcon = true,
	buttonProps,
	...rest
}: ButtonLinkProps) => {
	return (
		<S.LinkContainer href={href} target="_blank" {...rest}>
			<Button
				variant={variant}
				{...buttonProps}
				icon={
					withIcon ? (
						<Image width={14} height={14} src="/svg/long_arrow.svg" alt="Arrow right" />
					) : undefined
				}
			>
				{children}
			</Button>
		</S.LinkContainer>
	);
};
