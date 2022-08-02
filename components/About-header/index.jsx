import React from "react";
import Link from "next/link";
import beyinH1 from "../../public/img/slid/beyinH1.png";
const AboutHeader = () => {
	return (
		<header
			className="pages-header bg-img valign parallaxie"
			style={{
				backgroundImage: `url(${beyinH1.src})`,
				width: "100%",
				height: "100%",
			}}
			data-overlay-dark="5"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="cont text-center">
							<h1>About Us</h1>
							<div className="path">
								<Link href="/">
									<a title="Sailspad Home">Home</a>
								</Link>
								<span>/</span>
								<Link href="/about">
									<a className="active" title="Sailspad About">
										About Us
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AboutHeader;
