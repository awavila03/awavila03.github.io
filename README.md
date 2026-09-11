# Portafolio - GeoAvila

Portafolio personal de **Angel Avila**, especialista GIS especializado en diagnóstico de interferencias de infraestructura (defensas ribereñas, vías, drenaje pluvial).

🔗 [awavila03.github.io](https://awavila03.github.io)

## Sobre el proyecto

Sitio estático (HTML/CSS/JS vanilla) alojado en GitHub Pages. Presenta una galería dinámica de proyectos GIS, cada uno con su propio mapa interactivo (Leaflet) mostrando las capas geoespaciales reales del trabajo realizado.

## Características

- **Galería dinámica de proyectos**: se renderizan desde un array de datos (`js/proyectos-data.js`), no están hardcodeados en el HTML.
- **Paginación "Ver más / Ver menos"**: muestra los 6 proyectos más recientes por defecto, con opción de expandir a todos.
- **Modal de detalle con vista dividida**: al hacer clic en un proyecto, se abre una ventana con la información (cliente, empresa, descripción, viñetas de trabajo técnico) a la izquierda y un mapa Leaflet interactivo a la derecha.
- **Múltiples capas GeoJSON por proyecto**: cada proyecto puede tener varias capas (levantamiento, polígonos finales, estructuras) cargadas de forma independiente, con selector de capas cuando hay más de una.
- **Popups con atributos de campo**: las estructuras levantadas muestran su tipificación y fotografía al hacer clic, usando las propiedades del GeoJSON exportado desde QGIS.
- **Cierre de modal**: por botón, clic fuera del modal, o tecla Esc.

## Estructura del proyecto
```text
├── index.htm # Página principal (todas las secciones del portafolio)
├── css/
│ ├── style.css # Estilos generales del sitio
│ └── leaflet.css # Estilos base de Leaflet
├── js/
│ ├── scriptt.js # Menú responsive + animación de habilidades
│ ├── proyectos-data.js # Datos de cada proyecto (fuente de la galería)
│ ├── portafolio.js # Render de galería, paginación y modal de detalle
│ └── leaflet.js # Librería Leaflet
├── data/ # múltiples capas GeoJSON por proyecto (en progreso)
└── images/ # Fotografías e imágenes de portada
```

## Stack técnico

- HTML5, CSS3, JavaScript (vanilla, sin frameworks)
- [Leaflet](https://leafletjs.com/) para los mapas interactivos
- OpenStreetMap como capa base de tiles

## Pendientes

- [ ] Completar `descripcionLarga` y `puntosClave` de los proyectos restantes
- [ ] Exportar y agregar los GeoJSON faltantes (`capas`) por proyecto
- [ ] Revisar proyecto con imagen duplicada en la galería
- [ ] Pasada de semántica HTML y accesibilidad
- [ ] Evaluar fuente satelital con mayor zoom nativo (Esri World Imagery) para mapas de detalle

## Autor

Angel Avila — GIS Specialist