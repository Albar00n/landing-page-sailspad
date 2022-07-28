import React from "react";
import Head from "next/head";
import TermsDetails from "../components/Terms and conditions/Terms-details";
import Footer from "../components/Footer";
import AllNavbar from "../components/allNavbar/AllNav";
// import DarkTheme from "../components/layouts/Dark";
import Overlay from '../components/Terms and conditions/Overlay'
import Header from "../components/Terms and conditions/Terms-header";
const Privacy = () => {
	return (
		<>
			<Head>
				<title> Beyin Technologies - Terms & Condition </title>
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
				<meta name="title" content="Beyin Technologies" />
				<meta property="og:title" content="Terms & Condition" />
				{/* <link rel="alternate" type="application/atom+xml" href="" /> */}
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="ar_AR" />
				<meta
					name="keywords"
					content="creative business cards,cool business cards,e business card,personal business cards,design your own business cards,blank business cards"
				/>
				<meta
					name="keywords"
					content="design your own business cards,professional business cards,making business cards,modern business card design,professional business card design,creating business cards,creative business card design,business card digital,making business cards online,personal business card design,good quality business cards,best quality business cards"
				/>
				<meta
					name="keywords"
					content="card business , business card design,cheap business cards,name card,business card printing,business cards online,order business cards,best business cards,business card design free,luxury business cards"
				/>
				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Kuwait"
				/>
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
