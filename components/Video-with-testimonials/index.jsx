/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { Player } from "video-react";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
		<section className="block-sec">
			<div
				className="background bg-img section-padding pb-0"
				style={{ backgroundImage: `url(/img/slid/beyinH8.png)` }}
				data-overlay-dark="8"
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="vid-area">
								<div className="vid-icon">
									{typeof window !== "undefined" && (
										<ModalVideo
											loop
											allowFullScreen="true"
											channel="youtube"
											autoplay
											isOpen={isOpen}
											videoId="hMig4PSQkEU"
											onClose={() => setOpen(false)}
										/>
									)}

									<a
										className="vid"
										onClick={(e) => {
											e.preventDefault();
											setOpen(true);
										}}
										href="#"
									>
										<div className="vid-butn">
											<span className="icon">
												<i className="fas fa-play"></i>
											</span>
										</div>
									</a>
								</div>

								<div className="cont">
									<h3 className="wow" data-splitting>
										So that&apos;s us. There&apos;s no other way to put it.
									</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="testim-box">
								<div className="head-box">
									<h6 className="wow fadeIn" data-wow-delay=".5s">
										Our Clients
									</h6>
									<h4 className="wow fadeInLeft" data-wow-delay=".5s">
										What Client&apos;s Say?
									</h4>
								</div>
								<Slider
									{...settings}
									className="slic-item wow fadeInUp"
									data-wow-delay=".5s"
								>
									<div className="item">
										<p>
											Nulla metus metus ullamcorper vel tincidunt sed euismod
											nibh volutpat velit class aptent taciti sociosqu ad
											litora.
										</p>
										<div className="info">
											<div className="img">
												<div className="img-box">
													<img
														src="/img/slid/beyinH1.png"
														alt="Beyin"
														title="beyin"
													/>
												</div>
											</div>
											<div className="cont">
												<div className="author">
													<h6 className="author-name custom-font">
														Alex Regelman
													</h6>
													<span className="author-details">
														Co-founder, Colabrio
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="item">
										<p>
											Nulla metus metus ullamcorper vel tincidunt sed euismod
											nibh volutpat velit class aptent taciti sociosqu ad
											litora.
										</p>
										<div className="info">
											<div className="img">
												<div className="img-box">
													<img
														src="/img/slid/beyinH1.png"
														alt="Beyin"
														title="beyin"
													/>
												</div>
											</div>
											<div className="cont">
												<div className="author">
													<h6 className="author-name custom-font">
														Alex Regelman
													</h6>
													<span className="author-details">
														Co-founder, Colabrio
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="item">
										<p>
											Nulla metus metus ullamcorper vel tincidunt sed euismod
											nibh volutpat velit class aptent taciti sociosqu ad
											litora.
										</p>
										<div className="info">
											<div className="img">
												<div className="img-box">
													<img
														src="/img/slid/beyinH1.png"
														alt="Beyin"
														title="beyin"
													/>
												</div>
											</div>
											<div className="cont">
												<div className="author">
													<h6 className="author-name custom-font">
														Alex Regelman
													</h6>
													<span className="author-details">
														Co-founder, Colabrio
													</span>
												</div>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VideoWithTestimonials;
