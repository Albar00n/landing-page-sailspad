/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
	React.useEffect(() => {}, []);
	return (
		<nav
			id="desktop"
			ref={nr}
			className={`navbar navbar-expand-lg change ${
				theme === "themeL" ? "light" : ""
			}`}
		>
			<div className="container">
				<Link href="/">
					<a className="logo" title="Sailspad">
						{theme ? (
							theme === "themeL" ? (
								<img
									ref={lr}
									src={`${appData.darkLogo}`}
									alt="logo Sailspad"
									title="logo Sailspad"
									height="453px"
									width="1113px"
								/>
							) : (
								<img
									ref={lr}
									src={`${appData.lightLogo}`}
									alt="logo Sailspad"
									title="logo Sailspad"
									height="453px"
									width="1113px"
								/>
							)
						) : (
							<img
								ref={lr}
								src={`${appData.lightLogo}`}
								alt="logo Sailspad"
								title="logo Sailspad"
								height="453px"
								width="1113px"
							/>
						)}
					</a>
				</Link>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item" onClick={handleDropdown}>
							<span className="nav-link">
								<Link href="/">
									<a title="Sailspad Home">Home</a>
								</Link>
							</span>
						</li>

						<li className="nav-item">
							<span className="nav-link">
								<Link href="/#about">
									<a title="Sailspad About">about</a>
								</Link>
							</span>
						</li>
						<li className="nav-item">
							<Link href="/#work">
								<a className="nav-link" title="Sailspad How it work">
									How it works
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/#features">
								<a className="nav-link" title="Sailspad Features">
									Features
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/#price">
								<a className="nav-link" title="Sailspad Price">
									Prices
								</a>
							</Link>
						</li>
					</ul>
					<div style={{ margin: "auto" }}>
						<ul className="navbar-nav ulFlex">
							<li className="nav-item">
								<Link href="https://app.sailspad.com/signup">
									<a
										className="btn-curve btn-lit mt-20 lilink"
										title="Get Started"
									>
										<span style={{ color: "#abaaaa" }}>Get Started</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="https://app.sailspad.com/login">
									<a className="nav-link" title="Login Sailspad">
										Login
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
