import { InputHTMLAttributes, forwardRef } from "react";

import * as S from "./styles";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
}

export const RadioInput = forwardRef<HTMLInputElement, RadioProps>(
	({ label, errorMessage, placeholder, type, ...rest }, ref) => {
		return (
			<S.Container>
				{label && <S.Label>{label}</S.Label>}

				<S.InputContainer>
					<input type="radio" ref={ref} {...rest} />

					{placeholder && <S.Placeholder>{placeholder}</S.Placeholder>}
				</S.InputContainer>
			</S.Container>
		);
	}
);

RadioInput.displayName = "Radio";
