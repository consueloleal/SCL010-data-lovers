# *Data Lovers - Rick y Morty*
![Logo](http://www.imagenonline.com/imagenes/1/1411-f2a38da7d107e7d9ea8f530f54f12e95e3fe5452.png)
![Gif](multimedia/giphy.gif)

 Desarrolladoras: *Consuelo Leal* y *Ana Valera*.



## *Índice*

* [Resumen del proyecto](#resumen-del-proyecto)
* [Fases de desarrollo del proyecto](#Fases-de-desarrollo-del-proyecto)
* [Implementación de la Interfaz de Usuario (HTML/CSS/JS)](#Implementación-de-la-Interfaz-de-Usuario-(HTML/CSS/JS))
* [Pruebas Unitarias](#pruebas-unitarias)
* [Heurísticas de usabilidad](#Heurísticas-de-usabilidad)

*

## *1. Resumen del proyecto*

La serie *RICK AND MORTY* ha sido aclamada a nivel mundial por su originalidad, humor y creatividad. Es una animación de ciencia ficción para adultos creada, producida y escrita por Justin Roiland y Dan Harmon. La serie sigue las desventuras de un científico (Rick Sánchez), y su fácilmente influenciable nieto (Morty Smith), quienes pasan el tiempo entre la vida doméstica y los viajes espaciales intergalácticos. Bajo este escenario, se muestran un sin fin de personajes (493 en total) y éstos a su vez se logran ubicar en distintos géneros (femenino, masculino, desconocido y sin género) y especies (humano, animal, alien, humanoide, robot, parásito, entre otros). 

Motivado a lo descrito anteriormente y para conocer las características de los personajes, se desarrolló la presente aplicación, con la finalidad de:
- Mostrar los 493 personajes, con sus nombres, género y especie.
- Ordenar los personajes por orden alfabético (es decir, de la A-Z o de Z-A).
- Filtrar los personajes por su género.
- Filtrar los personajes por su especie.
- Filtrar los personajes por su género y especie.
- Mostrar algunas estadísticas de la serie, como son: 
    * Cantidad de personajes por su género.
    * Cantidad de personajes por su especie.

La aplicación, se diseñó pensando en el usuario final, por lo que ofrece:
  - Identificación de la serie (conservamos su título original).
  - Pantalla amigable.
  - Fácil manejo.
  - Animación, por medio de imágen con movimiento y sonido ("Theme song").
  - Adaptabilidad o visualización en distintos dispositivos. 


## *2. Fases de desarrollo del proyecto*

### *2.1. Trello*

Esta herramienta de gestión, nos permitió programar y darle seguimiento a cada una de las actividades del proyecto, a fin de cumplir con el objetivo pautado.
![](http://www.imagenonline.com/imagenes/1/1372-1bb081b1cf42353699c437ae02abec97b232ca05.jpg)

 

### *2.2 Historias de usuario*

Definición de usuarios:

Para desarrollar la aplicación, primordialmente definimos quienes serían nuestros usuarios, sus objetivos, los datos relevantes y cuando usarían el producto. Por lo que definimos que:
- Usuarios principales del producto: Personas >= 16 años.
- Objetivos de éstos usuarios en relación al producto: Diversión y conocer las características de los personajes de la serie.
- Los datos relevantes que quieren ver: Imagen, nombre, género y especie de los personajes.
- Usarían el producto en sus ratos libres y de ocio.

Una vez que definimos nuestro usuario y entendimos sus necesidades, escribimos las "historias" que representan todo lo que el usuario necesita "hacer y ver" dentro de la aplicación a desarrollar. De allí que detectamos, 3 historias (todas cumplidas al término del proyecto), las cuales se muestran en la imagen anexa:

![Historia de usuario](http://www.imagenonline.com/imagenes/1/1373-322a1e66e50e1f28f4e5de7fd47e7f928445dedf.jpg)


### *2.3 Diseño de la Interfaz de Usuario*

#### Prototipo de baja fidelidad

Al principio del desarrollo de la aplicacion, realizamos varios sketches (bocetos) en papel y lápiz, planteándonos la solución para desarrollar la aplicación. Los bocetos resultantes y que nos sirvieron para realizar los "Test de usuarios", son los que se muestran a continuación:

![Prototipo baja fidelidad](http://www.imagenonline.com/imagenes/1/1385-72eb8f15e3890344b67f3598c7059a2050f1b114.jpg)

![Prototipo baja fidelidad](http://www.imagenonline.com/imagenes/1/1386-514d7f4e561c93a096f4c30768140a403a037346.jpg)

![Prototipo baja fidelidad](http://www.imagenonline.com/imagenes/1/1387-8203cf4b939f0c1a946449302e9b474029a91c87.jpg)

![Prototipo baja fidelidad](http://www.imagenonline.com/imagenes/1/1389-56505c72a1b01f15104ee7d4225521d752584925.jpg)




#### Prototipo de alta fidelidad

Para esta etapa, primero definimos la paleta de colores y el tipo de tipografía a emplear en la aplicación. De aquí que guíandonos por la escenografía de la serie, decidimos emplear colores en tonos pasteles (blancos, azules, grises y turquesa).  Y una tipografía sencilla tipo Helvetica/Arial/Sans-serif que también va acorde también con la misma.  

![Paleta de colores](http://www.imagenonline.com/imagenes/1/1390-8d80fa78f35b263445762dcb129ff2a6ea20bc4e.jpg)

Una vez definido los colores y tipografía, empleamos la herramienta Figma, el cual nos permitió diseñar el prototipo que representa nuestro ideal de solución y que sigue con los fundamentos de visual design. En este sentido, el prototipo para los diversos formatos son los que se muestran más adelante. 

Prototipo para Móviles:
![FigmaMobile](http://www.imagenonline.com/imagenes/1/1377-8a180f8827fca9aac07db535911bb077b38e6c10.jpg)

Prototipo para laptos:
![FigmaLaptop](http://www.imagenonline.com/imagenes/2/1509-95e5b304b9323620214a1c06824859b8bf8f2cde.jpg)


#### Testeos de usabilidad

Realizamos varios tests con usuarios, empleando y mostrando el prototipo de baja fidelidad, en dos locaciones distintas:
- Un parque al aire libre.
- Un área de juegos de un mall de la ciudad.

Ambas experiencias, resultaron sumamente enriquecedoras, tanto en el ámbito personal como técnico, por cuanto tuvimos que romper "barreras de miedo" al abordar a personas desconocidas y mostrarles nuestras propuestas; así como, saber escuchar y respetar aquellas opiniones que no nos gustaron mucho al principio, pero que en definitiva aportaron mejoras a la aplicación. Cabe destacar, que aunque alcanzamos a grabar vídeos de algunos test, muchas personas manifestaban resistencia a la misma, razón por la cual, sólo mostraremos algunos vídeos de los test realizados.

Vídeos Testeos 

(Hacer click en los links para ver los vídeos en YouTube)

[Video Test1](https://youtu.be/xRzjs36E3ms)

[Video Test2](https://youtu.be/u6o_s3NeoTY)

[Video Test3](https://youtu.be/wc978JCR44Q)

En resumen, los problemas detectados durante el testeo fueron:
  - Dificultad para entender de que se trataba la aplicación (¿No sabían qué hacer?).
  - Por tratarse de una serie muy de humor irreverente, les gustaría contar con alguna "animación", es decir, escuchar sonido y ver movimiento acorde a la irreverencia.
  - Los usuarios avanzados, quieren conocer y manipular (filtrar y ordenar) más características de los personajes, y no solamente las básicas que consideramos.
  - Los usuarios avanzados les gustaría ver las características mencionadas en el punto anterior, de forma "interactiva", es decir, que una vez seleccionada la imagen o tarjeta de algún personaje, esta se dé vuelta y muestre la información, sin tener que ir a abrir o buscar una nueva página en la aplicación.
  - En cuanto a los porcentajes o cálculos a ofrecer, les gustaría ver en una línea, algo sencillo (no muy llamativo) y que pudiese ofrecer la opción de elegir por género y especie, y mejor por ambos. 

 
## *3. Implementación de la Interfaz de Usuario (HTML/CSS/JS)*

Una vez que realizamos el testeo y detectamos los problemas, diseñamos la interfaz y  trabajamos en su implementación, usando JavaScript (ES6), HTML, Manejo del DOM y CSS, "NO" empleamos librerías o frameworks.

Es así como, la aplicación ofrece:

1. Mostrar las imagenes, nombres, género y especie de todos los personajes de la serie.
2. Permitir al usuario filtrar y ordenar a los personajes por orden alfabético (nombre), género y especie (una condición a la vez).
3. Permitir al usuario filtrar y ordenar a los personajes para dos condiciones simultáneas, es decir, puede ordenar por un género específico y una especie específica (Ejemplo: Género/Femenino y Especie/Humano).
4. Cálculos estadísticos de la serie, en cuanto al género.
5. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.


El resultado (PrtScr) de la aplicación es la que se muestra a continuación:
![Imagen PrtScr de la aplicacion](http://www.imagenonline.com/imagenes/2/1529-a0be90c395697a7243ae12937e2c31323370c52b.jpg)   


## *4. Pruebas unitarias*

Implementamos algunas pruebas siguiendo las recomendaciones indicadas en el proyecto original, sin embargo éstas no nos resultaron exitosas a pesar de los esfuerzos realizados, por lo que nos comprometimos a revisar este punto más a fondo para solventarlo más adelante.  

![PrtScr-funciones npm](http://www.imagenonline.com/imagenes/2/1527-a418c3f425180c5b4c8c38146e9c71ea14f8712a.png)
![PrtScr-npm test](http://www.imagenonline.com/imagenes/2/1528-4bc2ee99831b878992eaf3f30a7506acc42a643d.jpg)


## *5. Heurísticas de usabilidad*

Revisando el diseño implementando bajo las heurísticas de usabilidad, encontramos que cumple se cumple con la mayoría de los aspectos revisados (Visibilidad del estado del sistema, empate entre el sistema y el mundo real, etc.). Sin embargo, nos dimos cuenta que no contamos con un "vínculo para volver a la página inicial" (aspecto correspondiente al Control y libertad para el usuario), el cual debería ser implementado de contar con más tiempo para el desarrollo. 


Resultado del Test Heurística de Usabilidad de la aplicación:

![Evaluacion Heuristica Pag1](http://www.imagenonline.com/imagenes/1/1375-4ef5da48c29e4369f6f3a861a7f9cf895f009772.jpg)

![Evaluacion Heuristica Pag2](http://www.imagenonline.com/imagenes/1/1376-6176b36c8fd195300ccec61f5e33520f0f5b139f.jpg)

¡Gracias por su atención!

Las Desarrolladoras
C. Leal y A. Valera
Julio 2019
