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
				<title>Sailspad Technologies</title>
				<link rel="icon" href="/favicon.ico" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="description"
					content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
				/>
				<meta
					name="og:description"
					content="Beyin is a leading mobile app development company in Abu Dhabi. We specialize in cross platform app development, Augmented reality and virtual reality app development."
				/>
				<meta
					name="title"
					content="Https://landing-page-sailspad.vercel.app/"
				/>

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
				<meta data-rh="true" name="robots" content="index, follow" />
				<meta name="Linkedin:site" content="@beyin-tech" />
				<meta name="instagram:site" content="@beyin.me" />

				<meta name="author" content="Ghassan Awad" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta data-rh="true" name="google" content="translate" />
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
			<Script
				src="https://polyfill.io/v3/polyfill.min.js؟features=Array.prototype.map"
				Strategy="beforeInteractive" // lazyOnload، afterInteractive
			/>
		</>
	);
}

export default MyApp;
