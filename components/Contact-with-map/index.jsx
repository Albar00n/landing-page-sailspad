import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/Sailspad.svg";
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
								<h1 className="extra-title mb-50" style={{fontSize:'35px'}}>Get In Touch With us</h1>

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
													<div id="checkboxGroup">LOOKING FOR:</div>
													<span></span>
													<div role="group" id="checkboxGroup">
														<label htmlFor="#checked">
															<Field
																type="checkbox"
																name="checked"
																value="Sign-up"
																className="filed"
															/>
															Sign-up support
														</label>
														<br />

														<label htmlFor="#checked">
															<Field
																type="checkbox"
																name="checked"
																value="Platform"
																className="filed"
															/>
															Platform usage support
														</label>
														<br />
														<label htmlFor="#checked">
															<Field
																type="checkbox"
																name="checked"
																value="WhiteLabelling"
																className="filed"
															/>
															White-labelling
														</label>
														<br />
														<label htmlFor="#checked">
															<Field
																type="checkbox"
																name="checked"
																value="Collaboration"
																className="filed"
															/>
															Collaboration or partnership
														</label>
														<br />
														<label htmlFor="#checked">
															<Field
																type="checkbox"
																name="checked"
																value="Other"
																className="filed"
															/>
															Other
														</label>
													</div>
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
									<h5 style={{ margin: "-1rem auto" }}>
										by © Beyin Digital Technology Limited.
									</h5>
								</div>
								<h3 className="custom-font wow" data-splitting>
									Let&apos;s Talk.
								</h3>
								<div className="item mb-40">
									<h5>
										<Link href="mailto:support@beyin.me">
											<a title="Sailspad Email">Support@beyin.me</a>
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
								<div className="mt-50">
									<Link href="https://www.instagram.com/beyin.me">
										<a className="icon" title="instagram beyin">
											<i
												className="fab fa-instagram me-3"
												style={{ fontSize: "25px" }}
											></i>
										</a>
									</Link>
									<Link href="https://www.linkedin.com/company/beyin-tech">
										<a className="icon" title="linkedin beyin">
											<i
												className="fab fa-linkedin-in m-3"
												style={{ fontSize: "28px" }}
											></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactWithMap;
