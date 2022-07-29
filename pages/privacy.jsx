import React from "react";
import Head from "next/head";
import PrivacyDetails from "../components/privacy/Privacy-details";
import Footer from "../components/Footer/index";
import AllNavbar from "../components/allNavbar/AllNav";
import Header from "../components/privacy/Privacy-header"
import Overlay from "../components/Terms and conditions/Overlay";

const Privacy = () => {

	return (
		<>
			<Head>
				<title> Beyin Technologies - Privacy Policy</title>
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
				<meta
					name="description"
					content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
				/>
				<meta
					property="og:description"
					content="Beyin is a leading mobile app development company in Abu Dhabi. We specialize in cross platform app development, Augmented reality and virtual reality app development."
				/>
				<meta name="title" content="Beyin Technologies - Privacy Policy" />
				<meta property="og:title" content="Privacy Policy" />
				{/* <link rel="alternate" type="application/atom+xml" href="" /> */}
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="ar_AR" />
			
			</Head>
			<>
				<AllNavbar />
				<Header />
				<Overlay />
				<PrivacyDetails />
				<Footer />
			</>
		</>
	);
};

export default Privacy;
