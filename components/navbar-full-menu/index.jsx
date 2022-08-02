/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import appData from "../data/app.json";
import handleFullScreenNavbar from "../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr,nr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
		<nav>
			<div
				id="mobile"
				ref={nr}
				className={`topnav navbar navbar-expand-lg change nav-scroll ${
					theme === "themeL" ? "light" : ""
				}`}
			>
				{/* <div className="container-fluid"> */}
				<div className="container-fluid">
					<div className="logo">
						<Link href="/">
							<a className="logo" title="Sailspad">
								{theme ? (
									theme === "themeL" ? (
										<img
											ref={lr}
											src={`${appData.darkLogo}`}
											alt={`${appData.alt}`}
											title={`${appData.title}`}
											height="453px"
											width="1113px"
										/>
									) : (
										<img
											ref={lr}
											src={`${appData.lightLogo}`}
											alt={`${appData.alt}`}
											title={`${appData.title}`}
											height="453px"
											width="1113px"
										/>
									)
								) : (
									<img
										ref={lr}
										src={`${appData.lightLogo}`}
										alt={`${appData.alt}`}
										title={`${appData.title}`}
										height="453px"
										width="1113px"
									/>
								)}
							</a>
						</Link>
					</div>
					<div className="menu-icon">
						<span className="menu-text">
							<h6 className="">Menu</h6>
						</span>
						<Split>
							<span className="text" data-splitting>
								<span
									className="menu-text"
									style={{ margin: "0px 5px" }}
								></span>
							</span>
						</Split>
					</div>
				</div>
			</div>

			<div className="hamenu">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-8">
							<div className="menu-links">
								<ul className="main-menu">
									<li>
										<div className="o-hidden">
											<Link href="/">
												<a title="Sailspad Home">
													<span className="nm">0.1</span>
													Home
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="/#about">
												<a title="Sailspad About">
													<span className="nm">02</span>
													About
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="/#work">
												<a title="Sailspad How it work">
													<span className="nm">03</span>
													How it works
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="/#features">
												<a title="Sailspad Features">
													<span className="nm">04</span>
													Features
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="/#price">
												<a title="Sailspad Price">
													<span className="nm">05</span>
													Pricing
												</a>
											</Link>
										</div>
									</li>
									{/* <li>
										<div className="o-hidden">
											<Link href="/contact">
												<a title="Sailspad Contact">
													<span className="nm">06</span>
													Contact
												</a>
											</Link>
										</div>
									</li> */}
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="cont-info">
								<div className="item">
									<h6>Phone :</h6>
									<p>+971 52 588 6620</p>
								</div>
								<div className="item">
									<h6>Address :</h6>
									<p>
										FD - GF, Accelerator Building, Masdar City, Abu Dhabi -
										United Arab Emirates
									</p>
								</div>
								<div className="item">
									<h6>Email :</h6>
									<p>
										<a href="mailto:support@beyin.me" title="Beyin Email">
											Support@beyin.me
										</a>
									</p>
								</div>
								<div className="item">
									<h6>
										<Link href="/about">
											<a title="About Sailspad">About us</a>
										</Link>
									</h6>
								</div>
								{/* <span></span> */}
								<div className="item">
									<h6>
										<Link href="/contact">
											<a title="Contact Sailspad">Contact us</a>
										</Link>
									</h6>
								</div>
								{/* <span></span> */}

								<div className="item">
									<h6>
										<Link href="/privacy">
											<a title="Privacy Policy Sailspad">Privacy Policy</a>
										</Link>
									</h6>
								</div>
								{/* <span></span> */}

								<div className="item">
									<h6>
										<Link href="/terms">
											<a title="Terms & Condition Sailspad">
												Terms & Condition
											</a>
										</Link>
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
			{/*  */}

			{/*  */}
		</nav>
	);
};

export default NavbarFullMenu;
