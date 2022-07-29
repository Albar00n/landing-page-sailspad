import React from "react";
import Head from "next/head";
import Navbar from "../components/Navba/index";
import NAvbarF from "../components/navbar-full-menu/index"
import Slider1 from "../components/slider1/index";
import About from "../components/About/index";
import Services from "../components/Services1/index";
import Services2 from "../components/Services2/index";
import Video from "../components/Video-with-testimonials/index";
import SkillsCircle from "../components/Skills-circle/index";
import Clients from "../components/Clients1";
import Blog from "../components/Blogs-two-column-slider/index";
import CallToAction from "../components/Call-to-action/index";
import Footer from "../components/Footer/index";
import Light from "../components/layout/Layout"
import appData from "../components/data/app.json"


export default function Home() {
 const fixedSlider = React.useRef(null);
 const MainContent = React.useRef(null);
 const navbarRef = React.useRef(null);
     const navbarFullMenuRef = React.useRef(null);
 const logoRef = React.useRef(null);
  React.useEffect(() => {
		var navbarFullMenu = navbarFullMenuRef.current;
		if (window.pageYOffset > 300) {
			navbarFullMenu.classList.add("nav-scroll");
		} else {
			navbarFullMenu.classList.remove("nav-scroll");
		}
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				navbarFullMenu.classList.add("nav-scroll");
			} else {
				navbarFullMenu.classList.remove("nav-scroll");
			}
		});
	}, [navbarFullMenuRef]);

React.useEffect(() => {
	setInterval(() => {
		if (fixedSlider.current) {
			var slidHeight = fixedSlider.current.offsetHeight;
		}
		if (MainContent.current) {
			MainContent.current.style.marginTop = slidHeight + "px";
		}
	}, 1000);
	var navbar = navbarRef.current,
		logo = logoRef.current;
	if (window.pageYOffset > 300) {
		navbar.classList.add("nav-scroll");
	} else {
		navbar.classList.remove("nav-scroll");
	}
	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 300) {
			navbar.classList.add("nav-scroll");
			logo.setAttribute("src", appData.darkLogo);
		} else {
			navbar.classList.remove("nav-scroll");
			logo.setAttribute("src", appData.lightLogo);
		}
	});
}, [fixedSlider, MainContent, navbarRef]);

	return (
		<>
			<Head>
				<title> Sailspad Metaverse AR business card platform </title>
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
					content="Sailspad is a leading mobile app development company in Abu Dhabi. We specialize in cross platform app development, Augmented reality and virtual reality app development."
				/>
				<meta
					name="title"
					content="Sailspad Metaverse AR business card platform"
				/>
				<meta
					property="og:title"
					content="Sailspad Metaverse AR business card platform"
				/>
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
					content="Mobile App Development, Web Design, Digital Marketing company in Abu Dhabi"
				/>
				<meta
					name="keywords"
					content="شركة تطوير تطبيقات الويب ،خدمات تطوير تطبيقات الويب ،شركة برمجة تطبيقات الويب "
				/>
				<meta
					name="keywords"
					content="تصميم تطبيقات أبو ظبي, تطوير تطبيق أبو ظبي, تطوير تطبيق جوال أبو ظبي, شركة تطوير تطبيق أبو ظبي, تطوير تطبيقات الجوال في أبو ظبي, شركة تصميم تطبيقات الامارات, تصميم ابلكيشن في أبو ظبي برنامج صنع تطبيقات الاندرويد, شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، تطوير تطبيقات الهاتف المحمول في أبو ظبي ، شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطورو التطبيقات في أبو ظبي ، شركة تطوير التطبيقات في أبو ظبي ، شركة مطوري تطبيقات الجوال في أبو ظبي ، تطوير تطبيقات الاندرويد أبو ظبي ، تطوير تطبيقات ايفون في أبو ظبي، تطوير تطبيقات الآيفون في أبو ظبي ، شركات تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطور أندرويد أبو ظبي ، خدمات تطوير تطبيقات الهاتف المحمول في أبو ظبي "
				/>
			</Head>

			<Light>
				<NAvbarF nr={navbarFullMenuRef} />
				<Navbar nr={navbarRef} lr={logoRef} />
				{/* <Slider /> */}
				<Slider1 sliderRef={fixedSlider} />
				<div ref={MainContent} className="main-content">
					<About />
					<Services />
					<Services2 />
					{/* <Number /> */}
					{/* <WorksSlider /> */}
					<Video />
					<SkillsCircle theme="light" subBG />
					<Clients theme="light" />
					<Blog />
					<CallToAction theme="light" />
				</div>

				<Footer />
			</Light>
		</>
	);
}
