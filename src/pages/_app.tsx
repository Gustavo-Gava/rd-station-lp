import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/global/createGlobalStyle";

import theme from "@/styles/theme/theme";
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />

				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}
