import React from "react";
import Head from "next/head";
import Navbar from "../components/Navba/index";
import NAvbarF from "../components/navbar-full-menu/index"
import AllNavbar from "../components/allNavbar/AllNav";
import Slider1 from "../components/slider1/index";
import About from "../components/About/index";
import SectionAbout from "../components/About/SectionAbout"
import Services from "../components/Services1/index";
import Services2 from "../components/Services2/index";
// import Video from "../components/Video-with-testimonials/index";
// import SkillsCircle from "../components/Skills-circle/index";
import Clients from "../components/Clients1";
import Blog from "../components/Blogs-two-column-slider/index";
import CallToAction from "../components/Call-to-action/index";
import Footer from "../components/Footer/index";
import Light from "../components/layout/Layout"
import appData from "../components/data/app.json"


export default function Home() {
 const fixedSlider = React.useRef(null);
 const MainContent = React.useRef(null);
React.useEffect(() => {
	setInterval(() => {
		if (fixedSlider.current) {
			var slidHeight = fixedSlider.current.offsetHeight;
		}
		if (MainContent.current) {
			MainContent.current.style.marginTop = slidHeight + "px";
		}
	}, 1000);
}, [fixedSlider, MainContent]);

	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<title>Sailspad | Metaverse AR Business card platform </title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta content="origin" name="referrer" />
				<meta name="author" content="Ghassan Awad" />
				<meta
					name="subject"
					content="Sailspad Metaverse AR business card platform"
				/>
				<meta name="copyright" content="Ghassan" />
				<meta name="language" content="en" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
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
					content="https://landing-page-sailspad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbeyinCard.fb6fe724.png&w=1200&q=75"
				/>
				<meta
					name="description"
					content="Get the most innovative business card using Augmented reality with the power of Sailspad platform. Unlimited copies, works on all types of Smartphones"
				/>
				<meta
					name="og:title"
					content="Sailspad Metaverse AR business card platform"
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
				<meta
					data-rh="true"
					name="keywords"
					content="شركة تطوير تطبيقات الويب ،خدمات تطوير تطبيقات الويب ،شركة برمجة تطبيقات الويب "
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="creative business cards,cool business cards,e business card,personal business cards,design your own business cards,blank business cards"
				/>

				<meta data-rh="true" name="google" content="translate" />
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
			</Head>

			<Light>
				<AllNavbar  />
				{/* <NAvbarF nr={navbarFullMenuRef} />
				<Navbar nr={navbarRef} lr={logoRef} /> */}
				<Slider1 sliderRef={fixedSlider} />
				<div ref={MainContent} className="main-content">
					<About />
					<Services />
					<Services2 />
					<SectionAbout />
					<Clients theme="light" />
					<Blog />
					<CallToAction theme="light" />
				</div>

				<Footer />
			</Light>
		</>
	);
}
