import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Link from 'next/link'

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
										price: "",
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
										values.price = "";
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
													<label>LOOKING FOR:</label>
													<div className="row-sm-12 mb-9">
														<div className="col-1 ">
															<div className="form-check m-1 ">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id="branding"
																/>
																<label
																	className="form-check-label ml-2 "
																	htmlFor="#branding"
																	style={{
																		color: "#545454",
																		width: "110px",
																	}}
																>
																	Branding
																</label>
															</div>

															<div className="form-check m-1">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id="web_design"
																/>
																<label
																	className="form-check-label ml-2"
																	htmlFor="#web_design"
																	style={{
																		color: "#545454",
																		width: "110px",
																	}}
																>
																	Web Design
																</label>
															</div>

															<div className="form-check m-1">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id="web_development"
																/>
																<label
																	className="form-check-label ml-2"
																	htmlFor="#web_development"
																	style={{
																		color: "#545454",
																		width: "150px",
																	}}
																>
																	Web Development
																</label>
															</div>
															<div className="form-check m-1">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id="e_commerce"
																/>
																<label
																	className="form-check-label ml-2"
																	htmlFor="#e_commerce"
																	style={{
																		color: "#545454",
																		width: "110px",
																	}}
																>
																	E-Commerce
																</label>
															</div>
														</div>
													</div>

													{/*  */}
												</div>
												<div className="form-group">
													<label htmlFor="#from_price">YOUR BUDCET: </label>
													<Field
														id="form_price"
														type="text"
														name="price"
														placeholder="ex: +$1000"
														required="required"
													/>
												</div>

												<div className="form-group">
													<labe htmlFor="#form_message">BRIEF:</labe>
													<Field
														as="textarea"
														id="form_message"
														name="message"
														placeholder="Place go into as much detail as possible"
														rows="4"
														required="required"
													/>
												</div>

												<button type="submit" className="btn-curve btn-lit">
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
								<h4 className="extra-title mb-50">Contact Info.</h4>
								<h3 className="custom-font wow" data-splitting>
									Let&apos;s Talk.
								</h3>
								<div className="item mb-40">
									<h5>
										<Link href="mailto:support@beyin.me">
											<a
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
									<a href="#0" className="icon">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="#0" className="icon">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="#0" className="icon">
										<i className="fab fa-pinterest"></i>
									</a>
									<a href="#0" className="icon">
										<i className="fab fa-behance"></i>
									</a>
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
