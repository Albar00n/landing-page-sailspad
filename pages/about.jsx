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
				<title> Beyin Technologies - About </title>
				<meta property="og:locale" content="ar_AR" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=0"
				/>
				<meta
					name="robots"
					content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
				/>
				<meta name="description" content="" />
				<link
					rel="alternate"
					type="application/atom+xml"
					href="https://feeds.feedburner.com/blogspot/amDG"
				/>
				<meta property="og:type" content="article" />

				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Abu Dhabi"
				/>
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
