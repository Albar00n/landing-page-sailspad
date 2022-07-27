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
							<a className="logo">
								{theme ? (
									theme === "themeL" ? (
										<img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
									) : (
										<img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
									)
								) : (
									<img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
								)}
							</a>
						</Link>
					</div>
					<div className="menu-icon">
						<span className="icon">
							<i></i>
							<i></i>
						</span>
						<Split>
							<span className="text" data-splitting>
								<span className="menu-text" style={{ margin: "0px 5px" }}>
									Menu
								</span>
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
												<a>
													<span className="nm">0.1</span>Home
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="#about">
												<a>
													<span className="nm">02</span>About us
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="#work">
												<a>
													<span className="nm">03</span>How it work
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="#features">
												<a>
													<span className="nm">04</span>Features
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="#price">
												<a>
													<span className="nm">05</span>Price
												</a>
											</Link>
										</div>
									</li>
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
										<a href="mailto:support@beyin.me">Support@beyin.me</a>
									</p>
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
