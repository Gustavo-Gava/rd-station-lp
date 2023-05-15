import Head from "next/head";

import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { Benefits } from "@/components/Benefits";
import { List } from "@/components/List";
import { Together } from "@/components/Together";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Demo } from "@/components/Demo";
import { Integrations } from "@/components/Integrations";

const integrations = {
	title: "Torne sua operação de Marketing ainda mais poderosa",
	description:
		"O RD Station Marketing se conecta as principais ferramentas nacionais e internacionais",
	platforms: [
		{
			name: "RD Station CRM",
			icon: "/svg/platforms/rd-station-crm.svg",
		},
		{
			name: "Salesforce",
			icon: "/svg/platforms/salesforce.svg",
		},
		{
			name: "Google",
			icon: "/svg/platforms/google.svg",
		},
		{
			name: "Facebook",
			icon: "/svg/platforms/facebook.svg",
		},
		{
			name: "Linkedin",
			icon: "/svg/platforms/linkedin.svg",
		},
		{
			name: "Wordpress",
			icon: "/svg/platforms/wordpress.svg",
		},
		{
			name: "Hotmart",
			icon: "/svg/platforms/hotmart.svg",
		},
		{
			name: "Pagseguro",
			icon: "/svg/platforms/pagseguro.svg",
		},
		{
			name: "Shopify",
			icon: "/svg/platforms/shopify.svg",
		},
		{
			name: "Zapier",
			icon: "/svg/platforms/zapier.svg",
		},
	],
};

export default function Home() {
	return (
		<>
			<Head>
				<title>RD Station | LP</title>
				<meta name="description" content="RD Station Landing Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<main>
				<Header />

				<Hero />

				<Together />

				<List />

				<Benefits />

				<CallToAction />

				<Demo />

				<Integrations data={integrations} />

				<Footer />
			</main>
		</>
	);
}
