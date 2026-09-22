# GEOAVILA | Portafolio profesional GIS

Portafolio profesional de **Angel Williams Avila Arauco**, especialista GIS con experiencia en la gestión de información geoespacial para proyectos de infraestructura, principalmente en identificación y diagnóstico de interferencias.

[Ver portafolio publicado](https://awavila03.github.io)

## Sobre el proyecto

GEOAVILA es un sitio web estático desarrollado con HTML, CSS y JavaScript vanilla, y publicado mediante GitHub Pages.

Esta segunda versión fue rediseñada para presentar la experiencia profesional de una forma más visual y narrativa. En lugar de funcionar como una extensión del currículum, el portafolio muestra cómo se han aplicado herramientas GIS para resolver retos reales de campo, gestionar información espacial y producir entregables técnicos.

El contenido se organiza en cinco secciones:

- Inicio
- Sobre mí
- Workflow
- Proyectos seleccionados
- Contacto

Los proyectos se presentan como casos de estudio compactos, con información sobre el reto, mi aporte, la solución implementada, los resultados obtenidos y las tecnologías utilizadas.

## Características

- **Diseño responsive:** adaptado para celulares, tablets, equipos de escritorio y pantallas grandes.
- **Tema claro y oscuro:** permite cambiar la apariencia del sitio conservando la selección del usuario.
- **Navegación adaptable:** utiliza un menú desplegable en dispositivos móviles y navegación horizontal en escritorio.
- **Flujo de trabajo visual:** resume el proceso seguido desde la preparación de la información hasta la generación de productos GIS.
- **Proyectos generados dinámicamente:** las tarjetas se construyen desde la información almacenada en `js/proyectos-data.js`.
- **Ordenamiento cronológico:** los proyectos se organizan automáticamente según su fecha de finalización.
- **Carrusel responsive:** muestra una tarjeta en móviles, dos en tablets, tres en escritorio y cuatro en pantallas grandes.
- **Navegación por arrastre:** permite recorrer los proyectos utilizando el mouse o gestos táctiles.
- **Controles del carrusel:** incluye botones de navegación e indicadores de posición.
- **Casos de estudio:** cada proyecto dispone de una ventana narrativa con información técnica presentada de forma breve y comprensible.
- **Ventana nativa de detalle:** utiliza el elemento HTML `<dialog>` y puede cerrarse mediante su botón, el fondo exterior o la tecla `Escape`.
- **Mapas interactivos:** cada caso incorpora un mapa desarrollado con Leaflet para contextualizar geográficamente el proyecto.
- **Tecnologías aplicadas:** las herramientas empleadas se muestran de manera independiente en cada caso.
- **Formulario de contacto:** integrado con FormSubmit para recibir consultas desde el portafolio.
- **Accesibilidad básica:** incluye etiquetas semánticas, estados de navegación, controles mediante teclado y textos alternativos.

## Proyectos seleccionados

La versión actual presenta seis casos de estudio:

1. Defensa Ribereña del Río Rímac.
2. Drenaje Pluvial de Tumbes y Corrales.
3. Inventarios de interferencias en Huarmey, Salaverry y Virú.
4. Inventario de interferencias en Casma.
5. Diagnóstico de interferencias en la quebrada Cansas.
6. Diagnóstico de interferencias en los ríos Chicama y Virú.

La información de cada proyecto se administra de manera centralizada desde `js/proyectos-data.js`, lo que permite actualizar el contenido sin modificar la estructura HTML de las tarjetas o del diálogo.

## Estructura del proyecto

```text
├── css/
│   ├── leaflet.css          # Estilos locales de Leaflet
│   ├── responsive.css       # Adaptaciones por tamaño de pantalla
│   └── style.css            # Sistema visual y estilos base
├── data/
│   └── ...                  # Capas GeoJSON de los proyectos
├── documentos/
│   └── CV Angel Avila 2026.pdf
├── images/
│   ├── Proyectos/           # Imágenes de los proyectos
│   ├── layers.png           # Recursos gráficos de Leaflet
│   ├── marker-icon.png
│   ├── marker-shadow.png
│   └── ...                  # Imágenes generales del sitio
├── js/
│   ├── leaflet.js           # Librería Leaflet almacenada localmente
│   ├── main.js              # Tema, navegación e interacciones generales
│   ├── portafolio.js        # Carrusel, casos de estudio y mapas
│   └── proyectos-data.js    # Contenido y configuración de los proyectos
├── index.html               # Página principal
└── README.md                # Documentación del proyecto
```

## Stack técnico

- HTML5
- CSS3
- JavaScript vanilla
- Leaflet
- OpenStreetMap
- FormSubmit
- Git y GitHub
- GitHub Pages

Leaflet y sus recursos gráficos se encuentran almacenados dentro del proyecto. OpenStreetMap se utiliza como proveedor del mapa base y requiere conexión a internet para cargar sus teselas.

## Próximas mejoras

- [ ] Exportar e incorporar las capas GeoJSON definitivas de cada proyecto.
- [ ] Configurar los atributos y ventanas emergentes correspondientes a cada capa.
- [ ] Vincular fotografías a los registros espaciales cuando la información disponible lo permita.
- [ ] Ajustar la interacción del zoom de los mapas mediante `Ctrl` y la rueda del mouse.
- [ ] Comprobar la extensión y visualización de cada proyecto en dispositivos móviles.

## Autor

**Angel Williams Avila Arauco**  
Especialista GIS

[Portafolio](https://awavila03.github.io)