import { getSiblings as a, fadeIn as b, fadeOut as c } from "./customFunctions";
export const handleDropdown = (b) => {
	a(b.target.parentElement)
		.filter((a) => a.classList.contains("show"))
		.map((a) => {
			a.classList.remove("show"),
				a.childNodes[0] && a.childNodes[0].setAttribute("aria-expanded", !1),
				a.childNodes[1] && a.childNodes[1].classList.remove("show");
		}),
		b.target.parentElement.classList.toggle("show"),
		b.target.setAttribute("aria-expanded", !0);
};
export const handleMobileDropdown = (a) => {
	document
		.getElementById("navbarSupportedContent")
		.classList.toggle("show-with-trans");
};
export const handleSearch = () => {
	let a = document.querySelector(".navbar .search .search-form");
	document
		.querySelector(".navbar .search .icon")
		.addEventListener("click", function () {
			(a.style.display = "block"), b(a, 200);
		}),
		document
			.querySelector(".navbar .search .search-form .close")
			.addEventListener("click", function () {
				(a.style.display = "none"), c(a, 200);
			});
};
