import { InputHTMLAttributes, forwardRef, useState } from "react";
import * as S from "./styles";
import Image from "next/image";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, errorMessage, type, name, ...rest }, ref) => {
		const [inputType, setInputType] = useState(type);

		const toggleVisibility = () => {
			if (inputType === "password") {
				setInputType("text");
				return;
			}

			setInputType("password");
		};

		const iconPath = inputType === "password" ? "/svg/eye_close.svg" : "/svg/eye_open.svg";

		return (
			<S.Container>
				{label && <S.Label htmlFor={name}>{label}</S.Label>}

				<S.InputContainer error={!!errorMessage}>
					<S.Input type={inputType} ref={ref} name={name} {...rest} />

					{type === "password" && (
						<button type="button" onClick={toggleVisibility}>
							<Image src={iconPath} width={24} height={24} alt="Eye" />
						</button>
					)}
				</S.InputContainer>

				{errorMessage && <S.Error>{errorMessage}</S.Error>}
			</S.Container>
		);
	}
);

Input.displayName = "Input";
