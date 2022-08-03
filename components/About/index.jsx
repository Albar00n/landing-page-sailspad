/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "../ImageComponent/ImageComponent";
import BeyinCard from "../../public/img/slid/beyinCard.png";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutUs2 = ({ skillsTheme }) => {
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
								<h6>About</h6>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<Split>
								<h3
									className="co-tit custom-font wow words chars splitting"
									data-splitting
								>
									Get the most effective business card ever.
								</h3>
							</Split>
							<p className="wow fadeInUp" data-wow-delay=".4s">
								Get ahead of the curve with Sailspad. create Augmented Reality
								business cards for you and your team with our platform and take
								your networking success to the next level. The Sailspad platform
								is easy, fast, and reliable.
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
									src={BeyinCard}
									alt="With one Qr code link, you can turn your printed business
										card into an Augmented Reality business card."
									width={550}
									height={350}
									title="AR Business Card"
								/>
							</div>
							<div
								className="skills-circle wow fadeInUp"
								data-wow-delay=".8"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<div
									className="it m-1"
									
								>
									<h1 className="h11">
										With one Qr code link, you can turn your printed business
										card into an Augmented Reality business card.
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

export default AboutUs2;
