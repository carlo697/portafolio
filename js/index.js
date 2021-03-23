const header = document.querySelector(".area-nav");
const botonMenu = document.querySelector(".barra-toggle");
const botonSubir = document.querySelector(".boton-subir");
const menu = document.querySelector(".menu-contenedor");
const proyectos = document.querySelector(".grid-proyectos");

// Modal.
const modal = document.querySelector(".modal");
const botonCerrarModal = document.querySelector("#botonCerrarModal");
const listaImagenes = document.querySelector(".imagenes-lista");
const imagenSeleccionada = document.querySelector(".imagen-seleccionada");

// Media querry.
let menuMedia = window.matchMedia("(min-width: 800px)")

eventListeners();
enMenuMedia(menuMedia);

function eventListeners() {
	document.body.onscroll = alHacerScroll;

	mostrarProyectos();

	botonMenu.addEventListener("click", clickBotonMenu);
	header.addEventListener("click", clickMenu);

	proyectos.addEventListener("click", clickEnProyectos);

	botonCerrarModal.addEventListener("click", cerrarModal);
	listaImagenes.addEventListener("click", abrirMiniatura);

	menuMedia.addListener(enMenuMedia);
}

function mostrarProyectos() {
	const padre = document.querySelector(".grid-proyectos");

	listaProyectos.forEach(proyecto => {
		const {id, imagen, url, titulo} = proyecto;

		const contenedor = document.createElement("div");
		contenedor.classList.add("proyecto-caja");

		contenedor.innerHTML = `
			<img class="proyecto-img" src="${imagen}" data-proyecto="${id}">
			<div class="proyecto-contenido">
				<h3 class="proyecto-titulo">${titulo}</h3>
				<button class="boton" target="_blank" data-proyecto="${id}">
					Ver Más
				</button>
			</div>
		`;

		padre.appendChild(contenedor);
	});
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

function clickEnProyectos(e) {
	const target = e.target;

	const sliderImagen = document.querySelector(".imagen-seleccionada");
	const sliderCabecera = document.querySelector(".slider .cabecera");
	const sliderTexto = document.querySelector(".slider .texto");

	const proyectoTitulo = document.querySelector("#proyectoTitulo");
	const proyectoImagen = document.querySelector(".modal-imagen");
	const descripcionContenedor = document.querySelector("#proyectoDescripcionContenedor");
	const descripcionContenido = document.querySelector("#proyectoDescripcion");
	const botonVisitar = document.querySelector("#proyectoBotonVisitar");
	const botonCodigo = document.querySelector("#proyectoBotonCodigo");
	const imagenesSeccion = document.querySelector(".modal-imagenes");
	const proyectoHerramientas = document.querySelector("#proyectoHerramientas");

	if (target.hasAttribute("data-proyecto")) {
		const id = target.getAttribute("data-proyecto");

		const {
			imagen,
			url,
			codigo,
			titulo,
			descripcion,
			imagenes,
			herramientas,
		} = listaProyectos.find(item => item.id === id);

		while (listaImagenes.firstChild) {
			listaImagenes.firstChild.remove();
		}

		if (imagenes) {
			imagenesSeccion.classList.remove("esconder");

			imagenes.forEach(imagen => {
				const li = document.createElement("li");

				const img = document.createElement("img");
				img.src = imagen;
				img.className = "imagen-miniatura";

				li.appendChild(img);

				listaImagenes.appendChild(li);
			});
		} else {
			imagenesSeccion.classList.add("esconder");
		}

		while (proyectoHerramientas.firstChild) {
			proyectoHerramientas.firstChild.remove();
		}

		herramientas.forEach(herramienta => {
			const li = document.createElement("li");
			li.textContent = herramienta;
			proyectoHerramientas.appendChild(li);
		});

		proyectoImagen.src = imagen;
		proyectoTitulo.innerHTML = titulo;

		if (descripcion) {
			descripcionContenedor.classList.remove("esconder");
			descripcionContenido.innerHTML = descripcion;
		} else {
			descripcionContenedor.classList.add("esconder");
		}

		if (url) {
			botonVisitar.classList.remove("esconder");
			botonVisitar.href = url;
		} else {
			botonVisitar.classList.add("esconder");
		}

		if (codigo) {
			botonCodigo.classList.remove("esconder");
			botonCodigo.href = codigo;
		} else {
			botonCodigo.classList.add("esconder");
		}

		imagenSeleccionada.src = "";

		modal.classList.remove("esconder");

		// Remover scroll del cuerpo
		document.body.style.overflow = "hidden";
	}
}

function cerrarModal() {
	modal.classList.add("esconder");
	document.body.style.overflow = "auto";
}

function abrirMiniatura(e) {
	const target = e.target;

	if (target.classList.contains("imagen-miniatura")) {
		imagenSeleccionada.src = target.src;
		imagenSeleccionada.scrollIntoView();
	}
	
}


function enMenuMedia(x) {
	console.log(x.matches);

	if (x.matches) {
		menu.classList.add("hide");
	}
}