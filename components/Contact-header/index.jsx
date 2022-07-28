
import React from "react";

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
								<span>Let&apos;s</span>Talk About Your project.
							</h2>
							<p>
								 Feel free to ask me any question or let&apos;s do to talk //
								about our future collaboration.
							</p>
							<div className="path">
								<a href="#0">Home</a>
								<span>/</span>
								<a href="#0" className="active">
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AboutHeader;

