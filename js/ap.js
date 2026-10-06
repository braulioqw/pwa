/* =========================================
   SERVICE WORKER
========================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("serviceworker.js")
            .then(reg => {

                console.log(
                    "Service Worker registrado con éxito:",
                    reg
                );

            })
            .catch(err => {

                console.log(
                    "Fallo al registrar el Service Worker:",
                    err
                );

            });

    });

}


/* =========================================
   PRODUCTOS
========================================= */

const productos = [

    {
        nombre: "Café Americano",
        descripcion: "Café negro suave, ideal para empezar el día.",
        informacion: "Un espresso al que se añade agua caliente para obtener una taza amplia y ligera. Su aroma tostado acompaña un sabor limpio que puedes disfrutar solo o endulzar a tu gusto.",
        origen: "Veracruz, México",
        intensidad: "3 de 5 · Equilibrada",
        notas: "Cacao, nuez y caramelo",
        preparacion: "Espresso doble con agua caliente",
        ideal: "Para empezar la mañana o acompañar pan dulce",
        precio: "$35.00",
        imagen: "imagenes/coffe.jpg"
    },

    {
        nombre: "Café Latte",
        descripcion: "Espresso con leche vaporizada y una capa de espuma.",
        informacion: "La leche vaporizada envuelve un espresso intenso y crea una bebida cremosa, con espuma fina y un dulzor natural. Su sabor suave deja que el café y la leche se disfruten en equilibrio.",
        origen: "Chiapas, México",
        intensidad: "2 de 5 · Suave",
        notas: "Chocolate con leche y avellana",
        preparacion: "Espresso con leche vaporizada",
        ideal: "Para una pausa tranquila o acompañar galletas",
        precio: "$45.00",
        imagen: "imagenes/coffee.jpg"
    },

    {
        nombre: "Cappuccino",
        descripcion: "Partes iguales de espresso, leche y espuma.",
        informacion: "Un espresso se combina con leche vaporizada y una capa generosa de espuma. Cada sorbo empieza cremoso y termina con el carácter aromático del café.",
        origen: "Oaxaca, México",
        intensidad: "3 de 5 · Equilibrada",
        notas: "Cacao, almendra y especias suaves",
        preparacion: "Espresso con leche y espuma cremosa",
        ideal: "Para disfrutar a media mañana",
        precio: "$45.00",
        imagen: "imagenes/coff.jpg"
    },

    {
        nombre: "Mocha",
        descripcion: "Espresso con chocolate y leche vaporizada.",
        informacion: "El espresso se mezcla con chocolate y leche vaporizada para crear una taza indulgente, cremosa y aromática. El cacao aporta dulzor sin esconder por completo el sabor del café.",
        origen: "Chiapas, México",
        intensidad: "3 de 5 · Equilibrada",
        notas: "Chocolate oscuro, cacao y vainilla",
        preparacion: "Espresso con chocolate y leche",
        ideal: "Para acompañar un postre o darte un gusto",
        precio: "$50.00",
        imagen: "imagenes/coffe4.jpg.jpg"
    },

    {
        nombre: "Café Cold Brew",
        descripcion: "Extracción en frío durante 12 horas, suave y refrescante.",
        informacion: "Los granos se infusionan lentamente en agua fría durante 12 horas. El resultado es una bebida fresca y suave, servida con hielo para resaltar su perfil naturalmente dulce.",
        origen: "Veracruz, México",
        intensidad: "2 de 5 · Suave",
        notas: "Caramelo, frutos rojos y cacao",
        preparacion: "Infusión fría de 12 horas",
        ideal: "Para tardes calurosas o después de comer",
        precio: "$48.00",
        imagen: "imagenes/coffe5.jpg.jpg"
    },

    {
        nombre: "Flat White",
        descripcion: "Espresso doble con leche microespumada.",
        informacion: "Un espresso doble se cubre con leche microespumada, fina y sedosa. Tiene más presencia de café que un latte y una textura aterciopelada de principio a fin.",
        origen: "Oaxaca, México",
        intensidad: "4 de 5 · Intensa",
        notas: "Chocolate amargo, nuez y miel",
        preparacion: "Espresso doble con microespuma",
        ideal: "Para quienes disfrutan el café con leche y más carácter",
        precio: "$48.00",
        imagen: "imagenes/coffe6.jpg.jpg"
    },

    {
        nombre: "Café Espresso",
        descripcion: "Shot concentrado de café, intenso y aromático.",
        informacion: "Una extracción corta y concentrada que reúne aroma, cuerpo y una capa dorada de crema. Se disfruta en pocos sorbos para apreciar sus matices tostados.",
        origen: "Mezcla de Chiapas y Veracruz",
        intensidad: "5 de 5 · Muy intensa",
        notas: "Cacao, piloncillo y especias",
        preparacion: "Extracción corta a presión",
        ideal: "Para amantes del café intenso, solo o después de comer",
        precio: "$30.00",
        imagen: "imagenes/coffe7.jpg.jpg"
    },

    {
        nombre: "Macchiato",
        descripcion: "Espresso 'manchado' con un toque de leche.",
        informacion: "Un espresso intenso recibe apenas una cucharada de espuma de leche. Ese pequeño toque suaviza el primer sorbo sin quitarle protagonismo al café.",
        origen: "Veracruz, México",
        intensidad: "4 de 5 · Intensa",
        notas: "Avellana, cacao y azúcar morena",
        preparacion: "Espresso con un toque de espuma",
        ideal: "Para una pausa breve con sabor marcado",
        precio: "$42.00",
        imagen: "imagenes/coffe8.jpg.jpg"
    },

    {
        nombre: "Café Frappé",
        descripcion: "Café helado batido con hielo, dulce y espumoso.",
        informacion: "El café se bate con hielo hasta quedar frío, espumoso y ligero. Su textura divertida y su dulzor equilibrado hacen de cada sorbo un descanso refrescante.",
        origen: "Chiapas, México",
        intensidad: "2 de 5 · Suave",
        notas: "Café dulce, vainilla y cacao",
        preparacion: "Café frío batido con hielo",
        ideal: "Para tardes de calor o un antojo dulce",
        precio: "$52.00",
        imagen: "imagenes/coffe9.jpg.jpg"
    },

    {
        nombre: "Irish Coffee",
        descripcion: "Café caliente con un toque especial y crema batida.",
        informacion: "Una taza de café caliente se sirve con crema batida para unir una base aromática con una cubierta suave. Una bebida reconfortante pensada para disfrutar lentamente.",
        origen: "Mezcla de Oaxaca y Chiapas",
        intensidad: "4 de 5 · Intensa",
        notas: "Café tostado, crema y azúcar morena",
        preparacion: "Café caliente con crema batida",
        ideal: "Para cerrar la tarde o acompañar un postre",
        precio: "$55.00",
        imagen: "imagenes/coffe10.jpg.jpg"
    }

];


