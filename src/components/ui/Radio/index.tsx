import { InputHTMLAttributes, forwardRef } from "react";

import * as S from "./styles";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
}

export const RadioInput = forwardRef<HTMLInputElement, RadioProps>(
	({ label, errorMessage, placeholder, name, type, ...rest }, ref) => {
		return (
			<S.Container>
				{label && <S.Label htmlFor={name}>{label}</S.Label>}

				<S.InputContainer>
					<input type="radio" name={name} ref={ref} {...rest} />

					{placeholder && <S.Placeholder>{placeholder}</S.Placeholder>}
				</S.InputContainer>
			</S.Container>
		);
	}
);

RadioInput.displayName = "Radio";
