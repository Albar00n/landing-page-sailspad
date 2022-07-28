import React from "react";
import Link from "next/link";

const BlogsThreeColumn1 = ({ subBG }) => {
	return (
		<section
			className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}
			id="price"
		>
			<div className="container">
				<div className="sec-head custom-font text-center">
					<h6 className="wow fadeIn" data-wow-delay=".5s">
						Get started
					</h6>
					<h3 className="wow gray" data-splitting>
						Subscriptions
					</h3>
					<span className="tbg">Subscriptions</span>
				</div>
				<div className="row">
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
						<div
							className="item bg-img"
							style={{
								backgroundImage: "url(/img/slid/beyinH10.png)",
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
						>
							<div className="cont">
								<Link href="/blog/blog-dark">
									<a className="date custom-font">
										<span>
											<i>50</i> cards
										</span>
									</a>
								</Link>
								<div className="info custom-font">
									<a href="#0" className="author" style={{ fontWeight: "600" }}>
										SME
										<br /> Subscription
									</a>

									<span className="tag">
										<span>$1.2 per user monthly</span>
									</span>
								</div>
								<ul>
									{/* <li>$1.2 per user monthly</li> */}
									<li className="liNum">Customizable card and logo</li>
								</ul>
								<p style={{ height: "2rem" }}></p>
								<div className="btn-more custom-font">
									<Link
										href="https://app.sailspad.com/signup"
										title="sign up sailspad"
									>
										<a className="simple-btn">Get started</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
						<div
							className="item active bg-img"
							style={{ backgroundImage: "url(/img/slid/beyinH9.png)" }}
						>
							<div className="cont">
								<Link href="/blog/blog-dark">
									<a className="date custom-font">
										<span>
											<i>100</i> cards
										</span>
									</a>
								</Link>
								<div className="info custom-font">
									<a href="#0" className="author" style={{ fontWeight: "600" }}>
										{/* <span> */}
										SME+
										<br /> Subscription {/* </span> */}
									</a>

									<p className="tag">
										<span> $1.2 per user monthly</span>
									</p>
								</div>
								<ul>
									<li className="liNum">Customizable card and logo</li>
									<li className="liNum">Fully customizable loading page</li>
								</ul>
								<div className="btn-more custom-font">
									<Link
										href="https://app.sailspad.com/signup"
										title="sign up sailspad"
									>
										<a className="simple-btn">Get started</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
						<div
							className="item bg-img"
							style={{ backgroundImage: "url(/img/slid/beyinH6.png)" }}
						>
							<div className="cont">
								<Link href="/blog/blog-dark">
									<a className="date custom-font">
										<span>
											<i>200+</i> cards
										</span>
									</a>
								</Link>
								<div className="info custom-font">
									<a href="#0" className="author" style={{ fontWeight: "600" }}>
										<span>
											Agency
											<br /> Subscription
										</span>
									</a>
									<Link href="/blog/blog-dark">
										<p className="tag">$1 per user monthly</p>
									</Link>
								</div>
								<ul>
									<li className="liNum">Customizable card and logo</li>
									<li className="liNum">Fully customizable loading page</li>
								</ul>
								<div className="btn-more custom-font">
									<Link
										href="https://app.sailspad.com/signup"
										title="sign up sailspad"
									>
										<a className="simple-btn">Get started</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogsThreeColumn1;
