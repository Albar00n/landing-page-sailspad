import React from "react";
import Head from "next/head";
import ContactHeader from "../components/Contact-header";
import ContactWithMap from "../components/Contact-with-map";
import AllNavbar from "../components/allNavbar/AllNav";
import Footer from "../components/Footer/index"


const Contact = () => {
	const fixedHeader = React.useRef(null);
	const MainContent = React.useRef(null);


	React.useEffect(() => {
		setInterval(() => {
			if (fixedHeader.current) {
				var slidHeight = fixedHeader.current.offsetHeight;
			}
			if (MainContent.current) {
				MainContent.current.style.marginTop = slidHeight + "px";
			}
		}, 1000);

	}, []);
	return (
		<>
			<Head>
				<title> Contact us | Sailspad</title>

				<meta property="og:locale" content="ar_AR" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="robots"
					content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
				/>
				<meta
					name="description"
					content="Sailspad support team is ready to help you with all of your concerns, please provide your information and send us a message and we will get back to you soon."
				/>

				<meta name="title" content="Contact Sailspad Technologies" />

				<link rel="alternate" type="application/atom+xml" href="" />
				<meta property="og:type" content="article" />
			</Head>
			<>
				<AllNavbar />
				<ContactHeader sliderRef={fixedHeader} />
				<div className="main-content" ref={MainContent}>
					<ContactWithMap />
				</div>
				<Footer />
			</>
		</>
	);
};

export default Contact;
