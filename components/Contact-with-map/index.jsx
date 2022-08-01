import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/img/Sailspad.svg'
const ContactWithMap = () => {
	const messageRef = React.useRef(null);
	function validateEmail(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}
	const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
	return (
		<>
			<section className="contact section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="form md-mb50">
								<h4 className="extra-title mb-50">Get In Touch.</h4>

								<Formik
									initialValues={{
										name: "",
										email: "",
										message: "",
										checked: "",
										phone: "",
									}}
									onSubmit={async (values) => {
										await sendMessage(500);
										alert(JSON.stringify(values, null, 2));
										// show message

										messageRef.current.innerText =
											"Your Message has been successfully sent. I will contact you soon.";
										// Reset the values
										values.name = "";
										values.email = "";
										values.message = "";
										values.checked = "";
										values.phone = "";
										// clear message
										setTimeout(() => {
											messageRef.current.innerText = "";
										}, 2000);
									}}
								>
									{({ errors, touched }) => (
										<Form id="contact-form">
											<div className="messages" ref={messageRef}></div>

											<div className="controls">
												<div className="form-group">
													<label htmlFor="#form_name">FULL NAME</label>
													<Field
														id="form_name"
														type="text"
														name="name"
														placeholder="Your Name"
														required="required"
													/>
												</div>

												<div className="form-group">
													<label htmlFor="#form_email">EMAIL ADDRESS</label>
													<Field
														validate={validateEmail}
														id="form_email"
														type="email"
														name="email"
														placeholder="Your email"
														required="required"
													/>
													{errors.email && touched.email && (
														<div>{errors.email}</div>
													)}
												</div>
												<div className="form-group">
													<label htmlFor="#form_phone">Phone</label>
													<Field
														id="form_phone"
														type="text"
														name="phone"
														placeholder="Your Phone"
														required="required"
													/>
												</div>
												<div className="form-group">
													{/*  */}
													<div id="checkboxGroup">LOOKING FOR:</div>
													<div role="group" id="checkboxGroup">
														<label
															htmlFor="#checked"
															style={{
																display: "inline-flex",
															}}
														>
															<Field
																type="checkbox"
																name="checked"
																value="Sign-up"
																className="filed"
															/>
															Sign-up support
														</label>
														<br />

														<label
															htmlFor="#checked"
															style={{
																display: "inline-flex",
															}}
														>
															<Field
																type="checkbox"
																name="checked"
																value="Platform"
																className="filed"
															/>
															Platform usage support
														</label>
														<br />
														<label
															htmlFor="#checked"
															style={{
																display: "inline-flex",
															}}
														>
															<Field
																type="checkbox"
																name="checked"
																value="WhiteLabelling"
																className="filed"
															/>
															White-labelling
														</label>
														<br />
														<label
															htmlFor="#checked"
															style={{
																display: "inline-flex",
															}}
														>
															<Field
																type="checkbox"
																name="checked"
																value="Collaboration"
																className="filed"
															/>
															Collaboration or partnership
														</label>
														<br />
														<label
															htmlFor="#checked"
															style={{

																display: "inline-flex",
															}}
														>
															<Field
																type="checkbox"
																name="checked"
																value="Other"
																className="filed"
															/>
															Other
														</label>
													</div>
													{/*  */}
												</div>
												<div className="form-group">
													<label htmlFor="#form_message">BRIEF:</label>
													<Field
														as="textarea"
														id="form_message"
														name="message"
														placeholder="Please go into as much detail as possible"
														rows="4"
														required="required"
													/>
												</div>

												<button type="submit" className="btn-curve btn-li">
													<span>Send Message</span>
												</button>
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="cont-info">
								<h4 className="extra-title">Contact Info.</h4>

								<div className="item mb-60">
									{/* <h5> */}
									<Link href="/">
										<a title="Sailspad logo">
											<Image
												src={Logo}
												alt="logo Sailspad"
												title="Sailspad logo"
												width={200}
												height={100}
											/>
										</a>
									</Link>
									{/* </h5> */}
									<h5 style={{ margin: "-1rem 0px" }}>
										by © Beyin Digital Technology Limited.
									</h5>
								</div>
								<h3 className="custom-font wow" data-splitting>
									Let&apos;s Talk.
								</h3>
								<div className="item mb-40">
									<h5>
										<Link href="mailto:support@beyin.me">
											<a
												title="Sailspad Email"
												style={{
													margin: "0px 5px",
												}}
											>
												Support@beyin.me
											</a>
										</Link>
									</h5>
									<h5>+971 52 588 6620</h5>
								</div>
								<h3 className="custom-font wow" data-splitting>
									Visit Us.
								</h3>
								<div className="item">
									<h6>
										FD - GF, Accelerator Building, Masdar City,
										<br />
										Abu Dhabi - United Arab Emirates
									</h6>
								</div>
								<div className="social mt-50">
									<Link
										href="https://www.instagram.com/beyin.me"
										title="instagram beyin"
									>
										<a className="icon">
											<i className="fab fa-instagram"></i>
										</a>
									</Link>
									<Link
										href="https://www.linkedin.com/company/beyin-tech"
										title="linkedin beyin"
									>
										<a className="icon">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="map" id="ieatmaps">
				<iframe
					src="https://earth-gl.vercel.app/"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
				></iframe>
			</div> */}

			{/* <footer className="footer-half sub-bg">
				<div className="container">
					<div className="copyrights text-center">
						<p>
							© Beyin Digital Technology Limited - 2022. The trademarks, logos,
							designs, services and the content appearing herein, is exclusively
							owned by Beyin Digital Technology Limited, and/or its licensors,
							and are protected. Any unauthorized use or reproduction or
							distribution, shall attract suitable action under applicable law.
							<a href="#0">ThemesCamp</a>.
						</p>
					</div>
				</div>
			</footer> */}
		</>
	);
};

export default ContactWithMap;
