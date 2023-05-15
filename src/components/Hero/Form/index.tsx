import { Input } from "@/components/ui/Input";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import * as yup from "yup";

import * as S from "./styles";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { RadioInput } from "@/components/ui/Radio";
import { Politics } from "./Politics";
import { useEffect, useState } from "react";
import { MaskedInput } from "@/components/ui/MaskedInput";
import { api } from "@/services/api";

const createSchema = (hasSite: boolean) => {
	return yup.object({
		name: yup.string().required("Nome obrigatório"),
		email: yup.string().email("Email inválido").required("E-mail obrigatório"),
		phone: yup
			.string()
			.required("Telefone obrigatório")
			.transform((value) => (value ? value.replace(/\D/g, "") : ""))
			.matches(/^\d{10,11}$/, "Telefone inválido"),
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
		site: hasSite
			? yup.string().url().required("Site obrigatório caso tenha assinalado que possui site")
			: yup.string().notRequired(),
	});
};

const schema = yup.object({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().email("Email inválido").required("E-mail obrigatório"),
	phone: yup
		.string()
		.required("Telefone obrigatório")
		.transform((value) => (value ? value.replace(/\D/g, "") : ""))
		.matches(/^\d{10,11}$/, "Telefone inválido"),
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
			then: () => yup.string().required("Site obrigatório caso tenha assinalado que possui site"),
		}),
});

export type MainFormData = yup.InferType<typeof schema>;

export const Form = () => {
	const [submitted, setSubmitted] = useState(false);
	const [hasSite, setHasSite] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<MainFormData>({
		resolver: yupResolver(createSchema(hasSite)),
	});

	const onSubmit = async (data: MainFormData) => {
		// Esse endpoint possui erro de CORS porque está sendo feito a chamada do localhost.
		// Porém, com o intuito de mostrar a mudança dos campos do formulário, fiz com que mesmo com o erro o "submitted" seja setado para true.
		try {
			await api.post("/", data);
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitted(true);
		}
	};

	if (submitted)
		return (
			<S.SubmittedContainer>
				<S.Title>Obrigado! entraremos em contato</S.Title>
				<Image src="/svg/winners.svg" width={300} height={400} alt="people celebrating" />
			</S.SubmittedContainer>
		);

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

				<Controller
					name="phone"
					control={control}
					render={({ field }) => (
						<MaskedInput
							placeholder="Insira seu número de telefone com DDD"
							label="Seu telefone"
							errorMessage={errors.phone?.message}
							{...field}
						/>
					)}
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

				<RadioInput
					label="Você tem um site?"
					placeholder="Meu site é"
					value="true"
					name="hasSite"
					onClick={() => setHasSite(true)}
				/>

				<Input
					placeholder="Insira o endereço do seu site"
					errorMessage={errors.site?.message}
					disabled={!hasSite}
					{...register("site")}
				/>

				<RadioInput
					placeholder="Ainda não tenho site"
					value="false"
					name="hasSite"
					defaultChecked
					onChange={() => setHasSite(false)}
				/>

				<Politics />

				<S.ButtonWrapper>
					<Button variant="highlighted">CRIAR MINHA CONTA</Button>
				</S.ButtonWrapper>
			</S.Form>
		</S.Container>
	);
};
