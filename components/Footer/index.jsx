/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link'
import { Formik, Form, Field } from "formik";
import appData from "../data/app.json";
import Image from "next/future/image";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
		<footer className="footer-half sub-bg section-padding pb-0">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="cont">
							<div className="logo">
								<Link href="/">
									<a>
										<Image
											src={`${appData.darkLogo}`}
											alt={`${appData.alt}`}
											title={`${appData.title}`}
											height={453}
											width={1113}
										/>
									</a>
								</Link>
							</div>
							<div className="con-info custom-font">
								<ul>
									<li>
										<Link href="mailto:support@beyin.me">
											<a title="Beyin Email">
												<span>Email : </span> Support@beyin.me
											</a>
										</Link>
									</li>
									<li>
										<span>Address : </span> FD - GF, Accelerator Building,
										Masdar City, Abu Dhabi - United Arab Emirates
									</li>
									<li>
										<span>Phone : </span> +971 52 588 6620
									</li>
								</ul>
							</div>
							<div className="social-icon">
								<h6 className="custom-font stit simple-btn">Follow Us</h6>
								<div className="social">

									<Link
										href="https://www.instagram.com/beyin.me"
										title="instagram beyin"
									>
										<a style={{ background: "none" }} title="instagram beyin">
											<i
												className="fab fa-instagram m-2"
												title="instagram beyin"
											></i>
										</a>
									</Link>

									<Link
										href="https://www.linkedin.com/company/beyin-tech"
										title="linkedin beyin"

									>
										<a
											style={{ background: "none" }}
											title="linkedin beyin"
										
										>
											<i
												className="fab fa-linkedin-in ml-3"
												title="linkedin beyin"

											></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 offset-lg-2 d-flex align-self-center">
						<div>
							<ul className="ulFooter">
								<li className="liFooter">
									<Link href="/contact">
										<a title="Sailspad Contact">Contact us</a>
									</Link>
								</li>

								<li className="liFooter">
									<Link href="/privacy">
										<a title="Privacy policy of Sailspad">Privacy policy</a>
									</Link>
								</li>

								<li className="liFooter">
									<Link href="/terms">
										<a title="Terms and conditions of Sailspad">
											Terms and conditions
										</a>
									</Link>
								</li>
								<li className="liFooter">
									<Link href="/about">
										<a title="About Sailspad"> About us</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyrights text-center">
					<p>
						© Beyin Digital Technology Limited - 2022. The trademarks, logos,
						designs, services and the content appearing herein, is exclusively
						owned by Beyin Digital Technology Limited, and/or its licensors, and
						are protected. Any unauthorized use or reproduction or distribution,
						shall attract suitable action under applicable law.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
