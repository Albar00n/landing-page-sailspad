/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import LoadingScreen from "../components/Loading-Screen/index";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Sailspad</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Cursor />
		<LoadingScreen />
		{/* <ScrollToTop /> */}
			{/* <Layout> */}
				<Component {...pageProps} />
			{/* </Layout> */}

			<Script id="wow" src="/js/wow.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				id="splitting"
				src="/js/splitting.min.js"
			></Script>
			<Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
			<Script
				id="isotope"
				strategy="beforeInteractive"
				src="/js/isotope.pkgd.min.js"
			></Script>
			<Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
		</>
	);
}

export default MyApp;
