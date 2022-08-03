import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
		<section className="services" id="features">
			<div className="container">
				<div className="sec-head custom-font text-center">
					<h6 className="wow fadeIn" data-wow-delay=".5s">
						Best Features
					</h6>
					<Split>
						<h3 className="wow words chars splitting gray" data-splitting>
							Features
						</h3>
					</Split>
					<span className="tbg">Features</span>
				</div>
				<div className="row">
					<div
						style={{ background: "#eff2f3" }}
						className="col-lg-3 col-md-6 item-box wow fadeInLeft"
						data-wow-delay=".5s"
					>
						<span className="icon pe-7s-paint-bucket"></span>
						<h6>Keep a lasting impression</h6>
						<p>
							Be memorable and leave a Business card that can be experienced
							time and again!
						</p>
					</div>
					<div
						className="col-lg-3 col-md-6 item-box wow fadeInLeft"
						data-wow-delay=".7s"
					>
						<span className="icon pe-7s-phone"></span>
						<h6>
							Unlimited copies &amp; <br /> views
						</h6>
						<p>Distribute as many copies as you need, no strings attached!</p>
					</div>
					<div
						className="col-lg-3 col-md-6 item-box wow fadeInLeft"
						data-wow-delay=".9s"
					>
						<span className="icon pe-7s-display1"></span>
						<h6>Works on all Smart devices</h6>
						<p>
							Sailspad works on all popular smart devices without the need for
							an app!
						</p>
					</div>
					<div
						className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
						data-wow-delay=".3s"
						style={{ backgroundImage: "url(/img/slid/beyinH3.webp)" }}
					>
						<h4 className="custom-font">Grow with Sailspad</h4>
						<Link
							href="https://app.sailspad.com/signup"
							title="sign up sailspad"
						>
							<a className="btn-curve btn-bord btn-lit mt-40">
								<span>Get started</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="half-bg bottom"></div>
		</section>
	);
};

export default Services1;
