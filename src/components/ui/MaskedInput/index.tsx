import { InputHTMLAttributes, forwardRef } from "react";
import ReactMaskedInput from "react-text-mask";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
}

export const MaskedInput = forwardRef<HTMLInputElement, InputProps>(
	({ label, errorMessage, type, ...rest }, ref) => {
		const phoneMask = (value: any) => {
			const hasOptionalDigit = value.length >= 15 ? true : false;

			const optionalDigit = hasOptionalDigit ? [/\d/, "-"] : ["-"];

			const mask = [
				"(",
				/\d/,
				/\d/,
				")",
				" ",
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				...optionalDigit,
				/\d/,
				/\d/,
				/\d/,
				/\d/,
			];

			return mask;
		};

		return (
			<S.Container>
				{label && <S.Label>{label}</S.Label>}

				<S.InputContainer $error={!!errorMessage}>
					<ReactMaskedInput className="input" guide={false} mask={phoneMask} {...rest} />
				</S.InputContainer>

				{errorMessage && <S.Error>{errorMessage}</S.Error>}
			</S.Container>
		);
	}
);

MaskedInput.displayName = "MaskedInput";
