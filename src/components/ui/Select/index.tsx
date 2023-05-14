import { Controller, ControllerRenderProps } from "react-hook-form";
import ReactSelect from "react-select";

import * as S from "./styles";

const options = [
	{ value: "frontend", label: "Sócio(a) / CEO / Proprietário(a)" },
	{ value: "backend", label: "Diretor(a) de Vendas" },
	{ value: "fullstack", label: "Diretor(a) de Marketing" },
	{ value: "fullstack", label: "Diretor(a) de Outras Áreas" },
	{ value: "fullstack", label: "Diretor(a) de Gerente de Marketing" },
	{ value: "fullstack", label: "Gerente de Marketing" },
	{ value: "fullstack", label: "Gerente de Vendas" },
	{ value: "fullstack", label: "Coordenador(a)/Supervisor(a) de Marketing" },
	{ value: "fullstack", label: "Coordenador(a)/Supervisor(a) de Vendas" },
	{ value: "fullstack", label: "Analista/Assistente de Marketing" },
	{ value: "fullstack", label: "Analista/Assistente de Vendas" },
	{ value: "fullstack", label: "Vendedor(a) / Executivo(a) de Contas" },
	{ value: "fullstack", label: "Estudante" },
	{ value: "fullstack", label: "Outros cargos" },
];

interface SelectProps {
	label?: string;
	errorMessage?: string;
	placeholder?: string;
}

export const Select = ({ label, errorMessage, placeholder, ...rest }: SelectProps) => {
	return (
		<S.Container error={!!errorMessage}>
			{label && <S.Label>{label}</S.Label>}

			<ReactSelect
				unstyled
				className="react-select-container"
				classNamePrefix="react-select"
				placeholder={placeholder}
				options={options}
				{...rest}
			/>
			{errorMessage && <S.Error>{errorMessage}</S.Error>}
		</S.Container>
	);
};
