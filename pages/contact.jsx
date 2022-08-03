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
				<title>Sailspad - Contact us </title>

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
				<meta
					name="og:description"
					content="SailsPad is an AR Platform that allows entrepreneurs to create AR business cards in a short period of time for multiple users, which improves business networking performance and results. Sailspad gives a lasting impression on everyone who uses your printed business card, Sailspad is affordable, reliable, and able to manage a huge number of cards on one Dashboard."
				/>

				<meta name="title" content="Contact Sailspad Technologies" />
				<meta
					name="og:title"
					content="Sailspad Metaverse AR business card platform"
				/>
				<meta
					property="og:url"
					content="https://landing-page-sailspad.vercel.app/contact"
				/>
				<meta
					name="og:image"
					content="https://landing-page-sailspad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbeyinCard.fb6fe724.png&w=1200&q=75"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Contact us | Sailspad",
							url: "https://landing-page-sailspad.vercel.app/contact",
							logo: "https://landing-page-sailspad.vercel.app/Sailspad.png",
						}),
					}}
				></script>
				<link
					rel="canonical"
					href="https://landing-page-sailspad.vercel.app/contact"
				/>
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
