import styled from "styled-components";

export const Container = styled.div`
	margin: 40px 0;

	@media (${({ theme }) => theme.devices.notebook}) {
		margin: 60px 0;
	}
`;
