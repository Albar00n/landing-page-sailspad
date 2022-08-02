import React from "react";
import Split from "../Split";

const AboutIntro = () => {
	return (
		<section className="intro-section section-padding pb-9">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="htit sm-mb30 md-mb30">
							<h1 className="abo">
								We are transforming business networking/communication into a
								metaverse accessible by all.
							</h1>
						</div>
					</div>
					<div className="col-lg-7 offset-lg-1 col-md-9">
						<div className="text">
							<Split>
								<p className="wow txt words chars splitting" data-splitting>
									Sailspad is a business networking and communication platform
									developed by Beyin Digital Technology Limited. Sailspad
									empowers businessmen and entrepreneurs with innovative
									solutions that allow for better networking and communication
									solutions by extending their business cards and other media
									with immersive augmented reality experiences.
								</p>
							</Split>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutIntro;
