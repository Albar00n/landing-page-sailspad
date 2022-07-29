import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
		<section className="services section-padding sub-bg" id="work">
			<div className="container">
				<div className="sec-head custom-font tr-head">
					<h6>Three Easy steps!</h6>
					<h3 className="gray">How it works</h3>
					<span className="tbg">Sailspad</span>
				</div>
				<div className="row">
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
						<div className="step-item xtop">
							<span className="icon pe-7s-gleam"></span>
							<h6>Upload your business card details</h6>
							<p>
								then use the link generated to create a QR code, add the QR code
								to your business card and upload an image of it.
							</p>
						</div>
					</div>
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
						<div className="step-item xcolor">
							<span className="icon pe-7s-phone"></span>
							<h6>scan the QR code</h6>
							<p>
								Scan the QR code from the business card or tab if you use an NFC
								card to access the link to AR.
							</p>
						</div>
					</div>
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
						<div className="step-item xbottom">
							<span className="icon pe-7s-magic-wand"></span>
							<h6>Enjoy the amazing results!</h6>
							<p>
								Always leave a memorable impression with Sailspad! the most
								innovative VR business card solution
							</p>
						</div>
					</div>
				</div>
				<div className="smore custom-font">
					<Link href="https://app.sailspad.com/signup">
						<a>Get started</a>
					</Link>
					<i className="fas fa-long-arrow-alt-right"></i>
				</div>
			</div>
		</section>
	);
};

export default Services3;
