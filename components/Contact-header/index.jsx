import React from "react";
import Link from "next/link";

const AboutHeader = () => {
	return (
		<header
			className="pages-header bg-img valign parallaxie"
			style={{ backgroundImage: "url(/img/slid/headerPrivacy.png)" }}
			data-overlay-dark="5"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="cont text-center">
							{/* <h1>About Us</h1> */}
							<h2 className="custom-font">
								<span>Let&apos;s</span>Contact Us
							</h2>
							<p>
								Feel free to reach out to us if you have any concerns or
								questions!
							</p>
							<div className="path">
								<Link href="/">
									<a>Home</a>
								</Link>
								<span>/</span>
								<Link href="/contact">
									<a className="active">Contact</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AboutHeader;
