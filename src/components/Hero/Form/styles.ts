import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.system.background};
	padding: 40px 16px;
	gap: 24px;
	box-shadow: ${({ theme }) => theme.shadows.md};

	@media (${({ theme }) => theme.devices.notebook}) {
		position: absolute;
		top: 0px;
		right: 0px;
		z-index: 2;
	}
`;

export const SubmittedContainer = styled.div`
	min-height: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	background-color: ${({ theme }) => theme.colors.system.background};
	box-shadow: ${({ theme }) => theme.shadows.md};

	@media (${({ theme }) => theme.devices.notebook}) {
		position: absolute;
		top: 0px;
		right: 0px;
		z-index: 2;
	}
`;

export const Title = styled.h3`
	text-align: center;
	font-size: ${({ theme }) => theme.fonts.size.heading.xs};
	font-weight: ${({ theme }) => theme.fonts.weight.extrabold};
`;

export const Subtitle = styled.p`
	text-align: center;
	color: ${({ theme }) => theme.colors.gray[70]};
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;

	background-color: ${({ theme }) => theme.colors.gray[10]};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	margin-top: 8px;
`;
