import { Controller, ControllerRenderProps } from "react-hook-form";
import ReactSelect from "react-select";

import * as S from "./styles";

const options = [
	{ value: "ceo", label: "Sócio(a) / CEO / Proprietário(a)" },
	{ value: "sales_director", label: "Diretor(a) de Vendas" },
	{ value: "marketing_director", label: "Diretor(a) de Marketing" },
	{ value: "general_director", label: "Diretor(a) de Outras Áreas" },
	{ value: "director_marketing_manager", label: "Diretor(a) de Gerente de Marketing" },
	{ value: "marketing_director", label: "Gerente de Marketing" },
	{ value: "sales_manager", label: "Gerente de Vendas" },
	{ value: "marketing_coordinator", label: "Coordenador(a)/Supervisor(a) de Marketing" },
	{ value: "sales_coordinator", label: "Coordenador(a)/Supervisor(a) de Vendas" },
	{ value: "marketing_junior", label: "Analista/Assistente de Marketing" },
	{ value: "sales_junior", label: "Analista/Assistente de Vendas" },
	{ value: "sales", label: "Vendedor(a) / Executivo(a) de Contas" },
	{ value: "study", label: "Estudante" },
	{ value: "others", label: "Outros cargos" },
];

interface SelectProps {
	label?: string;
	errorMessage?: string;
	placeholder?: string;
}

export const Select = ({ label, errorMessage, placeholder, ...rest }: SelectProps) => {
	return (
		<S.Container $error={!!errorMessage}>
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
