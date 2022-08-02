import { delay as a, animateEl as b } from "./customFunctions";
let loadingPace = () => {
	Pace.on("start", function () {
		document.querySelector("#preloader").classList.remove("isdone");
	}),
		Pace.on("done", function () {
			document.querySelector(".hamenu") &&
				(a(300, b(document.querySelector(".hamenu"), "-100%")),
				document.querySelector(".topnav .menu-icon").classList.remove("open")),
				document.querySelector("#preloader").classList.add("isdone");
		}),
		document.querySelector("body").classList.contains("pace-done") &&
			document.querySelector("#preloader").classList.add("isdone"),
		document.addEventListener("load", () => {
			document.querySelector("#preloader").classList.add("isdone");
		});
};
export default loadingPace;
