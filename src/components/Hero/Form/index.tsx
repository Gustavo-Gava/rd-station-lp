import { Input } from "@/components/ui/Input";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as S from "./styles";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { RadioInput } from "@/components/ui/Radio";
import { Politics } from "./Politics";

const schema = yup.object({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().email("Email inválido").required("E-mail obrigatório"),
	phone: yup.string().required("Telefone obrigatório"),
	role: yup
		.object({ value: yup.string(), label: yup.string() })
		.required("Cargo obrigatório")
		.default(undefined),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(6, "A senha deve ter no mínimo 6 caracteres")
		.max(10, "A senha deve ter no máximo 10 caracteres")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
			"A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
		),
	confirmPassword: yup
		.string()
		.required("Confirmação de senha obrigatória")
		.oneOf([yup.ref("password")], "As senhas devem ser iguais"),
	hasSite: yup.boolean(),
	site: yup
		.string()
		.url()
		.when("hasSite", {
			is: true,
			then: () => yup.string().required("Site obrigatório"),
		}),
});

export type MainFormData = yup.InferType<typeof schema>;

export const Form = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<MainFormData>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: MainFormData) => console.log(data);

	return (
		<S.Container>
			<S.Title>Comece seus 10 dias de teste grátis do RD Station Marketing!</S.Title>

			<S.Subtitle>Não precisa cadastrar cartão de crédito. 😉</S.Subtitle>

			<S.Divider />

			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<Input placeholder="Insira seu nome" label="Diga, qual seu nome?" {...register("name")} />

				<Input
					placeholder="Insira seu e-mail"
					label="Seu email de trabalho"
					errorMessage={errors.email?.message}
					{...register("email")}
				/>

				<Input
					placeholder="Insira seu número de telefone com DDD"
					label="Seu telefone"
					errorMessage={errors.phone?.message}
					{...register("phone")}
				/>

				<Controller
					name="role"
					control={control}
					render={({ field }) => (
						<Select
							placeholder="Selecione seu cargo"
							label="Seu cargo de ocupação"
							errorMessage={errors.role?.message}
							{...field}
						/>
					)}
				/>

				<Input
					placeholder="Digite sua senha"
					label="Crie uma senha"
					type="password"
					errorMessage={errors.password?.message}
					{...register("password")}
				/>

				<Input
					placeholder="Digite sua senha"
					label="Confirme sua senha"
					type="password"
					errorMessage={errors.confirmPassword?.message}
					{...register("confirmPassword")}
				/>

				<RadioInput label="Você tem um site?" placeholder="Meu site é" {...register("hasSite")} />

				<Input placeholder="Insira o endereço do seu site" {...register("site")} />

				<RadioInput placeholder="Ainda não tenho site" {...register("hasSite")} />

				<Politics />

				<S.ButtonWrapper>
					<Button variant="highlighted">CRIAR MINHA CONTA</Button>
				</S.ButtonWrapper>
			</S.Form>
		</S.Container>
	);
};
