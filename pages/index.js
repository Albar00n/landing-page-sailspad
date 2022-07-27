import React from "react";
import Head from "next/head";
import Navbar from "../components/Navba/index";
import NAvbarF from "../components/navbar-full-menu/index"
import Slider from "../components/slider";
import Slider1 from "../components/slider1/index";
import About from "../components/About/index";
import Services from "../components/Services1/index";
import Services2 from "../components/Services2/index";
import Number from "../components/Numbers/index";
import WorksSlider from "../components/Works1-slider/index";
import Video from "../components/Video-with-testimonials/index";
import SkillsCircle from "../components/Skills-circle/index";
import Clients from "../components/Clients1";
import Blog from "../components/Blogs-two-column-slider/index";
import CallToAction from "../components/Call-to-action/index";
import Footer from "../components/Footer/index";
import Light from "../components/layout/Layout"
import appData from "../components/data/app.json"
// import styles from "../styles/Home.module.css";

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
				<title> Sailspad</title>
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
				<meta property="og:description" content="" />
				<meta name="title" content="" />
				<meta property="og:title" content="" />
				<link rel="alternate" type="application/atom+xml" href="" />
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="ar_AR" />
				<meta name="keywords" content="" />
				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Kuwait"
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
					{/* <CallToAction theme="light" /> */}
				</div>

				<Footer />
			</Light>
		</>
	);
}
