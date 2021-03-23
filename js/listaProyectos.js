const listaProyectos = [
	{
		id: "j28d63",
		imagen: "img/neat-timer.png",
		url: "https://neat-timer.herokuapp.com/",
		codigo: "https://github.com/carlo697/NeatTimer",
		titulo: "Neat Timer",
		herramientas: [
			"HTML",
			"CSS",
			"JavaScript",
			"React, React Hooks, React Router, React Icons y React Helmet",
			"Notificaciones de Navegador",
			"World Time API",
			"Heroku"
		],
		descripcion: "Esta aplicación web contiene múltiples herramientas bastante útiles para medir el tiempo.  Posee un cronometro, un reloj con la opción de obtener la hora en línea, un temporizador de cuenta regresiva y alarmas personalizables.<br><br>Tanto el temporizador como las alarmas hacen uso de sonido y notificaciones de navegador para informar al usuario que el tiempo ha acabado.",
	},
	{
		id: "288saf",
		imagen: "img/modulo-caudal.jpg",
		url: "https://carlo697.github.io/modulo-caudal/",
		codigo: "https://github.com/carlo697/modulo-caudal",
		titulo: "Aula Virtual de Instrumentación",
		herramientas: ["HTML", "CSS", "JavaScript", "Adobe Illustrator", "Automation Studio", "Microsoft Visio", "Conocimiento en Instrumentación y Control"],
		descripcion: "Se trata de una página web front-end creada como aula virtual para los estudiantes de la UPTValencia. La pagina cuenta con un tablero de control y un proceso virtual totalmente funcional que permiten realizar una serie de prácticas de laboratorio.<br><br>Esta página es producto de una propuesta de proyecto universitario para obtener el título de Técnico Superior Universitario en Instrumentación y Control, en la Universidad Politécnica Territorial de Valencia.",
	},
	{
		id: "nws347",
		imagen: "img/lodge.png",
		url: "https://drive.google.com/file/d/1QMMM6tNV8E3K-VOlqvaSwaTsr0Tt_8QJ/view?usp=sharing",
		titulo: "Videojuego de Supervivencia",
		herramientas: [
			"C#",
			"MonoDevelop",
			"Unity 5.4.2",
			"Unity 5 Networking",
			"Blender 2.79",
			"Photoshop",
			"Inkscape",
			"Freesound.org",
		],
		descripcion: "Este fue un videojuego que realice como proyecto personal desde el año 2015 hasta el 2017 y me permitió aprender los principios de la programación y la programación orientada a objetos.<br><br>Se trata de un videojuego multijugador de supervivencia en primera persona donde el mapa es generado aleatoriamente al momento de crear una partida. Cuenta con mecanismos como: Crear partidas, guardar partidas, personalizar jugador, sistema de salud y otras estadísticas, inventario, mecanismo para fabricar objetos a partir de materiales, mapa generado de forma procedural con gran variedad de biomas, capacidad de construir edificios, sistema de día y noche, clima, animales, entre muchas otras características.<br><br><strong>Descargar el juego para Windows (32 bit y 64 bit) desde Google Drive:</strong> <a href='https://drive.google.com/file/d/1QMMM6tNV8E3K-VOlqvaSwaTsr0Tt_8QJ/view?usp=sharing' target='_blank'>Descargar (26 MB)</a><br><br><strong>Descargar proyecto de Unity (con el codigo fuente) desde Google Drive:</strong> <a href='https://drive.google.com/file/d/1JdfsTFdSElQsNF9liDv6_IIHls_Va8no/view?usp=sharing' target='_blank'>Descargar (26 MB)</a>",
		imagenes: [
			"img/lodge01.png",
			"img/lodge02.png",
			"img/lodge03.png",
			"img/lodge04.png",
			"img/lodge05.png",
			"img/lodge06.png",
			"img/lodge07.png",
			"img/lodge08.png",
			"img/lodge09.png",
			"img/lodge10.png",
			"img/lodge11.png",
			"img/lodge12.png",
			"img/lodge13.png",
			"img/lodge14.png",
			"img/lodge15.png",
			"img/lodge16.png",
		]
	},
	{
		id: "9dj2hx",
		imagen: "img/buscador_imagenes.jpg",
		url: "https://carlo697.github.io/buscador-pixabay/",
		codigo: "https://github.com/carlo697/buscador-pixabay",
		titulo: "Buscador de Imagenes en Pixabay",
		herramientas: ["HTML", "CSS", "Javascript", "Pixabay API"],
	},
	{
		id: "j2u4ax",
		imagen: "img/capacimetro.jpg",
		titulo: "Capacímetro con PIC",
		herramientas: ["Lenguaje C", "PIC16F628A", "PIC C COMPILER CCS", "Proteus 8"],
		descripcion: "Este proyecto fue un medidor de capacitancia con un rango máximo de 2000 uF, fue realizado con un microcontrolador PIC16F628A y previo a su montaje físico en una protoboard se simuló con el software Proteus 8. <br><br>Su principio es el de medir la capacitancia al contar cuanto tiempo tarda en cargarse el capacitor hasta un tercio de la tensión de la fuente de alimentación (5 V en este caso). El circuito utiliza dos transistores para cargar y descargar el capacitor al realizar una medición, y cuenta con 4 displays de 7 segmentos para mostrar el resultado.",
		imagenes: ["img/capacimetro1.jpg", "img/capacimetro2.png"]
	},
	/*{
		id: "9jq12h",
		imagen: "img/buscador_canciones.jpg",
		url: "https://carlo697.github.io/buscador-canciones/",
		codigo: "https://github.com/carlo697/buscador-canciones",
		titulo: "Buscador de Canciones",
		herramientas: ["HTML", "CSS", "Javascript", "Lyrics.ovh API"],
	},*/
	{
		id: "23as2j",
		imagen: "img/landing2.jpg",
		url: "https://carlo697.github.io/landing-02/",
		codigo: "https://github.com/carlo697/landing-02",
		titulo: "Landing Page para Restaurante",
		herramientas: ["HTML", "CSS"],
	},
	{
		id: "dai29c",
		imagen: "img/landing1.jpg",
		url: "https://carlo697.github.io/landing-01/",
		codigo: "https://github.com/carlo697/landing-01",
		titulo: "Landing Page Genérica",
		herramientas: ["HTML", "CSS"],
	},
	{
		id: "sj2mch",
		imagen: "img/figuras-geometricas.png",
		url: "https://carlo697.github.io/calculo-figuras/",
		codigo: "https://github.com/carlo697/calculo-figuras",
		titulo: "Calculo de variables de figuras geométricas",
		herramientas: ["HTML", "CSS", "Javascript"],
	},
];