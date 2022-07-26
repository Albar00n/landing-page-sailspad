import React from "react";
import Head from "next/head";
import TermsDetails from "../components/Terms and conditions/Terms-details";
import Footer from "../components/Footer";
import AllNavbar from "../components/allNavbar/AllNav";
import Overlay from "../components/Terms and conditions/Overlay";
import Header from "../components/Terms and conditions/Terms-header";
const Privacy = () => {
	return (
		<>
			<Head>
				<title> Sailspad - Terms & Condition </title>

				<link rel="shortcut icon" href="/favicon.ico" />

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="robots"
					content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
				/>
				<meta
					name="description"
					content="Sailspad is an AR business networking and communication platform developed by Beyin Digital Technology Limited, please read our Terms and Condition for more details."
				/>
				<meta
					property="description"
					content="Sailspad is an AR business networking and communication platform developed by Beyin Digital Technology Limited, please read our Terms and Condition for more details."
				/>
				<meta property="og:title" content="Terms & Condition" />

				<meta
					property="og:url"
					content="https://landing-page-sailspad.vercel.app/terms"
				/>
				<meta
					name="og:image"
					content="https://landing-page-sailspad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbeyinCard.fb6fe724.png&w=1200&q=75"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Sailspad - Terms & Condition",
							url: "https://landing-page-sailspad.vercel.app/terms",
							logo: "https://landing-page-sailspad.vercel.app/Sailspad.png",
						}),
					}}
				></script>
			</Head>
			<>
				<AllNavbar />
				<Header />
				<Overlay />
				<TermsDetails />
				<Footer />
			</>
		</>
	);
};

export default Privacy;
