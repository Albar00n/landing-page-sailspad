
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "../ImageComponent/ImageComponent";
import BeyinH11 from "../../public/img/slid/beyinH11.webp";
import Split from "../Split";
import "react-circular-progressbar/dist/styles.css";



const SectionAbout = ({ skillsTheme }) => {
	const cpStyle = {
		path: {
			stroke: "#0DA6F5",
		},
		trail: {
			stroke: skillsTheme
				? skillsTheme == "dark"
					? "#0f1218"
					: "#e5e5e5"
				: "",
		},
		text: {
			fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
			fontSize: "16px",
		},
	};
	return (
		<section className="about section-padding" id="about">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 valign">
						<div className="content">
							<div className="sub-title">
								<h6>Customization</h6>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<Split>
								<h3
									className="co-tit custom-font wow words chars splitting"
									data-splitting
								>
									Customise your digital businesses card landing page the to
									match your branding.
								</h3>
							</Split>
							<p className="wow fadeInUp" data-wow-delay=".4s">
								Sailspad platform allows you to customise your digital landing
								page for your Sailspad business card, you can upload your own
								background and company logo before accessing your AR business
								card or profile.
							</p>
							<Split>
								<Link href="https://app.sailspad.com/signup">
									<a
										title="sign up sailspad"
										className="words chars splitting simple-btn custom-font mt-30 wow"
										data-splitting
									>
										<span>Get started</span>
									</a>
								</Link>
							</Split>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="blc-img">
							<div className="bimg wow imago">
								<Image
									src={BeyinH11}
									alt="With one Qr code link, you can turn your printed business
										card into an Augmented Reality business card."
									width={560}
									height={500}
									title="AR Business Card"
								/>
							</div>
							<div
								className=" wow fadeInUp"
								data-wow-delay=".8"
								style={{ position: "relative" }}
							>
								<div
									className=""
									style={{
										position: "absolute",
										bottom: "1px",
										left: "90px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										height: "9vh",
										background: "#f7f7f7",
										borderRadius: "10px",
									}}
								>
									<h1 className="h11 p-2">
										Create a professional online pressence to your digital
										business card.
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionAbout;
