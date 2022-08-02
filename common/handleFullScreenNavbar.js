import a from "../components/data/app.json";
import {
	getSiblings as b,
	animateEl as c,
	delay as d,
} from "./customFunctions";
let handleFullScreenNavbar = () => {
	function f() {
		window.scrollTo(0, 0);
	}
	window.addEventListener("scroll", () => {
		document
			.querySelector("#mobile")
			.classList.toggle("window-scroll", window.scrollY > 300);
	});
	var g = !1,
		h = document.querySelector(".topnav.dark"),
		i = document.querySelector(".topnav.dark .logo img"),
		e = document.querySelector(".topnav .menu-icon"),
		j = document.querySelector(".topnav .menu-text");
	e &&
		(e.addEventListener("click", function () {
			(g = !g),
				document.querySelector(".hamenu").classList.toggle("open"),
				g
					? (c(document.querySelector(".hamenu"), "0px"),
					  document.querySelector(".topnav .menu-icon ").classList.add("open"),
					  (j.innerHTML = "Close"),
					  h && h.classList.add("navlit"),
					  i && i.setAttribute("src", a.lightLogo),
					  window.addEventListener("scroll", f))
					: (d(300, c(document.querySelector(".hamenu"), "-100%")),
					  document
							.querySelector(".topnav .menu-icon")
							.classList.remove("open"),
					  (j.innerHTML = "Menu"),
					  h && h.classList.remove("navlit"),
					  i && i.setAttribute("src", a.darkLogo),
					  window.removeEventListener("scroll", f)),
				Splitting({ target: j });
		}),
		document.querySelectorAll(".main-menu a").forEach((b) => {
			b.addEventListener("click", () => {
				d(300, c(document.querySelector(".hamenu"), "-100%")),
					document.querySelector(".topnav .menu-icon").classList.remove("open"),
					h && h.classList.remove("navlit"),
					i && i.setAttribute("src", a.darkLogo),
					window.removeEventListener("scroll", f);
			});
		})),
		document
			.querySelectorAll(".hamenu .menu-links .main-menu > li")
			.forEach((a) => {
				a.addEventListener("mouseenter", function () {
					(this.style.opacity = "1"),
						b(this).forEach((a) => {
							a.style.opacity = ".5";
						});
				}),
					a.addEventListener("mouseleave", function () {
						document
							.querySelectorAll(".hamenu .menu-links .main-menu > li")
							.forEach((a) => {
								a.style.opacity = "1";
							});
					});
			}),
		document.querySelectorAll(".main-menu > li .dmenu").length &&
			document.querySelectorAll(".main-menu > li .dmenu").forEach((a) => {
				a.addEventListener("click", function () {
					document.querySelector(".main-menu").classList.add("gosub"),
						b(this.parentNode.parentNode).forEach((a) => {
							a.childNodes[1] && a.childNodes[1].classList.remove("sub-open");
						}),
						this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
				});
			}),
		document.querySelectorAll(".main-menu .sub-menu li .sub-link.back")
			.length &&
			document
				.querySelectorAll(".main-menu .sub-menu li .sub-link.back")
				.forEach((a) => {
					a.addEventListener("click", function () {
						document.querySelector(".main-menu").classList.remove("gosub"),
							document.querySelector(".main-menu").classList.remove("sub-open");
					});
				});
};
export default handleFullScreenNavbar;
