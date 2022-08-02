let mousecursor = () => {
	let a = document.querySelector(".cursor-inner"),
		b = document.querySelector(".cursor-outer"),
		c,
		d = 0,
		e = !1;
	(window.onmousemove = function (f) {
		e ||
			(b.style.transform =
				"translate(" + f.clientX + "px, " + f.clientY + "px)"),
			(a.style.transform =
				"translate(" + f.clientX + "px, " + f.clientY + "px)"),
			(c = f.clientY),
			(d = f.clientX);
	}),
		document.querySelector(".cursor-pointer") &&
			(document
				.querySelector(".cursor-pointer")
				.addEventListener("mouseenter", function () {
					a.classList.add("cursor-hover"), b.classList.add("cursor-hover");
				}),
			document
				.querySelector(".cursor-pointer")
				.addEventListener("mouseleave", function () {
					a.classList.remove("cursor-hover"),
						b.classList.remove("cursor-hover");
				}),
			(a.style.visibility = "visible"),
			(b.style.visibility = "visible")),
		document.querySelectorAll("a").forEach(function (c) {
			c.addEventListener("mouseenter", function () {
				a.classList.add("cursor-hover"), b.classList.add("cursor-hover");
			});
		}),
		document.querySelectorAll("a").forEach(function (c) {
			c.addEventListener("mouseleave", function () {
				a.classList.remove("cursor-hover"), b.classList.remove("cursor-hover");
			});
		}),
		(a.style.visibility = "visible"),
		(b.style.visibility = "visible");
};
export default mousecursor;
