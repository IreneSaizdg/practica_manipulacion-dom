/* RECOMENDACIONES
    ESTRUCTURA JS BASE
    //  1º variables
    //  2º clases
    //  3º eventos X
    //  4º funciones (variables)
    //  5º invocación a las funciones


        Llamar a los elementos del DOM


        array
            X array fotos cabecera
            X array cards


        // Primero que funcione, después refactorizar.
        function pintarBanner
            pintar la primera img del array:
            arrayfotoscabecera[0]


        function pintarCards 


        // Invocaciones siempre al final
        invoco pintar banner
        invoco pintar cards

*/




// ARRAYS ---------------------------------- ↓↓↓

// Array de contenido de la cabecera
const fotosCabecera = [
    {
        src_img: "../assets/img/banner/1.jpg",
        alt: "Puesta de sol sobre mar",
    },
    {
        src_img: "../assets/img/banner/2.jpg",
        alt: "Globos Aerostáticos",
    },
    {
        src_img: "../assets/img/banner/3.jpg",
        alt: "Puesta de sol",
    },
    {
        src_img: "../assets/img/banner/4.jpg",
        alt: "Globos Aerostáticos en trigal",
    },
    {
        src_img: "../assets/img/banner/5.jpg",
        alt: "Cielo nocturno",
    },
    {
        src_img: "../assets/img/banner/6.jpg",
        alt: "Montañas nevadas",
    },
    {
        src_img: "../assets/img/banner/6.jpg",
        alt: "Puesta de sol con bandada de pájaros",
    },
    {
        src_img: "../assets/img/banner/8.jpg",
        alt: "Rama de árbol peludo",
    }
];

// Array de contenido de las cards
const cardViajes = [
    {
        title: "Viaje 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, cum.",
        src_img: "../assets/img/viajes/viajes-1.jpg",
        alt: "Descripción Alt"
    },
    {
        title: "Viaje 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, cum.",
        src_img: "../assets/img/viajes/viajes-2.jpg",
        alt: "Descripción Alt"
    },
    {
        title: "Viaje 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, cum.",
        src_img: "../assets/img/viajes/viajes-3.jpg",
        alt: "Descripción Alt"
    },
    {
        title: "Viaje 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, cum.",
        src_img: "../assets/img/viajes/viajes-4.jpg",
        alt: "Descripción Alt"
    },
    {
        title: "Viaje 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, cum.",
        src_img: "../assets/img/viajes/viajes-5.jpg",
        alt: "Descripción Alt"
    },
    {
        title: "Viaje 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, cum.",
        src_img: "../assets/img/viajes/viajes-6.jpg",
        alt: "Descripción Alt"
    },
    {
        title: "Viaje 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, cum.",
        src_img: "../assets/img/viajes/viajes-7.jpg",
        alt: "Descripción Alt"
    },
]






// FUNCIÓN PARA ALEATORIZAR IMGS DEL HEADER ------ ↓↓↓
function aleatorizarImgHeader() {
    const headerImg = document.querySelector("#img-cabecera"); //llamada al id
    //console.log(headerImg)
    const randomIndex = Math.floor(Math.random() * fotosCabecera.length); //randomiza la elección de imgs
    /*  Math: es una clase-objeto, tienen métodos y propiedades
      .random(): método de objeto-clase math que devuelve entre 0-1
      * multiplicará por la longitud del array .length()
      Math.floor: redondea hacia abajo.*/
    headerImg.setAttribute("src", fotosCabecera[randomIndex].src_img);//llamada a la parte del array que necesitamos (src)

    console.log(headerImg)
}

aleatorizarImgHeader()
//Invocar a la función --------------------------- ↑↑↑





// FUNCIÓN PARA GENERAR LAS CARDS ---------------- ↓↓↓
function generarCards(){
    const contenedorCards = document.querySelector(".contenedor-cards"); //llamada a contenedor-cards
    
    const cardGenerada = cardViajes.forEach((card) => {
    
        const divCard = document.createElement('div'); //crea un div para Card
        divCard.classList.add('card'); //añade una clase en el div Card
        
        const imgCard = document.createElement('img'); //crea un img
        imgCard.setAttribute('src', card.src_img) //añade atributo src
        imgCard.setAttribute('alt', card.alt) //añade atributo alt

        const h1Card = document.createElement('h1'); //crea un h1
        const pCard = document.createElement('p'); //crea un p
        h1Card.textContent = card.title; //añade el contenido html del texto
        pCard.textContent = card.description; //añade el contenido html del texto

        
        divCard.append(imgCard); //agrega imgCard dentro del divCard, al final 
        divCard.append(h1Card); //agrega h1Card dentro del divCard, al final
        divCard.append(pCard); //agrega h1Card dentro del divCard, al final  
        
        contenedorCards.append(divCard); //agrega divCard dentro del contenedorCards
    });
    
    return cardGenerada
}
   
generarCards()
//Invocar a la función --------------------------- ↑↑↑    
