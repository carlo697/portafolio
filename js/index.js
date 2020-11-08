const header = document.querySelector(".area-nav");
const botonMenu = document.querySelector(".barra-toggle");
const botonSubir = document.querySelector(".boton-subir");
const menu = document.querySelector(".menu-contenedor");
const proyectos = document.querySelector(".grid-proyectos");

// Slider.
const slider = document.querySelector(".slider");
const botonCerrarSlider = document.querySelector("#botonCerrarSlider");
const sliderImagen = document.querySelector(".imagen-seleccionada");
const sliderLista = document.querySelector("#sliderLista");
const sliderCabecera = document.querySelector(".slider .cabecera");
const sliderTexto = document.querySelector(".slider .texto");

// Media querry.
let menuMedia = window.matchMedia("(min-width: 800px)")

eventListeners();
enMenuMedia(menuMedia);

function eventListeners() {
	document.body.onscroll = alHacerScroll;

	botonMenu.addEventListener("click", clickBotonMenu);
	header.addEventListener("click", clickMenu);
	proyectos.addEventListener("click", abrirSlider);
	botonCerrarSlider.addEventListener("click", cerrarSlider);
	sliderLista.addEventListener("click", abrirMiniatura);
	slider.addEventListener("click", clickSlider);
	menuMedia.addListener(enMenuMedia);
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

function clickBotonMenu () {
	menu.classList.toggle("hide");
}

function clickMenu (e) {
	const target = e.target;

	if (target.classList.contains("menu-enlace")) {
		menu.classList.toggle("hide");
	}
}

function abrirSlider(e) {
	const target = e.target;

	if (target.hasAttribute("data-imagenes")) {
		const info = JSON.parse(target.getAttribute("data-imagenes"));

		const titulo = info[0];
		const texto = info[1];

		limpiarSlider();

		for (let i = 2; i < info.length; i++) {
			const li = document.createElement("li");

			const img = document.createElement("img");
			img.src = info[i];
			img.className = "imagen-miniatura";

			li.appendChild(img);

			sliderLista.appendChild(li);
		}

		sliderImagen.src = info[2];
		sliderCabecera.innerHTML = titulo;
		sliderTexto.innerHTML = texto;

		slider.classList.remove("esconder");
	}
}

function cerrarSlider() {
	slider.classList.add("esconder");
}

function limpiarSlider() {
	while (sliderLista.firstChild) {
		sliderLista.removeChild(sliderLista.firstChild);
	}
}

function abrirMiniatura(e) {
	const target = e.target;

	if (target.classList.contains("imagen-miniatura")) {
		sliderImagen.src = target.src;
		sliderImagen.scrollIntoView();
	}
	
}

function clickSlider(e) {
	const target = e.target;

	if (target.classList.contains("slider")) {
		cerrarSlider();
	}
}

function enMenuMedia(x) {
	console.log(x.matches);

	if (x.matches) {
		menu.classList.add("hide");
	}
}