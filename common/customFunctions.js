var opacity = 0,
	intervalID = 0;
function show(a) {
	(opacity = Number(window.getComputedStyle(a).getPropertyValue("opacity"))) < 1
		? ((opacity += 1), (a.style.opacity = opacity))
		: clearInterval(intervalID);
}
function hide(a) {
	(opacity = Number(window.getComputedStyle(a).getPropertyValue("opacity"))) > 0
		? ((opacity = 0), (a.style.opacity = opacity))
		: clearInterval(intervalID);
}
export const delay = (a, b) => {
	setTimeout(function () {}, a);
};
export const fadeIn = (a, b) => {
	setInterval(show(a), b);
};
export const fadeOut = (a, b) => {
	setInterval(hide(a), b);
};
export const getSiblings = (b) => {
	let c = [];
	if (!b.parentNode) return c;
	let a = b.parentNode.firstChild;
	for (; a; ) 1 === a.nodeType && a !== b && c.push(a), (a = a.nextSibling);
	return c;
};
export const animateEl = (b, c) => {
	function a() {
		b.style.left = c;
	}
	a();
};