/* =========================================
   REFERENCIAS HTML
========================================= */

const template = document.getElementById("card-template");

const container = document.querySelector(".container");

const productosSection =
    document.getElementById("productos-section");

const detalleProducto =
    document.getElementById("detalle-producto");

const detalleImagen =
    document.getElementById("detalle-imagen");

const detalleNombre =
    document.getElementById("detalle-nombre");

const detalleDescripcion =
    document.getElementById("detalle-descripcion");

const detalleInformacion =
    document.getElementById("detalle-informacion");

const detalleOrigen =
    document.getElementById("detalle-origen");

const detalleIntensidad =
    document.getElementById("detalle-intensidad");

const detalleNotas =
    document.getElementById("detalle-notas");

const detallePreparacion =
    document.getElementById("detalle-preparacion");

const detalleIdeal =
    document.getElementById("detalle-ideal");

const detallePrecio =
    document.getElementById("detalle-precio");

const btnRegresar =
    document.getElementById("btn-regresar");

const detalleAgregar =
    document.getElementById("detalle-agregar");


/* =========================================
   MOSTRAR DETALLE DEL CAFÉ
========================================= */

function mostrarDetalle(producto) {

    detalleImagen.src = producto.imagen;

    detalleImagen.alt = producto.nombre;

    detalleNombre.textContent = producto.nombre;

    detalleDescripcion.textContent =
        producto.descripcion;

    detalleInformacion.textContent =
        producto.informacion;

    detalleOrigen.textContent = producto.origen;
    detalleIntensidad.textContent = producto.intensidad;
    detalleNotas.textContent = producto.notas;
    detallePreparacion.textContent = producto.preparacion;
    detalleIdeal.textContent = producto.ideal;

    detallePrecio.textContent =
        producto.precio;

    // Ocultar las cards
    productosSection.style.display = "none";

    // Mostrar pantalla completa
    detalleProducto.classList.add("detalle--activo");
    detalleProducto.setAttribute("aria-hidden", "false");

    // Subir al inicio de la pantalla
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   REGRESAR A LAS CARDS
========================================= */

btnRegresar.addEventListener("click", () => {

    detalleProducto.classList.remove(
        "detalle--activo"
    );
    detalleProducto.setAttribute("aria-hidden", "true");

    productosSection.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   CREAR CARD
========================================= */

function crearCard(producto) {

    const clone =
        template.content.cloneNode(true);

    const card =
        clone.querySelector(".card");

    const img =
        clone.querySelector(".card__img");

    const title =
        clone.querySelector(".card__title");

    const description =
        clone.querySelector(".card__description");

    const price =
        clone.querySelector(".card__price");

    const btn =
        clone.querySelector(".card__btn");


    // Información de la card

    img.src = producto.imagen;

    img.alt = producto.nombre;

    title.textContent =
        producto.nombre;

    description.textContent =
        producto.descripcion;

    price.textContent =
        producto.precio;


    /* =====================================
       CLICK EN LA CARD
    ===================================== */

    card.addEventListener("click", () => {

        mostrarDetalle(producto);

    });

    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ver detalles de ${producto.nombre}`);

    card.addEventListener("keydown", (event) => {

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            mostrarDetalle(producto);
        }

    });


    /* =====================================
       BOTÓN AGREGAR
    ===================================== */

    btn.addEventListener("click", (event) => {

        // Evita que el click abra el detalle
        event.stopPropagation();

        console.log(
            `Agregado: ${producto.nombre}`
        );

    });


    container.appendChild(clone);

}


/* =========================================
   RENDERIZAR PRODUCTOS
========================================= */

function renderizarProductos() {

    productos.forEach(producto => {

        crearCard(producto);

    });

}


/* =========================================
   INICIAR
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    renderizarProductos
);