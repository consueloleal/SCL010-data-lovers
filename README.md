# **Data Lovers - Rick y Morty**
![Logo](multimedia/Titulo-Rick-y-Morty.png)
![Gif](multimedia/giphy.gif)

 _Desarrolladoras: **Consuelo Leal** y **Ana Valera**._



## **Índice**

* [Resumen del proyecto](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## **1. Resumen del proyecto**

La serie **RICK AND MORTY** ha sido aclamada a nivel mundial por su originalidad, humor y creatividad. Es una animación de ciencia ficción para adultos creada, producida y escrita por Justin Roiland y Dan Harmon. La serie sigue las desventuras de un _científico (Rick Sánchez)_, y su fácilmente influenciable _nieto (Morty Smith)_, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales intergalácticos. Bajo este escenario, se muestran un sin fin de personajes (493 en total) y éstos a su vez se logran ubicar en distintos géneros (femenino, masculino, desconocido y sin género) y especies (humano, animal, alien, humanoide, robot, parásito, entre otros). 

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


## **2. Fases de desarrollo de la aplicación**

### **2.1. Trello**
![](http://www.imagenonline.com/imagenes/1/1372-1bb081b1cf42353699c437ae02abec97b232ca05.jpg)

Esta herramienta de gestión, nos permitió programar y darle seguimiento a cada una de las actividades del proyecto, a fin de cumplir con el objetivo pautado. 

### **2.2 Historias de usuario**

*Definición de usuarios:*

Para desarrollar la aplicación, primordialmente definimos quienes serían nuestros usuarios, sus objetivos, los datos relevantes y cuando usarían el producto. Por lo que definimos que:
- Usuarios principales del producto: Personas >= 16 años.
- Objetivos de éstos usuarios en relación al producto: Diversión y conocer las características de los personajes de la serie.
- Los datos relevantes que quieren ver: Imagen, nombre, género y especie de los personajes.
- Usarían el producto en sus ratos libres y de ocio.

Una vez que definimos nuestro usuario y entendimos sus necesidades, escribimos las "historias" que representan todo lo que el usuario necesita "hacer y ver" dentro de la aplicación a desarrollar. De allí que detectamos, *3 historias* _(todas cumplidas al término del proyecto)_, las cuales se muestran en la imagen anexa:

![Historia de usuario](http://www.imagenonline.com/imagenes/1/1373-322a1e66e50e1f28f4e5de7fd47e7f928445dedf.jpg)


### **2.3 Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad

Al principio del desarrollo de la aplicacion, realizamos varios sketches (bocetos) en papel y lápiz, planteándonos la solución para desarrollar la aplicación. El boceto resultante y que nos sirvió para realizar los test de usuarios, es el que se muestra a continuación:

![Prototipo baja fidelidad]()

#### Prototipo de alta fidelidad

Para esta etapa, empleamos la herramienta *Figma*, el cual nos permitió diseñar el prototipo que representa nuestro _ideal_ de solución y que sigue con los fundamentos de _visual design_. En este sentido, el prototipo para los diversos formatos son los que se muestran más adelante. 

![FigmaMobile](http://www.imagenonline.com/imagenes/1/1377-8a180f8827fca9aac07db535911bb077b38e6c10.jpg)


![FigmaLaptop]()


OJO OJO OJO
También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad

Realizamos varios tests con usuarios, empleando y mostrando el prototipo de baja fidelidad, en dos locaciones distintas:
- Un parque al aire libre.
- Un área de juegos de un mall de la ciudad.

Ambas experiencias, resultaron sumamente enriquecedoras, tanto en el ámbito personal como técnico, por cuanto tuvimos que romper _"barreras de miedo"_ al abordar a personas desconocidas y mostrarles nuestras propuestas; así como, saber oir y respetar aquellas opiniones que no nos gustaron mucho al principio, pero que en definitiva aportaron mejoras a la aplicación. Cabe destacar, que aunque alcanzamos a grabar vídeos de algunos test, muchas personas manifestaban resistencia a la misma, razón por la cual, sólo mostraremos algunos vídeos de los test realizados.

<iframe width="500" heigth="315" src="https://www.youtube.com/watch?v=xRzjs36E3ms&feature=youtu.be" frameborder="0" allowfullscreen></iframe>



En resumen, los *problemas detectados* durante el testeo fueron:
  - Dificultad para entender de que se trataba la aplicación (¿No sabían qué hacer?).
  - Por tratarse de una serie muy de humor irreverente, les gustaría contar con alguna "animación", es decir, escuchar sonido y ver movimiento acorde a la irreverencia.
  - Los usuarios avanzados, quieren conocer y manipular (filtrar y ordenar) más características de los personajes, y no solamente las básicas que consideramos.
  - Los usuarios avanzados les gustaría ver las características mencionadas en el punto anterior, de forma "interactiva", es decir, que una vez seleccionada la imagen o tarjeta de algún personaje, esta se dé vuelta y muestre la información, sin tener que ir a abrir o buscar una nueva página en la aplicación.

 
## **3. Implementación de la Interfaz de Usuario (HTML/CSS/JS)**

Una vez que realizamos el testeo y detectamos los problemas, diseñamos la interfaz y  trabajamos en su implementación, usando JavaScript (ES6), HTML, Manejo del DOM y CSS, "NO" empleamos librerías o frameworks.

Es así como, la *aplicación ofrece:*

1. Mostrar las imagenes, nombres, género y especie de todos los personajes de la serie.
2. Permitir al usuario filtrar y ordenar a los personajes por orden alfabético (nombre), género y especie (una condición a la vez).
3. Permitir al usuario filtrar y ordenar a los personajes para dos condiciones simultáneas, es decir, puede ordenar por un género específico y una especie específica (Ejemplo: Género/Femenino y Especie/Humano).
4. Cálculos estadísticos de la serie, en cuanto al género.
5. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

![Imagen PrtScr de la aplicacion](http://www.imagenonline.com/imagenes/1/1374-93cb85f94a23853752dce4930f64cd63c9dfe58a.jpg)   


## **4. Pruebas unitarias**
OJO OJO OJO
El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).


## **5. Heurísticas de usabilidad**
Donde se trató de ajustar ésta aplicación, a los principios básicos de diseño visual. Resultando los siguientes:

![Evaluacion Heuristica Pag1](http://www.imagenonline.com/imagenes/1/1375-4ef5da48c29e4369f6f3a861a7f9cf895f009772.jpg)

![Evaluacion Heuristica Pag2](http://www.imagenonline.com/imagenes/1/1376-6176b36c8fd195300ccec61f5e33520f0f5b139f.jpg)


¡Gracias por su atención!
_Las Desarrolladoras_



## **Checklist**

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
