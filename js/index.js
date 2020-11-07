var header = document.querySelector(".area-nav");
const botonMenu = document.querySelector(".barra-toggle");
const botonSubir = document.querySelector(".boton-subir");
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

	if (window.scrollY > 300) {
		botonSubir.classList.add("mostrar");
	}
	else {
		botonSubir.classList.remove("mostrar");
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
