// Cada objeto es un proyecto de tu portafolio.
// Para agregar uno nuevo, copia un bloque {...} y cambia los valores.

const proyectos = [

  // Agrega aquí tu proyecto nuevo/faltante, mismo formato
  
  {
    id: "defensa-rio-rimac",
    titulo: "Defensa Ribereña del Río Rímac (Paquete R-11)",
    categoria: "Soluciones Integrales",
    empresa: "Consorcio Soluciones Integrales Rímac S.A.C.",
    cliente: "Autoridad Nacional de Infraestructura",
    imagen: "images/Imagen1.jpg",
    descripcionCorta: "Identificación y Diagnóstico de interferencias",
    descripcionLarga: "Lideré el equipo de interferencias para el proyecto ''Diseño Definitivo para las Soluciones Integrales Correspondientes al Paquete R-11 del Río Rímac'', del levantamiento de campo al informe técnico final. Con un equipo reducido a la mitad, mantuvimos los entregables a tiempo gracias a automatización y flujos bien diseñados.",
    puntosClave: [
      "Sincronización QField → PostgreSQL en tiempo real vía VPN Tailscale",
      "Vistas dinámicas con PostGIS para generación automática de planos",
      "Migración a Mergin Maps CE con mergin-db-sync para sincronización de fotos en campo",
      "Edición colaborativa de informes con Nextcloud + OnlyOffice"
    ],
    capas: [
      { nombre: "lev_campo",
        archivo: "data/rimac-levantamiento.geojson",
        color: "#3498db"
      }
    ],
    centro: [-12.0287, -77.0022],
    zoom: 12,
    fecha_inicio: "2024-06",
    fecha_final: "2026-05"
  },
  {
    id: "drenaje-tumbes",
    titulo: "Drenaje Pluvial en los distritos de Tumbes y Corrales",
    categoria: "Drenaje Pluvial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Consorcio DOME del Norte",
    imagen: "images/drenaje-tumbes.jpg",
    descripcionCorta: "Identificación y Diagnóstico de interferencias",
    descripcionLarga: "Lideré el equipo técnico para el levantamiento de interferencias en el proyecto Mejoramiento y Ampliación del Servicio de Drenaje Pluvial Urbano en los distritos de Tumbes y Corrales, nuestro proyecto principal en PIZE. Fue mi primer contacto real con PostgreSQL y PostGIS, y aquí entendí lo que una base de datos geoespacial bien diseñada puede cambiar en la producción de un proyecto. La metodología que desarrollamos aquí funcionó tan bien que luego se replicó en dos encargos adicionales para otro cliente, Autopista del Norte, en la Concesión Red Vial 4.",
    puntosClave: [
      "Base de datos geoespacial centralizada con esquemas, constraints e índices espaciales",
      "Formularios QField con captura múltiple de fotos por estructura",
      "Servicios WFS/WMS con GeoServer conectados a PostgreSQL para consultas en tiempo real",
      "Fichas técnicas automatizadas con QGIS Atlas + funciones aggregate desde PostgreSQL",
      "Elaboración de planos finales en ArcGIS según requerimiento del proyecto"
    ],
    capas: [
      { nombre: "lev_campo",
        archivo: "data/rimac-levantamiento.geojson",
        color: "#3498db"
      }
    ],
    centro: [-3.5669, -80.4515],
    zoom: 12,
    fecha_inicio: "2023-04",
    fecha_final: "2024-05"
  },
  {
    id: "via-huarmey",
    titulo: "Vía de Evitamiento Huarmey",
    categoria: "Infraestructura Vial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Autopista del Norte S.A.C.",
    imagen: "images/Imagen2.JPG",
    descripcionCorta: "Inventario de interferencias",
    descripcionLarga: "Lideré el equipo técnico para el levantamiento de interferencias en el primer tramo del contrato ''Elaboración del Inventario de Interferencias y Predios sin liberar del Intercambio Vial Salaverry; y las Vías de Evitamiento Huarmey y Virú, de la Concesión Red Vial 4. Aplicamos la misma estructura de base de datos geoespacial centralizada y los flujos QField/PostgreSQL/PostGIS desarrollados en Tumbes, avanzando de sur a norte a lo largo de los tres tramos del contrato.",
    puntosClave: [
      "Primer tramo de un barrido de sur a norte junto con Salaverry y Virú, bajo un mismo contrato",
      "Servicios WFS/WMS con GeoServer conectados a PostgreSQL para consultas en tiempo real",
      "Elaboración de planos finales en ArcGIS según requerimiento del tramo"
    ],
    capas: [
      { nombre: "lev_campo",
        archivo: "data/rimac-levantamiento.geojson",
        color: "#3498db"
      }
    ],
    centro: [-10.0679, -78.1522],
    zoom: 12,
    fecha_inicio: "2023-09",
    fecha_final: "2023-12"
  },
  {
    id: "intercambio-salaverry",
    titulo: "Intercambio Vial Salaverry",
    categoria: "Infraestructura Vial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Autopista del Norte S.A.C.",
    imagen: "images/Imagen3.jpg",
    descripcionCorta: "Inventario de interferencias",
    descripcionLarga: "Lideré el equipo técnico para el levantamiento de interferencias en el segundo tramo del contrato ''Elaboración del Inventario de Interferencias y Predios sin liberar del Intercambio Vial Salaverry; y las Vías de Evitamiento Huarmey y Virú, de la Concesión Red Vial 4. Continuamos el barrido de sur a norte iniciado en Huarmey, reutilizando la misma estructura de base de datos geoespacial centralizada y los flujos QField/PostgreSQL/PostGIS desarrollados en Tumbes.",
    puntosClave: [
      "Segundo tramo de un barrido de sur a norte junto con Huarmey y Virú, bajo un mismo contrato",
      "Servicios WFS/WMS con GeoServer conectados a PostgreSQL para consultas en tiempo real",
      "Elaboración de planos finales en ArcGIS según requerimiento del tramo"
    ],
    capas: [
      { nombre: "lev_campo",
        archivo: "data/rimac-levantamiento.geojson",
        color: "#3498db"
      }
    ],
    centro: [-8.2214, -78.9856],
    zoom: 12,
    fecha_inicio: "2023-09",
    fecha_final: "2023-12"
  },
  {
    id: "via-viru",
    titulo: "Vía de Evitamiento Virú",
    categoria: "Infraestructura Vial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Autopista del Norte S.A.C.",
    imagen: "images/Imagen4.jpg",
    descripcionCorta: "Identificación y Diagnóstico de interferencias",
    descripcionLarga: "Último tramo del contrato ''Elaboración del Inventario de Interferencias y Predios sin liberar del Intercambio Vial Salaverry; y las Vías de Evitamiento Huarmey y Virú, de la Concesión Red Vial 4: el inventario de interferencias y predios sin liberar de la vía de evitamiento de Virú, el punto más al norte del barrido. Cerramos así el contrato, tras avanzar de sur a norte desde Huarmey, aplicando la misma base de datos geoespacial y los flujos QField/PostgreSQL/PostGIS consolidados en Tumbes.",
    puntosClave: [
      "Tramo final de un barrido de sur a norte junto con Huarmey y Salaverry, bajo un mismo contrato",
      "Servicios WFS/WMS con GeoServer conectados a PostgreSQL para consultas en tiempo real",
      "Elaboración de planos finales en ArcGIS según requerimiento del tramo"
    ],
    capas: [
      { nombre: "lev_campo",
        archivo: "data/rimac-levantamiento.geojson",
        color: "#3498db"
      }
    ],
    centro: [-8.4167, -78.75],
    zoom: 12,
    fecha_inicio: "2023-09",
    fecha_final: "2023-12"
  },
  {
    id: "via-casma",
    titulo: "Vía de Evitamiento - Casma",
    categoria: "Infraestructura Vial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Autopista del Norte S.A.C.",
    imagen: "images/Imagen5.jpg",
    descripcionCorta: "Identificación y Diagnóstico de interferencias",
    descripcionLarga: "Encargo en simultáneo con el proyecto de Tumbes y Corrales, para un nuevo cliente, Autopista del Norte, aplicando la misma metodología en la Concesión Red Vial 4 — en este caso, el inventario de predios e interferencias de la vía de evitamiento de Casma. Reutilizamos la base de datos geoespacial centralizada y los flujos de trabajo con QField y PostgreSQL/PostGIS que veníamos consolidando en Tumbes, adaptándolos a esta nueva zona y cliente.",
    puntosClave: [
      "Reutilización de la base de datos geoespacial centralizada, con esquemas e índices espaciales heredados de Tumbes",
      "Formularios QField adaptados a la nueva zona y cliente",
      "Fichas técnicas automatizadas con QGIS Atlas + funciones aggregate desde PostgreSQL"
    ],
    capas: [
      { nombre: "lev_campo",
        archivo: "data/rimac-levantamiento.geojson",
        color: "#3498db"
      }
    ],
    centro: [-9.4739, -78.3006],
    zoom: 12,
    fecha_inicio: "2023-06",
    fecha_final: "2023-17"
  },
  /* {
    id: "aeropuerto-tingo-maria",
    titulo: "Aeropuerto - Tingo María",
    categoria: "Inventario Predial",
    imagen: "images/Imagen6.jpg",
    descripcionLarga: "Pendiente de completar.",
    geojson: null,
    centro: [-9.2965, -75.9955],
    zoom: 13,
    fecha: "2024-06-01"
  }, */
  {
    id: "defensa-qda-cansas",
    titulo: "Defensa Ribereña - Qda. Cansas",
    categoria: "Inventario Predial y de Interferencias",
    imagen: "images/Imagen7.jpg",
    descripcionLarga: "Pendiente de completar.",
    geojson: null,
    centro: [-9.47, -78.30], // verifica esta ubicación, no tengo certeza exacta
    zoom: 12,
    fecha: "2024-07-01"
  },
  {
    id: "defensa-rio-chicama",
    titulo: "Defensa Ribereña - Río Chicama",
    categoria: "Inventario Predial y de Interferencias",
    imagen: "images/Imagen8.jpg",
    descripcionLarga: "Pendiente de completar.",
    geojson: null,
    centro: [-7.8167, -79.15],
    zoom: 12,
    fecha: "2024-08-01"
  },
  {
    id: "defensa-rio-viru",
    titulo: "Defensa Ribereña - Río Virú",
    categoria: "Inventario Predial y de Interferencias",
    imagen: "images/Imagen9.jpg",
    descripcionLarga: "Pendiente de completar.",
    geojson: null,
    centro: [-8.4167, -78.75],
    zoom: 12,
    fecha: "2024-09-01"
  },

];