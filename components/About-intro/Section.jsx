import React from "react";
import Split from "../Split";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/Sailspad.svg";

const AboutIntro = () => {
	return (
		<section className="intro-section section-padding pb-1">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4">
						<div className="">
							<Link href="/">
								<a>
									<Image
										src={Logo}
										alt="Sailspad"
										width={200}
										height={100}
										priority
									/>
								</a>
							</Link>
							{/* </h5> */}
							<p style={{ fontSize: "15px", margin: "-12px 0px" }}>
								by © Beyin Digital Technology Limited.
							</p>
						</div>
					</div>
					<div className="col-lg-8 offset-lg-1 col-md-8">
						<div className="text">
							<Split>
								<p></p>
							</Split>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutIntro;
