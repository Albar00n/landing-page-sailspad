/* eslint-disable react/no-unknown-property */
import React from "react";
import Head from "next/head";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import Section from "../components/About-intro/Section"
import CallToAction from "../components/Call-to-action";

import AllNavbar from "../components/allNavbar/AllNav";
import Footer from "../components/Footer";


const AboutDark = () => {

	return (
		<>
			<Head>
				<title> About Sailspad </title>

				<link rel="shortcut icon" href="/favicon.ico" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="robots"
					content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
				/>
				<meta
					property="description"
					content="Sailspad is a business networking and communication platform that utilizes metaverse AR technologies to create a better business networking and communication experience."
				/>

				<meta
					property="og:url"
					content="https://landing-page-sailspad.vercel.app/about"
				/>
				<meta
					name="og:image"
					content="https://landing-page-sailspad.vercel.app/Sailspad.png"
				/>

				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Abu Dhabi"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "About Sailspad ",
							url: "https://landing-page-sailspad.vercel.app/about",
							logo: "https://landing-page-sailspad.vercel.app/Sailspad.png",
						}),
					}}
				></script>
			</Head>
			<>
				<AllNavbar />
				<AboutHeader />
				<Section />
				<AboutIntro />
				<CallToAction subBG theme="light" />
				<Footer />
			</>
		</>
	);
};

export default AboutDark;
