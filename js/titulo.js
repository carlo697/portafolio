const titulo = document.querySelector("#tituloPresentacion");

let ultimoTiempo = 0;

const textos = [
	"Carlos Peña",
	"Programador",
	"Desarrollador Front-End",
	"Estudiante de Instrumentación"
];

let indiceActual = 0;
let objetivo = textos[indiceActual];
let actual = "Carlos Peña"
let tiempoLetra = 0;
let eliminando = true;

let tiempoCambio = 0;
let cambiarTexto = true;

titulo.textContent = "Carlos Peña";

function animarTitulo(delta) {
	if (objetivo === actual) {
		// se alcanzo la palabra
		tiempoCambio += delta;

		// cambiar de palabra luego de un tiempo
		if (tiempoCambio > 2) {
			tiempoCambio = 0;

			// comprobar si se ha llegado al ultimo texto
			if (indiceActual >= textos.length - 1) {
				indiceActual = 0;
			} else {
				indiceActual++;
			}

			// actualizar el nuevo texto objetivo
			objetivo = textos[indiceActual];
		}
	}

	if (objetivo !== actual) {
		tiempoLetra += delta;

		// cambiar una letra
		if (tiempoLetra > 0.15) {
			if (eliminando) {
				// eliminar una letra si aun hay letras
				if (actual.length == 0) {
					eliminando = false;
				} else {
					actual = actual.slice(0, -1);
				}
			} else {
				// agregar una letra si aun no se ha alcanzado la oracion
				if (actual.length < objetivo.length) {
					actual += objetivo[actual.length];

					if (actual === objetivo) {
						eliminando = true;
					}
				}
			}

			tiempoLetra = 0;
			cambiarTexto = true;
		}
	}

	if (cambiarTexto) {
		cambiarTexto = false;
		titulo.innerHTML = "Soy " + actual;
	}
}

function bucle (tiempoTotal) {
	const delta = tiempoTotal - ultimoTiempo;

	animarTitulo(delta / 1000);

	ultimoTiempo = tiempoTotal;
	requestAnimationFrame(bucle);
}

requestAnimationFrame(bucle);