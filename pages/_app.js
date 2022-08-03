/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import LoadingScreen from "../components/Loading-Screen/index";
import "../styles/globals.css";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export const config = {
	unstable_runtimeJS: false,
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title dir="ltr">Sailspad Metaverse AR business card platform</title>
				<meta data-rh="true" name="robots" content="index, follow" />
				<meta data-rh="true" name="google" content="translate" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta content="origin" name="referrer" />
				<meta name="author" content="Ghassan Awad" />
				<meta name="copyright" content="Ghassan" />
				<meta name="language" content="en" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					property="description"
					content="Get the most innovative business card using Augmented reality with the power of Sailspad platform. Unlimited copies, unlimited views, works on all types of Smartphones."
				/>

				<meta
					name="og:description"
					content="SailsPad is an AR Platform that allows entrepreneurs to create AR business cards in a short period of time for multiple users, which improves business networking performance and results. Sailspad gives a lasting impression on everyone who uses your printed business card, Sailspad is affordable, reliable, and able to manage a huge number of cards on one Dashboard."
				/>
				<meta
					name="og:title"
					content="Sailspad Metaverse AR business card platform"
				/>
				<meta
					name="og:url"
					content="https://landing-page-sailspad.vercel.app/"
				/>

				{/* <!-- keywords --> */}
				<meta
					data-rh="true"
					name="keywords"
					conten="creative business cards,cool business cards,e business card,personal business cards,design your own business cards,blank business cards"
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="design your own business cards,professional business cards,making business cards,modern business card design,professional business card design,creating business cards,creative business card design,business card digital,making business cards online,personal business card design,good quality business cards,best quality business cards"
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="card business , business card design,cheap business cards,name card,business card printing,business cards online,order business cards,best business cards,business card design free,luxury business cards"
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="تصميم تطبيقات أبو ظبي, تطوير تطبيق أبو ظبي, تطوير تطبيق جوال أبو ظبي, شركة تطوير تطبيق أبو ظبي, تطوير تطبيقات الجوال في أبو ظبي, شركة تصميم تطبيقات الامارات, تصميم ابلكيشن في أبو ظبي برنامج صنع تطبيقات الاندرويد, شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، تطوير تطبيقات الهاتف المحمول في أبو ظبي ، شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطورو التطبيقات في أبو ظبي ، شركة تطوير التطبيقات في أبو ظبي ، شركة مطوري تطبيقات الجوال في أبو ظبي ، تطوير تطبيقات الاندرويد أبو ظبي ، تطوير تطبيقات ايفون في أبو ظبي، تطوير تطبيقات الآيفون في أبو ظبي ، شركات تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطور أندرويد أبو ظبي ، خدمات تطوير تطبيقات الهاتف المحمول في أبو ظبي "
				/>

				{/* <!-- card  --> */}
				<meta name="instagram:site" content="@beyin.me" />
				<meta name="Linkedin:site" content="@beyin-tech" />

				<meta property="twitter:card" content="beyintech" />
				<meta property="twitter:url" content="https://twitter.com/beyintech" />
				<meta property="twitter:title" content="@beyin-tech" />
				<meta
					property="description"
					content="ستارتاب رقمي متخصص في تطوير المنصات الرقمية والواقع المعزز"
				/>
				<meta
					property="twitter:image"
					content="https://twitter.com/beyintech/photo"
				/>
				{/*  */}
				<meta
					name="google-site-verification"
					content="th0w1IxRhRL1luM22xO2EhIv_Gi_erWm5shJS5_L4H4"
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
			</Head>
			<>
				<Cursor />
				<LoadingScreen />
				<Component {...pageProps} />
				{/* <GoogleAnalytics measurementId="G-0CQE8M26C5" /> */}
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtm.js?id=GTM-PJSGRXW"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config','GTM-PJSGRXW')
					`}
				</Script>
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
				<Script
					id="initWow"
					strategy="lazyOnload"
				>{`new WOW().init();`}</Script>
				{/* <Script
				src="https://polyfill.io/v3/polyfill.min.js؟features=Array.prototype.map"
				Strategy="beforeInteractive" // lazyOnload، afterInteractive
			/> */}
			</>
		</>
	);
}

export default MyApp;
