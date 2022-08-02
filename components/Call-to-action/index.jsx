import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img, theme, subBG }) => {
	return (
		<section
			className={`call-action section-padding  ${subBG ? "sub-bg" : ""} bg-img`}
		>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-lg-9">
						<div className="content sm-mb30">
							<Split>
								<h6 className="wow words chars splitting" data-splitting>
									START USING SAILSPAD
								</h6>
								<div>
									<h2 className="wow words custom-font chars splitting h2Call">
										Be<span></span> on <span></span>the <span></span>leading{" "}
										<span></span>edge
									</h2>
									<h1 className="gray">OF INNOVATION</h1>
								</div>
							</Split>
						</div>
					</div>

					<div className="col-md-4 col-lg-3 valign">
						<Link
							href="https://app.sailspad.com/signup"
							title="sign up sailspad"
						>
							<a
								className={`btn-curve ${
									theme == "light" ? "btn-blc" : "btn-lit"
								} wow fadeInUp`}
								data-wow-delay=".5s"
							>
								<span>Get Started</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
