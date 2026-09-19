# Portafolio profesional | Geoavila

Portafolio profesional de **Angel Williams Avila Arauco**, especialista GIS con experiencia en gestión de información geoespacial para proyectos de infraestructura, principalmente en identificación y diagnóstico de interferencias.

🔗 [Ver portafolio publicado](https://awavila03.github.io)

## Sobre el proyecto

Sitio web estático desarrollado con HTML, CSS y JavaScript vanilla, y publicado mediante GitHub Pages.

El portafolio presenta mi perfil profesional, experiencia, habilidades técnicas y principales proyectos GIS. Cada proyecto dispone de una ficha de detalle con información técnica y un mapa interactivo desarrollado con Leaflet.

La estructura está preparada para incorporar progresivamente las capas GeoJSON correspondientes a cada proyecto.

## Características

- **Galería dinámica de proyectos:** las tarjetas se generan desde los datos almacenados en `js/proyectos-data.js`.
- **Ordenamiento cronológico:** los proyectos se organizan automáticamente mediante su fecha de finalización.
- **Visualización responsive:** se muestran inicialmente 6 proyectos en escritorio y 3 en dispositivos móviles.
- **Información visible en celulares:** el título se presenta permanentemente sobre la parte inferior de cada imagen.
- **Ventana de detalle:** presenta fechas, tipo de proyecto, titular, empresa, descripción y principales actividades realizadas.
- **Mapa interactivo:** cada proyecto dispone de un mapa Leaflet centrado en su ámbito de trabajo.
- **Soporte para múltiples capas:** cada proyecto puede cargar una o varias capas GeoJSON de manera independiente.
- **Control de capas:** aparece automáticamente cuando el proyecto contiene más de una capa geoespacial.
- **Popups configurables:** permiten mostrar atributos y fotografías almacenados en los GeoJSON.
- **Formulario de contacto:** permite enviar mensajes sin abandonar el portafolio.
- **Diseño adaptable:** la navegación, galería, currículum y ventana de detalle se reorganizan según el tamaño de pantalla.
- **Cierre de la ventana de detalle:** mediante el botón de cierre, un clic sobre el fondo oscuro o la tecla `Escape`.

## Estructura del proyecto

```text
├── css/
│   ├── leaflet.css          # Estilos base de Leaflet
│   └── style.css            # Diseño general y reglas responsive
├── data/
│   └── ...                  # Capas GeoJSON de los proyectos
├── documentos/
│   └── CV Angel Avila 2026.pdf
├── images/
│   ├── Proyectos/           # Imágenes de las tarjetas de proyectos
│   └── ...                  # Imágenes generales del sitio
├── js/
│   ├── leaflet.js           # Librería Leaflet
│   ├── portafolio.js        # Galería, modal y mapas interactivos
│   ├── proyectos-data.js    # Información y configuración de proyectos
│   └── scriptt.js           # Menú, formulario y funciones generales
├── index.htm                # Página principal
└── README.md                # Documentación del proyecto
```

## Stack técnico

- HTML5
- CSS3
- JavaScript vanilla
- [Leaflet](https://leafletjs.com/) para los mapas interactivos
- OpenStreetMap como mapa base
- GitHub Pages para publicación

## Pendiente

- [ ] Exportar e incorporar las capas GeoJSON definitivas de cada proyecto, actualizar su configuración en `js/proyectos-data.js` y comprobar sus atributos, fotografías y extensión espacial.

## Autor

**Angel Williams Avila Arauco**  
Especialista GIS