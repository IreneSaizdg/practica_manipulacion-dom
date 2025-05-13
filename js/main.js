/* REFERENCIA
    // Array de imágenes para el header
    const headerImages = [
    "https://images.pexels.com/photos/1606328/pexels-photo-1606328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10178903/pexels-photo-10178903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    // Array para la galería (imagen + descripción)
    const galeriaItems = [
    {
        url: "https://images.pexels.com/photos/2589456/pexels-photo-2589456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Montañas en el amanecer"
    },
    {
        url: "https://images.pexels.com/photos/29708579/pexels-photo-29708579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lago sereno entre los árboles"
    },
    {
        url: "https://images.pexels.com/photos/29453681/pexels-photo-29453681/free-photo-of-sereno-sendero-forestal-otonal-bordeado-de-hojas.jpeg",
        description: "Camino en el bosque"
    },
    ];

    // Función para cargar imagen del header
    function setRandomHeaderImage() {
    const headerImg = document.getElementById("header-img");
    const randomIndex = Math.floor(Math.random() * headerImages.length);
    headerImg.src = headerImages[randomIndex];
    }

    // Función para generar la galería
    function generateGallery() {
    const container = document.getElementById("galeria");

    galeriaItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.url;
        img.alt = item.description;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        card.appendChild(img);
        card.appendChild(desc);
        container.appendChild(card);
    });
    }

    // Inicializar en carga
    window.addEventListener("DOMContentLoaded", () => {
    setRandomHeaderImage();
    generateGallery();
    });

*/


/*
ÓRDEN/ ESTRUCTURA JS
//  1º variables
//  2º clases
//  3º eventos
//  4º funciones
//  5º invocación a las funciones


    Llamar a los elementos del DOM


    array
        array fotos cabecera
        array cards


    // Primero que funcione, después refactorizar.
    function pintarBanner
        pintar la primera img del array:
        arrayfotoscabecera[0]


    function pintarCards 


    // Invocaciones siempre al final
    invoco pintar banner
    invoco pintar cards

*/