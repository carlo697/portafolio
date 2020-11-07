var header = document.querySelector(".area-nav");
const botonMenu = document.querySelector(".barra-toggle");
let menu = document.querySelector(".menu-contenedor");

eventListeners();

function eventListeners() {
	document.body.onscroll = alHacerScroll;

	botonMenu.addEventListener("click", clickBotonMenu);
	header.addEventListener("click", clickMenu);
}

function alHacerScroll () {
	if (window.scrollY > 100) {
		header.classList.add("sticky");
	}
	else {
		header.classList.remove("sticky");
	}
}

function clickMenu (e) {
	const target = e.target;

	if (target.classList.contains("menu-enlace")) {
		menu.classList.toggle("hide");
	}
}

function clickBotonMenu () {
	menu.classList.toggle("hide");
}
