import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.system.background};
	padding: 40px 16px;
	gap: 24px;
	box-shadow: ${({ theme }) => theme.shadows.md};

	@media (${({ theme }) => theme.devices.notebook}) {
		max-width: 500px;
		position: absolute;
		top: 0px;
		right: 0px;
		z-index: 2;
	}
`;

export const SubmittedContainer = styled.div`
	width: 100%;
	min-height: 800px;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px 16px;
	gap: 16px;
	background-color: ${({ theme }) => theme.colors.system.background};
	box-shadow: ${({ theme }) => theme.shadows.md};

	@media (${({ theme }) => theme.devices.notebook}) {
		max-width: 500px;
		position: absolute;
		top: 0px;
		right: 0px;
		z-index: 2;
	}
`;

export const Title = styled.p`
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
