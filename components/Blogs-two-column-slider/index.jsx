import React from "react";
import Link from "next/link";

import Bg from "../../public/img/slid/beyinS.png";
import BgS from "../../public/img/slid/beyinS1.png";
import BgS2 from "../../public/img/slid/beyinS2.png";
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
								backgroundImage: `url(${Bg.src})`,
								width: "100%",
								height: "100%",
							}}
						>
							<div className="cont">
								<h6 className="date custom-font">
									<span>
										<i>50</i> cards
									</span>
								</h6>

								<div className="info custom-font ">
									<h6 className="author h6Blog">
										SME
										<br /> Subscription
									</h6>

									<span className="tag">
										<span>$1.2 per user monthly</span>
									</span>
								</div>
								<ul>
									{/* <li>$1.2 per user monthly</li> */}
									<li className="liNum">Customizable card and logo</li>
								</ul>
								<p className="pBlog"></p>
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
							style={{
								backgroundImage: `url(${BgS.src})`,
								width: "100%",
								height: "100%",
							}}
						>
							<div className="cont">
								{/* <Link href="/blog/blog-dark"> */}
								<h6 className="date custom-font">
									<span>
										<i>100</i> cards
									</span>
								</h6>
								{/* </Link> */}
								<div className="info custom-font">
									<h6 className="author h6Blog">
										{/* <span> */}
										SME+
										<br /> Subscription {/* </span> */}
									</h6>

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
							style={{
								backgroundImage: `url(${BgS2.src})`,
								width: "100%",
								height: "100%",
							}}
						>
							<div className="cont">
								{/* <Link href="/blog/blog-dark"> */}
								<h6 className="date custom-font">
									<span>
										<i>200+</i> cards
									</span>
								</h6>
								{/* </Link> */}
								<div className="info custom-font">
									<h6 className="author h6Blog">
										<span>
											Agency
											<br /> Subscription
										</span>
									</h6>
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
