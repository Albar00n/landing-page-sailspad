/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,

} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
  }, []);
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

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item" onClick={handleDropdown}>
							<span className="nav-link">
								<Link href="/">
									<a>Home</a>
								</Link>
							</span>
						</li>

						<li className="nav-item">
							<span className="nav-link ">
								<Link href="/projects/projects/">
									<a>about</a>
								</Link>
							</span>
						</li>
						<li className="nav-item">
							<Link href="/about">
								<a className="nav-link">How it works</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/contact">
								<a className="nav-link">Features</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/new/news">
								<a className="nav-link">Prices</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<Link href="/">
						<a className="get">Get Started</a>
					</Link>
					<Link href="/">
						<a className="log">Login</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
