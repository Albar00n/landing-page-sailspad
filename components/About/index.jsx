/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image"
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
							{/* <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
								Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
								volutpat velit class aptent taciti sociosqu ad litora.
							</p> */}
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
									src="/img/slid/beyinCard.png"
									alt="With one Qr code link, you can turn your printed business
										card into an Augmented Reality business card."
									width={750}
									height={500}
									// style={{ height: "430px", width: "100%" }}
									title="AR Business Card"
									priority
								/>
							</div>
							<div className="skills-circle wow fadeInUp" data-wow-delay=".8">
								<div className="it m-1">
									{/* <div className="skill">
										<CircularProgressbar
											value={90}
											className="custom-font"
											strokeWidth={2}
											text={`${90}%`}
											styles={cpStyle}
										/>
									</div> */}
									{/* <div className="cont"> */}
									<h1 style={{ fontSize: "17px" }}>
										With one Qr code link, you can turn your printed business
										card into an Augmented Reality business card.
									</h1>
									{/* <h6>Consulting</h6> */}
									{/* </div> */}
								</div>
								{/* <div className="item"> */}
								{/* <div className="skill">
										<CircularProgressbar
											value={75}
											strokeWidth={2}
											className="custom-font"
											text={`${75}%`}
											styles={cpStyle}
										/>
									</div> */}
								{/* <div className="cont"> */}
								{/* <span>App</span> */}
								{/* <h6>Development</h6> */}
								{/* </div> */}
								{/* </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs2;
