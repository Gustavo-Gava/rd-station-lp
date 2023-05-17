import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/global/createGlobalStyle";

import "swiper/css";
import "react-toastify/dist/ReactToastify.css";

import theme from "@/styles/theme/theme";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />

				<GlobalStyle />

				<ToastContainer />
			</ThemeProvider>
		</>
	);
}
