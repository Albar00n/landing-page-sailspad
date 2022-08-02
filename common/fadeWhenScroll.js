let fadeWhenScroll = () => {
	window.addEventListener("scroll", () => {
		var a = window.pageYOffset;
		document.querySelector(".fixed-slider .caption") &&
			document.querySelectorAll(".fixed-slider .caption").forEach((b) => {
				(b.style.transform = "translate3d(0, " + -(0.2 * a) + "px, 0)"),
					(b.style.opacity = 1 - a / 600);
			});
	});
};
export default fadeWhenScroll;
