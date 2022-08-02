import React from "react";
import Navbar from "../Navba/index";
import NavbarFull from "../navbar-full-menu/index";
const AllNav = () => {
	const navbarFullMenuRef = React.useRef(null);

	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	React.useEffect(() => {
		var navbar = navbarRef.current;
		if (window.pageYOffset > 300) {
			navbar.classList.add("nav-scroll");
		} else {
			navbar.classList.remove("nav-scroll");
		}
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				navbar.classList.add("nav-scroll");
			} else {
				navbar.classList.remove("nav-scroll");
			}
		});
	}, [navbarRef]);

	React.useEffect(() => {
		var navbarFullMenu = navbarFullMenuRef.current;
		if (window.pageYOffset > 300) {
			navbarFullMenu.classList.add("nav-scroll");
		} else {
			navbarFullMenu.classList.remove("nav-scroll");
		}
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				navbarFullMenu.classList.add("nav-scroll");
			} else {
				navbarFullMenu.classList.remove("nav-scroll");
			}
		});
	}, [navbarFullMenuRef]);
	return (
		<>
			<Navbar nr={navbarRef} lr={logoRef} />
			<NavbarFull nr={navbarFullMenuRef} />
		</>
	);
};

export default AllNav;
