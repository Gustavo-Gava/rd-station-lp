import { PropsWithChildren } from "react";
import * as S from "./styles";

export const SpacedSection = ({ children }: PropsWithChildren) => {
	return <S.Container>{children}</S.Container>;
};
