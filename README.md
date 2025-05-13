## Manipulación del DOM

### **Ejercicio**: Galería Dinámica con Header Aleatorio

**Descripción**:  
El objetivo de este ejercicio es crear una página web que muestre un header con una imagen seleccionada aleatoriamente y una galería de imágenes generadas dinámicamente. La pagina debe ser responsive

- Las imágenes se insertarán dinámicamente desde **JavaScript**.
- La imagen del header también se seleccionará dinámicamente y se cambiará cada vez que se recargue la página.

### **Requisitos**:

1. **Estructura HTML**:
   - El documento HTML debe contener un `header` que mostrará una imagen aleatoria seleccionada dinámicamente.
   - Debe tener una sección para la galería de imágenes que estará inicialmente vacía.
2. **CSS**:

   - Organizar las imágenes de la galería en un diseño responsive que se ajuste al tamaño de la pantalla.
   - Cada imagen estará dentro de una tarjeta que incluirá una breve descripción.
   - El header debe ocupar todo el ancho de la página.

3. **JavaScript**:
   - Debes definir dos arrays:
     - Uno para las imágenes del **header** con varias URLs de imágenes que se seleccionarán aleatoriamente.
     - Otro array con imágenes y descripciones que se mostrarán en la galería.
   - Al cargar la página, selecciona aleatoriamente una imagen del array del header y muéstrala en el `header`.
   - Genera dinámicamente las tarjetas de la galería de imágenes a partir del segundo array, cada tarjeta debe contener una imagen y una breve descripción.
   - Todo el contenido debe generarse automáticamente cuando la página se cargue.

### **Instrucciones**:

1. **HTML**:
   - Crea un documento HTML básico con un header (`<header>`) que contenga un una imagen vacia, y un contenedor para la galería de imágenes.
2. **CSS**:

   - Define estilos para el header, asegurándote de que la imagen se ajuste bien al tamaño.
   - Organizar las tarjetas de la galería de imágenes.
   - Dale estilo a las tarjetas para que tengan un diseño atractivo (bordes, sombras, efectos de hover, etc.).

3. **JavaScript**:
   - Define un array de imágenes para el header.
   - Define otro array con las URLs de las imágenes de la galería y sus descripciones.
   - Las imágenes se seleccionaran aleatoriamente del array del header y colócala en el `<img>` del header.
   - Recorre el array de imágenes de la galería y genera dinámicamente los elementos del DOM (tarjetas de imágenes con sus descripciones).
   - Agrega las tarjetas al contenedor de la galería en el DOM.

### **Ejemplo de Comportamiento**:

1. Al cargar la página, el header muestra una imagen seleccionada al azar desde un conjunto de imágenes predefinidas.
2. Debajo del header, aparece una galería de imágenes con varias tarjetas, cada una mostrando una imagen y su descripción.
3. La disposición de la galería se adapta al tamaño de la pantalla, y las tarjetas tienen un efecto de hover que mejora su apariencia.