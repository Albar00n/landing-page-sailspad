import React from "react";
import Link from 'next/link'
import header from "../../public/img/slid/headerPrivacy.png"
const PrivacyHeader = () => {
  return (
		<header
			className="pages-header bg-img valign parallaxie"
			style={{
				backgroundImage: `url(${header.src})`,
				width: "100%",
				height: "100%",
			}}
			data-overlay-dark="5"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="cont text-center">
							<h1>PRIVACY POLICY</h1>
							<div className="path">
								<Link href="/">
									<a>Home</a>
								</Link>
								<span>/</span>
								<Link href="/privacy">
									<a className="active">Privacy</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default PrivacyHeader;
