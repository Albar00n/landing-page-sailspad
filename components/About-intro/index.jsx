import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
		<section className="intro-section section-padding pb-9">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<div className="htit sm-mb30">
							<h1 style={{fontSize:'35px'}}>
								We invision a future full of innovation and opportunities!
							</h1>
						</div>
					</div>
					<div className="col-lg-8 offset-lg-1 col-md-8">
						<div className="text">
							<Split>
								<p className="wow txt words chars splitting" data-splitting>
									We are a young and driven MENA Startup that is based in
									Abu-Dhabi. Our mission is to support and contribute to digital
									transformation in the Middle East. We are looking for
									visionary entrepreneurs and those with innovative startup
									ideas
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
