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
				<title> Sailspad - Privacy Policy</title>
				<meta property="og:locale" content="ar_AR" />
				<link rel="shortcut icon" href="/favicon.ico" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta
					name="robots"
					content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
				/>

				<meta name="title" content="Sailspad - Privacy Policy" />
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
