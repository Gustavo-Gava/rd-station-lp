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
import { SpacedSection } from "@/components/ui/SpacedSection";

import {
	benefitsData,
	callToActionData,
	demoData,
	heroData,
	integrationsData,
	listData,
	togetherData,
} from "@/mock";

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

				<Hero {...heroData} />

				<Together {...togetherData} />

				<List {...listData} />

				<SpacedSection>
					<Benefits {...benefitsData} />
				</SpacedSection>

				<SpacedSection>
					<CallToAction {...callToActionData} />
				</SpacedSection>

				<SpacedSection>
					<Demo {...demoData} />
				</SpacedSection>

				<SpacedSection>
					<Integrations {...integrationsData} />
				</SpacedSection>

				<Footer />
			</main>
		</>
	);
}
