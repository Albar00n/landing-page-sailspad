/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import LoadingScreen from "../components/Loading-Screen/index";
import "../styles/globals.css";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export const config = {
	unstable_runtimeJS : false
}

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Sailspad Metaverse AR business card platform</title>
				<link rel="icon" href="/favicon.ico" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Ghassan Awad" />
				<meta data-rh="true" name="google" content="translate" />
				<meta name="language" content="en" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				{/*  */}
				<meta
					property="description"
					content="Get the most innovative business card using Augmented reality with the power of Sailspad platform. Unlimited copies, unlimited views, works on all types of Smartphones."
				/>
				{/* <meta
					name="title"
					content="Https://landing-page-sailspad.vercel.app/"
				/> */}
				{/*  */}
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
					name="keywords"
					content="شركة تطوير تطبيقات الويب ،خدمات تطوير تطبيقات الويب ،شركة برمجة تطبيقات الويب "
				/>
				<meta
					name="keywords"
					content="تصميم تطبيقات أبو ظبي, تطوير تطبيق أبو ظبي, تطوير تطبيق جوال أبو ظبي, شركة تطوير تطبيق أبو ظبي, تطوير تطبيقات الجوال في أبو ظبي, شركة تصميم تطبيقات الامارات, تصميم ابلكيشن في أبو ظبي برنامج صنع تطبيقات الاندرويد, شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، تطوير تطبيقات الهاتف المحمول في أبو ظبي ، شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطورو التطبيقات في أبو ظبي ، شركة تطوير التطبيقات في أبو ظبي ، شركة مطوري تطبيقات الجوال في أبو ظبي ، تطوير تطبيقات الاندرويد أبو ظبي ، تطوير تطبيقات ايفون في أبو ظبي، تطوير تطبيقات الآيفون في أبو ظبي ، شركات تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطور أندرويد أبو ظبي ، خدمات تطوير تطبيقات الهاتف المحمول في أبو ظبي "
				/>
				{/*  */}
				<meta data-rh="true" name="robots" content="index, follow" />
				{/*  */}
				<meta
					name="title"
					content="Sailspad Metaverse AR business card platform"
				/>
				<meta
					name="og:description"
					content="SailsPad is an AR Platform that allows entrepreneurs to create AR business cards in a short period of time for multiple users, which improves business networking performance and results. Sailspad gives a lasting impression on everyone who uses your printed business card, Sailspad is affordable, reliable, and able to manage a huge number of cards on one Dashboard."
				/>
				<meta name="og:type" content="Organization" />
				<meta
					name="og:url"
					content="https://landing-page-sailspad.vercel.app/"
				/>
				<meta
					name="og:image"
					content="https://landing-page-sailspad.vercel.app/Sailspad.png"
				/>
				<meta
					name="og:title"
					content="Sailspad Metaverse AR business card platform"
				/>

				{/*  */}
				<meta name="twitter:card" content="summary_large_image"></meta>
				<meta name="twitter:url" content="https://twitter.com/beyintech" />
				<meta name="twitter:title" content="Beyin Digital Technology" />
				<meta name="twitter:site" content="@beyintech" />
				<meta name="twitter:creator" content="@SarahMaslinNir"></meta>
				<meta
					name="twitter:description"
					content="Digital Startup specializes in developing digital platforms and augmented reality , Get the most innovative business card using Augmented reality with the power of Sailspad platform. Unlimited copies, unlimited views, works on all types of Smartphones"
				/>

				<meta
					name="twitter:image"
					content="https://landing-page-sailspad.vercel.app/Sailspad.png"
				></meta>
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
							name: "Ghassan-Awad",
							url: "https://landing-page-sailspad.vercel.app/",
							email: "mailto:support@beyin.com",
							founders: "Ghassan Awad",
							foundingDate: "2022",
							brand: "https://landing-page-sailspad.vercel.app/favicon.ico",
							logo: "https://landing-page-sailspad.vercel.app/Sailspad.png",
							sameAs: [
								"https://twitter.com/beyintech",
								"https://www.linkedin.com/company/beyin-tech/",
								"https://www.instagram.com/beyin.me/",
							],
							aggregateRating: {
								"@type": "AggregateRating",
								ratingValue: "5,0",
								ratingCount: "300",
							},
							address: {
								"@type": "PostalAddress",
								addressCountry: "United Arab Emirates",
							},
						}),
					}}
				></script>
				<meta
					name="google-site-verification"
					content="th0w1IxRhRL1luM22xO2EhIv_Gi_erWm5shJS5_L4H4"
				/>
			</Head>
			<Cursor />
			<LoadingScreen />
			<GoogleAnalytics measurementId="-0CQE8M26C5" />
			<Component {...pageProps} />

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
			<Script
				src="https://polyfill.io/v3/polyfill.min.js؟features=Array.prototype.map"
				Strategy="beforeInteractive" // lazyOnload، afterInteractive
			/>
		</>
	);
}

export default MyApp;
