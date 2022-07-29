/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const PrivacyDetails = () => {
	function validateEmail(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}
	const sendComment = (ms) => new Promise((r) => setTimeout(r, ms));
	return (
		<section className="blog-pg single section-padding pt-0">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-11">
						<div className="post">
							<div className="img">
								{/* <img src="/img/blog/single.jpg" alt="" /> */}
							</div>
							<div className="content pt-20">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="cont">
											<div className="spacial">
												<p>
													This notice describes the privacy policy (“Privacy
													Policy” or “Policy”) of www.beyin.me/ which is
													operated by Beyin Digital Technology Limited, an
													entity having its registered office at FD - Ground
													Floor, Accelerator Building, Masdar City, Abu Dhabi,
													United Arab Emirates (hereinafter referred to the
													“Company” or “Beyin” or “us” or “our” or “we” or
													“Site” or “Website”). In this Policy, you shall be
													referred as “you” or “your”, “user” or “users”.
												</p>
											</div>
											<p>
												This Privacy Policy explains what information of yours
												will be collected by us when you access the Website or
												when you make purchases on the Website, or use our
												services, how the information will be used, and how you
												can control the collection, correction, and/or deletion
												of the information. We will not knowingly use or share
												your information with anyone, except as described in
												this Privacy Policy. The use of information collected
												through our Site shall be limited to the purposes
												described under this Privacy Policy and our Terms &
												Conditions.
											</p>
											<p>
												By visiting our Site or providing your personal
												information to us or placing your order with us, you are
												accepting and consenting to the practices described in
												this policy. Please note that this includes consenting
												to the processing of any personal information that you
												provide, as described below.
											</p>
											<p>
												IF YOU DO NOT AGREE WITH THESE PRACTICES, PLEASE DO NOT
												USE THE SERVICES OR THE WEBSITE OR PROVIDE US WITH ANY
												OF YOUR PERSONAL INFORMATION.
											</p>

											<h6>-TABLE OF CONTENT</h6>
											<ul>
												<li>
													<span>01</span> What information about the users do we
													collect?
												</li>
												<li>
													<span>02</span> Lawful basis for processing personal
													information
												</li>
												<li>
													<span>03</span> How do we use this information?
												</li>
												<li>
													<span>04</span> Deleting your information
												</li>
												<li>
													<span>05</span> Cookies and Similar Technologies
												</li>
												<li>
													<span>06</span> Sharing of information
												</li>
												<li>
													<span>07</span> Storage and Security of Information
												</li>
												<li>
													<span>08</span> Links to third party sites
												</li>
												<li>
													<span>09</span> Rights of EU, EEA and UK users/service
													providers
												</li>
												<li>
													<span>10</span> California Resident Rights
												</li>
												<li>
													<span>11</span> How do we respond to legal requests?
												</li>
												<li>
													<span>12</span> Children Privacy
												</li>
												<li>
													<span>13</span> How do I withdraw my consent?
												</li>
												<li>
													<span>14</span> Governing law and Dispute Resolution
												</li>
												<li>
													<span>15</span> Do you have any questions or concerns
													about this privacy policy?
												</li>
												<li>
													<span>16</span> Welcoming of suggestions
												</li>
											</ul>
											<div className="spacial" style={{ margin: "50px 0px" }}>
												<ol>
													<li className="ol">
														<h5>
															What information about the users do we collect?
														</h5>
														<ol>
															<li className="privacy-p liA">
																<b className="black">
																	Information that you provide us:
																</b>
																We collect the information you provide when you
																use our services, including without limitation,
																when you register for an account, browse our
																website, avail any of our services, place any
																order, make the payment, engage with us through
																any social media platform, signup for
																newsletter, share your feedback, submit a
																complaint, communicate or interact with us in
																any manner. This can include Sensitive Personal
																Data, Personally Identifiable Information (PII)
																as well as non-PII information.
																<span className="underline">
																	The examples include your full name, address,
																	profile details, business details, email
																	address, contact number, content that you
																	submit, links that you share, your queries
																	etc.
																</span>
																We also collect information about how you use
																our services, such as the content you engage
																with or the frequency and duration of your
																activities
															</li>
															<li className="privacy-p liA">
																<b className="black">
																	Information that we collect when you use the
																	Website:
																</b>
																We also collect information while you access,
																browse, view or otherwise use the Website. In
																other words, when you access the
																<span className="underline">Site</span> we are
																aware of your usage of the Site , and gather,
																collect and record the information relating to
																such usage, including geo-location information,
																IP address, device and connection information,
																browser information and web-log information.
															</li>
															<li className="privacy-p liA">
																<b className="black">
																	Information that we collect from third party
																	sources:
																</b>
																You can engage with us through social media
																websites or mobile applications. When you engage
																with us through social media sites, such as
																Instagram, you allow us to have access to
																certain information from your social media
																profile based upon your privacy preference
																settings on such platform
															</li>
															<li className="privacy-p liA">
																<b className="black">Camera Access:</b>
																In order to view Augmented Reality (AR), the
																users should give their camera access.
															</li>
															<li className="privacy-p liA">
																<b className="black"> Payment Method:</b>
																We will also collect your payment method, so as
																to provide you a quicker access. We share this
																data with our{" "}
																<span className="underline">third party</span>
																payment gateway service providers.
															</li>
															<li className="privacy-p liA">
																<b className="black"> Good Judgment:</b>
																We suggest that you exercise good judgment and
																caution while providing your personal
																information.
															</li>
														</ol>
													</li>
													<li className="ol">
														<h5>
															What is the GDPR Privacy legal/lawful basis for
															which we use your personal information?
														</h5>
														<p>
															For the purposes of the GDPR (General Data
															Protection Regulation), you hereby acknowledge
															that all processing of your personal information
															will be justified by a lawful ground for
															processing. In the majority of cases, processing
															will be justified on the basis that:
														</p>
														<ol>
															<li className="privacy-p liNum">
																<b className="black"> Consent:</b>
																You have given your consent for processing
																personal data for one or more specific purposes.
															</li>
															<li className="privacy-p liNum">
																<b className="black">
																	Performance of a contract:
																</b>
																Provision of personal data is necessary for the
																performance of an agreement with you and/or for
																any pre-contractual obligations thereof.
															</li>
															<li className="privacy-p liNum">
																<b className="black"> Legal obligations: </b>
																Processing personal data is necessary for
																compliance with a legal obligation to which we
																are subject.
															</li>
															<li className="privacy-p liNum">
																<b className="black"> Vital interests: </b>
																Processing personal data is necessary in order
																to protect your vital interests or of another
																natural person.
															</li>
															<li className="privacy-p liNum">
																<b className="black"> Public interests: </b>
																Processing personal data is related to a task
																that is carried out in the public interest or in
																the exercise of official authority vested in the
																Company.
															</li>
															<li className="privacy-p liNum">
																<b className="black">Legitimate interests: </b>
																Processing personal data is necessary for the
																purposes of the legitimate interests pursued by
																the Company.
															</li>
														</ol>
														<div className="quotes text-center">
															<p>
																In any case, we will gladly help to clarify the
																specific legal basis that applies to the
																processing, and in particular whether the
																provision of personal data is a statutory or
																contractual requirement, or a requirement
																necessary to enter into a contract.{" "}
																<span className="underline">
																	Feel free to contact us for this purpose at
																	<Link href="mailto:support@beyin.me">
																		<a>
																			<span>Email : </span> Support@beyin.me
																		</a>
																	</Link>
																</span>
															</p>
														</div>
													</li>
													<li className="ol">
														<h5> How do we use this information?</h5>
														<p>
															We use all of the information we have to help us
															provide, support and improve our services and to
															facilitate the delivery of the products and
															services that you order. We use the information
															collected from you for the following{" "}
															<span className="underline">purposes:-</span>
														</p>
														<ol>
															<li className="privacy-p liA">
																To create and update your account;
															</li>
															<li className="privacy-p liA">
																To deliver the business cards that you order to
																your delivery address;
															</li>
															<li className="privacy-p liA">
																To render and provide AR and VR services, and
																other services that you request from us;
															</li>
															<li className="privacy-p liA">
																To process your refund or replacement requests,
																if you are eligible for one;
															</li>
															<li className="privacy-p liA">
																To assess queries, requirements, and process
																requests for products and services;
															</li>
															<li className="privacy-p liA">
																To enhance your online shopping experience,
																including as a way to recognize you and welcome
																you to the Site
															</li>
															<li className="privacy-p liA">
																To improve our sites, products/services,
																customer service, and customer shopping
																experience.
															</li>
															<li className="privacy-p liA">
																To be able to deliver our services, personalize
																content, and make suggestions for you by using
																this information to understand how you use and
																interact with our services and the people or
																things you’re connected to and interested in on
																and off our services.
															</li>
															<li className="privacy-p liA">
																We use your information to send you marketing
																communications, newsletter, communicate with you
																about our services and let you know about our
																policies and terms. We also use your information
																to respond to you when you contact us
															</li>
															<li className="privacy-p liA">
																We use the information we have to help verify
																accounts and activity, and to promote safety and
																security on of our services, such as by
																investigating suspicious activity or violations
																of our terms or policies.
															</li>
															<li className="privacy-p liA">
																We also use your information to ensure our
																services are working as intended, such as
																tracking outages or troubleshooting issues that
																you report to us. And we use your information to
																make improvements to our services.
															</li>
															<li className="privacy-p liA">
																We use information to help improve the safety
																and reliability of our services. This includes
																detecting, preventing, and responding to fraud,
																abuse, security risks, and technical issues that
																could harm Beyin, our users, or the public.
															</li>
															<li className="privacy-p liA">
																To respond to summons, court orders, directions
																or other judicial processes.
															</li>
															<li className="privacy-p liA">
																To provide information to law enforcement
																agencies or in connection with an investigation
																on matters related to public safety.
															</li>
														</ol>
													</li>
													<li className="ol">
														<h5> Deleting your information</h5>
														<p>
															Your information, account and the feedback that
															you share on our platform is yours. You can at any
															time delete the same. However, you acknowledge
															that we may retain some of the information so
															deleted for a reasonable period of time in order
															to comply with legal requests. You can request us
															to delete your information by writing to us at
															<Link href="mailto:support@beyin.me">
																<a
																	style={{
																		margin: "0px 10px",
																	}}
																>
																	Support@beyin.me
																</a>
															</Link>
														</p>
													</li>
													<li className="ol">
														<h5> Cookies and Similar Technologies</h5>
														<p>
															Cookies are bits of electronic information that a
															website may transfer to a visitor’s computer to
															identify specific information about the visitor’s
															visits to other website. We may use automated
															technologies including the use of web server logs
															to collect IP addresses, device details, cookies
															and web beacons. The Website uses a browser
															feature known as a cookie, which assigns a unique
															identification to your computer. However, in case
															you do not wish for us to collect such
															information, simply change the cookie settings on
															your web browser. For more information, please
															refer to our <b> Cookie Policy</b> available on
															our website.
														</p>
													</li>
													<li className="ol">
														<h5> Sharing of Information</h5>
														<ol style={{ listStyleType: "lower-alpha" }}>
															<li className="privacy-p liA">
																Whenever you post or share the feedback on the
																Site, such feedback, including your name is
																publicly viewable by the users and viewers of
																Site.{" "}
															</li>
															<li className="privacy-p liA">
																We share your personal as well as non-personal
																information with our third-party hosting service
																providers namely, Heroku
																<Link href="https://www.heroku.com/">
																	<a className="linkPrivacy">
																		(www.heroku.com)
																	</a>
																</Link>
																and Vercel
																<Link href="https://vercel.com/">
																	<a className="linkPrivacy">
																		(www.vercel.com)
																	</a>
																</Link>
															</li>
															<li className="privacy-p liA">
																Since we use the services of third-party service
																providers, therefore, we share your personal
																information with our third-party service
																providers and will also share the some of your
																information with the third-party payment gateway
																service providers, namely, Stripe
																<Link href="https://stripe.com/ae">
																	<a className="linkPrivacy">
																		(www.stripe.com)
																	</a>
																</Link>
																and Mamo Pay
																<Link href="https://www.mamopay.com/">
																	<a className="linkPrivacy">
																		(www.mamopay.com).
																	</a>
																</Link>
															</li>
															<li className="privacy-p liA">
																We keep your information safe and do not share
																your information with any other third party.
																However, if we merge with or are acquired by
																another company or we sell our Website or
																business unit, or if all or a substantial
																portion of our assets are acquired by another
																company, in those cases, your information will
																likely be one of the assets that would be
																transferred
															</li>
															<li className="privacy-p liA">
																We may also share your information in response
																to legal request. Please refer to
																<b>Section 12.</b>
															</li>
														</ol>
													</li>
													<li className="ol">
														<h5> Storage and Security of Information</h5>
														<ol>
															<li className="privacy-p liA">
																<b className="black"> Storage:</b>
																Your data is stored through data storage,
																databases and servers of Heroku
																<Link href="https://www.heroku.com/">
																	<a className="linkPrivacy">
																		(www.heroku.com/)
																	</a>
																</Link>
																and Vercel
																<Link href="https://vercel.com/">
																	<a className="linkPrivacy">
																		(www.vercel.com/)
																	</a>
																</Link>{" "}
																. We also store some of the information
																collected by us on our servers and do not share
																it with any third party, except for the limited
																purposes as mentioned in the Section 6. The
																servers and databases in which information may
																be stored may be located outside the country
																from which you accessed this website and in a
																country where the data protection and other laws
																may differ (and be less stringent) from your
																country of residence.
																<span className="underline">
																	You hereby consent to any such cross-border
																	transfer of your personal information
																</span>
															</li>
															<li className="privacy-p liA">
																<b className="black"> Retention:</b>
																Personal information that we collect, access or
																process will be retained only so long as
																necessary for the fulfillment of the purposes
																for which it was collected, as necessary for our
																legitimate business purposes, or as required or
																authorized by law. Personal information that is
																no longer required to fulfil the identified
																purposes will be destroyed, erased or made
																de-identified or anonymous
															</li>
															<li className="privacy-p liA">
																<b className="black"> Security:</b>
																We, Heroku, Vercel, Stripe and Mamo Pay employ
																reasonable security practices to ensure that the
																information is safe and secure with us. However,
																no information on the internet is 100% safe, and
																you accept and acknowledge such risk. Also, we
																will disclose the information so collected for
																limited purposes as mentioned in this Privacy
																Policy.
															</li>
														</ol>
													</li>
													<li className="ol">
														<h5> Links to other sites</h5>
														<p>
															The Website may contain links to third-party
															websites, service providers and online services
															that are not owned or controlled by us, such as
															third-party payment gateway service provider. We
															have no control over, and assume no responsibility
															for such websites and online services. Be aware
															when you leave the Website; we suggest you read
															the terms and privacy policy of each third-party
															websites, service provider and online service that
															you visit
														</p>
													</li>
													<li className="ol">
														<h5> Rights of EU, EEA and UK users</h5>
														<p>
															This section of the Policy supplements the other
															provisions of this Privacy Policy, and applies to
															you if you are in the EU, the European Economic
															Area (EEA) or UK. For the purposes of GDPR,
															<b> Beyin</b>
															is the data controller of your data collected by
															us. For the purposes of GDPR, your{" "}
															<b>DATA CONTROLLER</b>
															is <b>Beyin Digital Technology Limited</b>, an
															entity having its registered office at{" "}
															<b>
																{" "}
																FD - Ground Floor, Accelerator Building, Masdar
																City, Abu Dhabi, United Arab Emirates.
															</b>
														</p>
														<h6>
															ALL YOUR USER INFORMATION WILL BE COLLECTED,
															STORED, PROCESSED AND SHARED STRICTLY IN
															ACCORDANCE, IN LINE AND FULL COMPLIANCE WITH
															REGULATION (EU) 2016/679 (SIMPLY CALLED “GDPR”)
															AND DIRECTIVE 2002/58/EC (SIMPLY CALLED “E-PRIVACY
															DIRECTIVE, 2002”) OF THE EUROPEAN PARLIAMENT AND
															OF THE COUNCIL (HERINAFTER COLLECTIVELY REFERRED
															TO AS THE “EU REGULATION”).
														</h6>
														<p>
															Under applicable EU regulation, you have the
															following rights in respect of your personal
															information:
														</p>
														<ul>
															<li className="privacy-p liNum">
																<b className="black">
																	Right to obtain information:
																</b>
																to obtain information about how and on what
																basis your personal information is processed and
																to obtain a copy;
															</li>
															<li className="privacy-p liNum">
																<b className="black">
																	Right to rectification:{" "}
																</b>
																You have the right to have any incomplete or
																inaccurate information we hold about you
																rectified and corrected.
															</li>
															<li className="privacy-p liNum">
																<b className="black">Right of Erasure: </b>
																to erase your personal information in limited
																circumstances where (a) you believe that it is
																no longer necessary for us to hold your personal
																information; (b) we are processing your personal
																information on the basis of legitimate interests
																and you object to such processing, and we cannot
																demonstrate an overriding legitimate ground for
																the processing; (c) where you have provided your
																personal information to us with your consent and
																you wish to withdraw your consent and there is
																no other ground under which we can process your
																personal information; and (d) where you believe
																the personal information we hold about you is
																being unlawfully processed by us;
															</li>
															<li className="privacy-p liNum">
																<b className="black">Right of restriction: </b>
																to restrict processing of your personal
																information where: (a) the accuracy of the
																personal information is contested; (b) the
																processing is unlawful but you object to the
																erasure of the personal information; (c) we no
																longer require the personal information for the
																purposes for which it was collected, but it is
																required for the establishment, exercise or
																defence of a legal claim or (d) you have
																objected to us processing your personal
																information based on our legitimate interests
																and we are considering your objection;
															</li>
															<li className="privacy-p liNum">
																<b className="black">Right to object: </b>
																to object to decisions which are based solely on
																automated processing or profiling;
															</li>
															<li className="privacy-p liNum">
																<b className="black">
																	Right to ask for a copy:{" "}
																</b>
																where you have provided your personal
																information to us with your consent, to ask us
																for a copy of this data in a structured,
																machine-readable format and to ask us to share
																(port) this data to another data controller; or
																to obtain a copy of or access to safeguards
																under which your personal information is
																transferred outside of the EEA.
															</li>
															<li className="privacy-p liNum">
																<b className="black">
																	Right to withdraw your consent.{" "}
																</b>
																You have the right to withdraw your consent on
																using your personal data. If you withdraw your
																consent, we may not be able to provide you with
																access to certain specific functionalities of
																our services.
															</li>
															<li className="privacy-p liNum">
																<b className="black">
																	Request the transfer of your Personal Data
																</b>
																We will provide to you, or to a third-party you
																have chosen, your personal data in a structured,
																commonly used, machine-readable format. Please
																note that this right only applies to automated
																information which you initially provided consent
																for us to use or where we used the information
																to perform a contract with you.
															</li>
														</ul>
														<div className="quotes text-center">
															<p>
																Under certain circumstances, you may have the
																right to object, on grounds relating to your
																particular situation, to the processing of your
																personal data by us and we may be required to no
																longer process your personal data. Moreover, if
																your personal data is processed for direct
																marketing purposes, you have the right to object
																at any time to the processing of personal data
																concerning you for such marketing, which
																includes profiling to the extent that it is
																related to such direct marketing. In this case
																your personal data will no longer be processed
																for such purposes by us.
															</p>
														</div>
														<div className="quotes text-center">
															<span>
																In addition to the above, you have the right to
																lodge a complaint with a supervisory authority
																for data protection. Please note that the right
																of access and the right to erasure do not
																constitute absolute rights and the interests of
																other individuals may restrict your right of
																access or erase in accordance with local laws .
																We will ask you for additional data to confirm
																your identity and for security purposes, before
																disclosing data requested by you. We reserve the
																right to charge a fee where permitted by law. We
																will decline to process requests that jeopardize
																the privacy of others, are extremely
																impractical, or would cause us to take any
																action that is not permissible under applicable
																laws. Additionally, as permitted by applicable
																laws, we will retain where necessary certain
																personal information for a limited period of
																time for record-keeping, accounting and fraud
																prevention purposes.
															</span>
														</div>
														<p>
															To make such requests, please contact us at
															<Link href="mailto:support@beyin.me">
																<a
																	style={{
																		margin: "0px 5px",
																	}}
																>
																	Support@beyin.me
																</a>
															</Link>
														</p>
													</li>
													<li className="ol">
														<h5>California Resident Rights</h5>
														<p>
															This section of the Policy applies to you, if you
															are a California resident, as per{" "}
															<b>California Consumer Policy Act, 2018</b>{" "}
															(simply called <b>“CCPA”</b>) and{" "}
															<b>California Online Privacy Protection Act</b>{" "}
															(simply called <b>“CCPA”</b>). This privacy notice
															section for California residents supplements the
															information contained in our Privacy Policy and it
															applies solely to all visitors, users, and others
															who reside in the State of California
														</p>
														<p>Categories of Personal Information Collected</p>
														<p>
															We collect information that identifies, relates
															to, describes, references, is capable of being
															associated with, or could reasonably be linked,
															directly or indirectly, with a particular consumer
															or device. The following is a list of categories
															of personal information which we may collect or
															may have been collected from California residents
															within the last twelve (12) months.
														</p>
														<p>
															Please note that the categories and examples
															provided in the list below are those defined in
															the CCPA. This does not mean that all examples of
															that category of personal information were in fact
															collected by us, but reflects our good faith
															belief to the best of our knowledge that some of
															that information from the applicable category may
															be and may have been collected. For example,
															certain categories of personal information would
															only be collected if you provided such personal
															information directly to us.
														</p>
														<ul>
															<li className="privacy-p liNum">
																<b>Category A: Identifiers</b>
															</li>
															<p>
																<b>Examples: </b>A real name, alias, postal
																address, unique personal identifier, online
																identifier, Internet Protocol address, email
																address, account name, drivers license number,
																passport number, or other similar identifiers.
																<br />
																Collected: Yes
															</p>
															<li className="privacy-p liNum">
																<b>
																	Category B: Personal information categories
																	listed in the California Customer Records
																	statute (Cal. Civ. Code § 1798.80(e)).
																</b>
																<p>
																	<b>Examples: </b>A name, signature, Social
																	Security number, physical characteristics or
																	description, address, telephone number,
																	passport number, drivers license or state
																	identification card number, insurance policy
																	number, education, employment, employment
																	history, bank account number, credit card
																	number, debit card number, or any other
																	financial information, medical information, or
																	health insurance information. Some personal
																	information included in this category may
																	overlap with other categories.
																	<br />
																	Collected: Yes.
																</p>
															</li>
															<li className="privacy-p liNum">
																<b>
																	Category C: Protected classification
																	characteristics under California or federal
																	law.
																</b>
															</li>
															<p>
																<b>Examples: </b>
																Age (40 years or older), race, color, ancestry,
																national origin, citizenship, religion or creed,
																marital status, medical condition, physical or
																mental disability, sex (including gender, gender
																identity, gender expression, pregnancy or
																childbirth and related medical conditions),
																sexual orientation, veteran or military status,
																genetic information (including familial genetic
																information).
																<br />
																Collected: No.
															</p>
															<li className="privacy-p liNum">
																<b>Category D: Commercial information.</b>
															</li>
															<p>
																<b>Examples:</b>
																Records and history of products or services
																purchased or considered.
																<br />
																Collected: Yes
															</p>
															<li className="privacy-p liNum">
																<b>Category E: Biometric information.</b>
															</li>
															<p>
																<b>Examples:</b>
																Genetic, physiological, behavioral, and
																biological characteristics, or activity patterns
																used to extract a template or other identifier
																or identifying information, such as,
																fingerprints, faceprints, and voiceprints, iris
																or retina scans, keystroke, gait, or other
																physical patterns, and sleep, health, or
																exercise data.
																<br />
																Collected: No.
															</p>
															<li className="privacy-p liNum">
																<b>
																	Category F: Internet or other similar network
																	activity.
																</b>
															</li>
															<p>
																<b>Examples:</b>
																Interaction with our Service or advertisement.
																<br />
																Collected: Yes.
															</p>
															<li className="privacy-p liNum">
																<b> Category G: Geolocation data.</b>
															</li>
															<p>
																<b>Examples:</b>
																Approximate physical location.
																<br />
																Collected: Yes
															</p>
															<li className="privacy-p liNum">
																<b>Category H: Sensory data.</b>
															</li>
															<p>
																<b>Examples:</b>
																Audio, electronic, visual, thermal, olfactory,
																or similar information.
																<br />
																Collected: No
															</p>
															<li className="privacy-p liNum">
																<b>
																	Category I: Professional or employment-related
																	information.
																</b>
															</li>
															<p>
																<b>Examples:</b>
																Current or past job history or performance
																evaluations.
																<br />
																Collected: No.
															</p>
															<li className="privacy-p liNum">
																<b>
																	• Category J: Non-public education information
																	(per the Family Educational Rights and Privacy
																	Act (20 U.S.C. Section 1232g, 34 C.F.R. Part
																	99)).
																</b>
															</li>
															<p>
																<b>Examples:</b>
																Education records directly related to a student
																maintained by an educational institution or
																party acting on its behalf, such as grades,
																transcripts, class lists, student schedules,
																student identification codes, student financial
																information, or student disciplinary records.
																<br />
																Collected: No.
															</p>
															<li className="privacy-p liNum">
																<b>
																	Category K: Inferences drawn from other
																	personal information.
																</b>
															</li>
															<p>
																<b>Examples:</b>
																Profile reflecting a persons preferences,
																characteristics, psychological trends,
																predispositions, behavior, attitudes,
																intelligence, abilities, and aptitudes.
																<br />
																Collected: No.
															</p>
														</ul>
														<h5>
															Under CCPA, personal information does not include:
														</h5>
														<ul>
															<li className="privacy-p liNum">
																Publicly available information from government
																records
															</li>
															<li className="privacy-p liNum">
																Deidentified or aggregated consumer information
															</li>
															<li className="privacy-p liNum">
																Information excluded from the CCPA scope, such
																as:
															</li>
															<ul className="m">
																<li className="privacy-p liNum">
																	Health or medical information covered by the
																	<b>
																		Health Insurance Portability and
																		Accountability Act of 1996 (HIPAA) and the
																		California Confidentiality of Medical
																		Information Act (CMIA)
																	</b>{" "}
																	or clinical trial data
																</li>
																<li className="privacy-p liNum">
																	Personal Information covered by certain
																	sector-specific privacy laws, including the
																	Fair Credit Reporting Act (FRCA), the
																	Gramm-Leach-Bliley Act (GLBA) or California
																	Financial Information Privacy Act (FIPA), and
																	the Drivers Privacy Protection Act of 1994
																</li>
															</ul>
														</ul>
														<p>
															We use the personal information that we collect or
															receive for the business purposes as described
															above. We may disclose the above listed categories
															of personal information to third parties for
															business purposes as described above. As
															previously mentioned in this Policy, we do not
															“sell” (as such term is defined in the CCPA)
															personal information
														</p>
														<h6>
															You are entitled to the following specific rights
															under the CCPA in relation to personal information
															related to you:{" "}
														</h6>
														<ul className="m">
															<li className="privacy-p liNum">
																You have a right to request that we will
																disclose certain information to you about our
																collection and use of personal information
																related to you over the past 12 months,
																including: (i) The categories of personal
																information that we collect about you; (ii)The
																categories of sources from which the personal
																information is collected; (iii) The purposes for
																collecting, using, or selling that personal
																information. (iv) The categories of personal
																information that we disclosed for a business
																purpose or sold, and the categories of third
																parties to whom we disclosed or sold that
																particular category of personal information. (v)
																The specific pieces of personal information that
																we have collected about you.{" "}
															</li>
															<li className="privacy-p liNum">
																You have a right to request that we delete
																personal information related to you that we
																collected from you under certain circumstances
																and exceptions.
															</li>
															<li className="privacy-p liNum">
																You also have a right not to be discriminated
																against for exercising your rights under the
																CCPA
															</li>
															<li className="privacy-p liNum">
																You also have a right to submit your request via
																an authorized agent. If you use an authorized
																agent to submit a request to access or delete
																your personal information on your behalf, the
																authorized agent must: (1) be a person or
																business entity registered with the California
																Secretary of State to conduct business in
																California; (2) provide proof of such
																registration; and (3) provide documentation or
																other proof indicating that they are authorized
																to act on your behalf. We may also require you
																to verify your identity directly with us, and
																directly confirm with us that you provided the
																authorized agent permission to submit the
																request.
															</li>
														</ul>
														<p className="underline">
															To make such requests, please contact us at
															<Link href="mailto:support@beyin.me">
																<a
																	style={{
																		margin: "0px 5px",
																	}}
																>
																	Support@beyin.me
																</a>
															</Link>
														</p>
														<span>
															We will verify your request using the information
															associated with your account, including email
															address. Government identification may also be
															required.
														</span>
														<p className="underline">
															A request for access can be made by you only twice
															within a 12-months period. Any disclosures that we
															provide will only cover the 12-months period
															preceding receipt of your request. We do not
															charge a fee to process or respond to your
															verifiable User request unless it is excessive,
															repetitive, or manifestly unfounded. If we
															determine that the request warrants a fee, we will
															inform you of the reasons for such decision and
															provide you with a cost estimate before processing
															further your request.
														</p>
													</li>
													<li className="ol">
														<h5> How do we respond to legal requests?</h5>
														<p>
															We may access, preserve and share your information
															in response to a legal request (like a search
															warrant, court order or subpoena) if we have a
															good faith belief that the law requires us to do
															so. This may include responding to legal requests
															from law enforcement agencies, courts, tribunals
															and government authorities. We may also access,
															preserve and share information when we have a good
															faith belief it is necessary to: detect, prevent
															and address fraud and other illegal activity; to
															protect ourselves, you and others, including as
															part of investigations; or to prevent death or
															imminent bodily harm. For example, we may provide
															information to third-party partners about the
															reliability of your account to{" "}
														</p>
													</li>
													<li className="ol">
														<h5>Children Privacy</h5>
														Protecting childrens privacy is important to us, and
														therefore our Website is not intended for children.
														We do not direct the Website to, nor do we knowingly
														collect any personal information from, such
														children. If you are not of majority (or above) as
														per the law of jurisdiction that applies to you, you
														are not authorized to use the Services without your
														parents/legal guardian’s prior written consent. If
														we learn that a child has provided personally
														identifiable information to the Website, we will use
														reasonable efforts to remove such information from
														its database.{" "}
														<span style={{ textDecoration: "underline" }}>
															Please contact us at{" "}
															<Link href="mailto:support@beyin.me">
																<a
																	style={{
																		margin: "0px 4px",
																	}}
																>
																	Support@beyin.me
																</a>
															</Link>
															if you believe we knowingly or unknowingly
															collected information described in this Section.
														</span>
													</li>
													<li className="ol">
														<h5>How can I withdraw my consent? (OPT-OUT)</h5>
														If you signup, make a purchase, you will
														automatically start receiving promotional emails and
														direct mail from us. If after you opt-in, you change
														your mind, you may withdraw your consent for us to
														contact you, for the continued collection, use or
														disclosure of your information, at any time, by
														contacting us at{" "}
														<Link href="mailto:support@beyin.me">
															<a
																style={{
																	margin: "0px 5px",
																}}
															>
																Support@beyin.me
															</a>
														</Link>
													</li>
													<li className="ol">
														<h5> Governing law and Dispute Resolution</h5>
														Unless provided by the relevant statute, rules or
														directives applicable to the jurisdiction in which
														you reside, in case of any disputes, issues, claims
														or controversies arising out of or in relation to
														your use of the Website, Product or our services,
														the governing law and dispute resolution mechanism
														as provided in the <b>Terms & Conditions </b>shall
														apply to this <b>Privacy Policy</b> as well
													</li>
													<li className="ol">
														<h5>
															Do you have questions or concerns about this
															Privacy Policy?
														</h5>
														In the event you have any grievance regarding
														anything related to this Privacy Policy, Terms &
														Conditions, or with any content or service of
														Website or our Product, in that case you may freely
														write your concerns through your registered email to
														<Link href="mailto:support@beyin.me">
															<a
																style={{
																	margin: "0px 5px",
																}}
															>
																Support@beyin.me
															</a>
														</Link>
													</li>
													<li className="ol">
														<h5> Welcoming of suggestions</h5>
														welcome your comments regarding this Privacy Policy.
														Please write to us at{" "}
														<Link href="mailto:support@beyin.me">
															<a
																style={{
																	margin: "0px 5px",
																}}
															>
																Support@beyin.me
															</a>
														</Link>
													</li>
												</ol>
												<b>Last updated on 7/17/2022.</b>
											</div>
											{/* <div className="row">
												<div className="col-md-6">
													<div className="mb-10">
														<img src="/img/blog/single.jpg" alt="" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-10">
														<img src="/img/blog/single.jpg" alt="" />
													</div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrivacyDetails;

{/* <li style={{ margin: "30px 0px" }}>

													</li> */}