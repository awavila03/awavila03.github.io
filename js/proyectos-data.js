// Cada objeto es un proyecto de tu portafolio.
// Para agregar uno nuevo, copia un bloque {...} y cambia los valores.

const proyectos = [

  // Agrega aquí tu proyecto nuevo/faltante, mismo formato
  
  {
    id: "defensa-rio-rimac",
    titulo: "Defensa Ribereña del Río Rímac (Paquete R-11)",
    categoria: "Soluciones Integrales",
    empresa: "Consorcio Soluciones Integrales Rímac S.A.C.",
    cliente: "Autoridad Nacional de Infraestructura (ANIN)",
    imagen: "images/Proyectos/defensa-rimac.JPG",
    descripcionCorta: "Identificación y diagnóstico de interferencias",
    descripcionLarga: "Como Especialista GIS de Interferencias, lideré la gestión geoespacial del proyecto “Diseño Definitivo para las Soluciones Integrales Correspondientes al Paquete R-11 del Río Rímac”, desde la preparación del levantamiento de campo hasta la producción de entregables técnicos. Diseñé y adapté flujos de trabajo con QGIS, QField y PostgreSQL/PostGIS, y posteriormente conduje la migración a Mergin Maps Community Edition para asegurar la continuidad del trabajo sin conexión y la sincronización de datos y fotografías al recuperar conectividad.",
    puntosClave: [
      "Sincronización QField → PostgreSQL en tiempo real vía VPN Tailscale",
      "Vistas dinámicas con PostGIS para generación automática de planos",
      "Migración a Mergin Maps CE con DB Sync para integrar los datos con PostGIS y Media Sync para transferir las fotografías a almacenamiento externo",
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
    imagen: "images/Proyectos/drenaje-tumbes.jpg",
    descripcionCorta: "Identificación y diagnóstico de interferencias",
    descripcionLarga: "Como Coordinador GIS, lideré un equipo técnico de cinco personas encargado del levantamiento y procesamiento de interferencias para el proyecto “Mejoramiento y Ampliación del Servicio de Drenaje Pluvial Urbano en los distritos de Tumbes y Corrales”. Este servicio marcó la incorporación de PostgreSQL/PostGIS a mi flujo de trabajo, lo que permitió centralizar la edición, el control de calidad y la producción de entregables. La metodología desarrollada se convirtió posteriormente en la base para los servicios ejecutados para Autopista del Norte en la Concesión Red Vial 4.",
    puntosClave: [
      "Base de datos geoespacial centralizada con esquemas, constraints e índices espaciales",
      "Formularios QField con captura múltiple de fotos por estructura",
      "Servicios WFS/WMS con GeoServer conectados a PostgreSQL para consultas en tiempo real",
      "Formularios QField con captura múltiple de fotografías y cálculo automático de atributos territoriales mediante expresiones QGIS",
      "Generación automatizada de fichas técnicas mediante QGIS Atlas",
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
    fecha_inicio: "2023-03",
    fecha_final: "2024-05"
  },
  {
    id: "via-huarmey",
    titulo: "Vía de Evitamiento Huarmey",
    categoria: "Infraestructura Vial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Autopista del Norte S.A.C.",
    imagen: "images/Proyectos/Imagen2.JPG",
    descripcionCorta: "Inventario de interferencias",
    descripcionLarga: "El levantamiento de este servicio se inició en la Vía de Evitamiento Huarmey, uno de los tres ámbitos comprendidos en el contrato “Elaboración del Inventario de Interferencias y Predios sin liberar del Intercambio Vial Salaverry y las Vías de Evitamiento Huarmey y Virú”. Como Coordinador GIS, organicé el flujo de captura y procesamiento de interferencias, adaptando la base de datos geoespacial y los formularios QField desarrollados en Tumbes a los requerimientos de la infraestructura vial.",
    puntosClave: [
      "Inicio del levantamiento de campo del servicio vial desarrollado en Huarmey, Salaverry y Virú",
      "Adaptación del modelo de datos y los formularios QField al inventario de infraestructura vial",
      "Gestión centralizada y multiusuario de la información mediante PostgreSQL/PostGIS",
      "Control de calidad y consolidación técnica del inventario de interferencias",
      "Elaboración de planos finales en ArcGIS según los requerimientos del servicio"
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
    imagen: "images/Proyectos/Imagen3.jpg",
    descripcionCorta: "Inventario de interferencias",
    descripcionLarga: "El Intercambio Vial Salaverry fue otro de los tres ámbitos comprendidos en el servicio “Elaboración del Inventario de Interferencias y Predios sin liberar del Intercambio Vial Salaverry y las Vías de Evitamiento Huarmey y Virú”. Tras iniciar las actividades en Huarmey, continuamos el levantamiento en Salaverry manteniendo el mismo modelo de datos centralizado y el flujo de captura con QField y PostgreSQL/PostGIS. Como Coordinador GIS, organicé el procesamiento y control de calidad de los registros correspondientes a este ámbito vial.",
    puntosClave: [
      "Ámbito integrante del servicio vial desarrollado conjuntamente en Huarmey, Salaverry y Virú",
      "Continuidad del levantamiento iniciado en la Vía de Evitamiento Huarmey",
      "Reutilización del modelo de datos centralizado y los formularios digitales de campo",
      "Procesamiento y control de calidad de los registros mediante QGIS y PostgreSQL/PostGIS",
      "Elaboración de planos finales en ArcGIS según los requerimientos del servicio"
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
    imagen: "images/Proyectos/Imagen4.jpg",
    descripcionCorta: "Inventario de interferencias",
    descripcionLarga: "El levantamiento de la Vía de Evitamiento Virú se realizó durante el retorno desde Salaverry y formó parte del mismo servicio contractual que comprendió también la Vía de Evitamiento Huarmey y el Intercambio Vial Salaverry. Como Coordinador GIS, mantuve la continuidad del modelo de datos centralizado y del flujo de captura en campo, coordinando el procesamiento y control de calidad de la información. Esto permitió conservar una estructura homogénea entre los tres ámbitos para la consolidación del inventario de interferencias.",
    puntosClave: [
      "Ámbito integrante del servicio vial desarrollado conjuntamente en Huarmey, Salaverry y Virú",
      "Levantamiento de campo realizado durante el retorno desde el Intercambio Vial Salaverry",
      "Aplicación de un modelo de datos homogéneo para los tres ámbitos del contrato",
      "Procesamiento y control de calidad mediante QGIS y PostgreSQL/PostGIS",
      "Elaboración de planos finales en ArcGIS según los requerimientos del servicio"
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
    titulo: "Vía de Evitamiento de Casma",
    categoria: "Infraestructura Vial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Autopista del Norte S.A.C.",
    imagen: "images/Proyectos/Imagen5.jpg",
    descripcionCorta: "Inventario de interferencias",
    descripcionLarga: "En paralelo al proyecto de drenaje pluvial de Tumbes y Corrales, coordiné la gestión GIS del servicio “Identificación e inventario de Predios e Interferencias del Derecho de Vía de la Vía de Evitamiento de Casma”, correspondiente a la Concesión Red Vial 4. Para este encargo adapté el modelo de datos PostgreSQL/PostGIS y los formularios QField desarrollados en Tumbes, demostrando que la metodología podía reutilizarse con otro cliente y en un proyecto de infraestructura vial.",
    puntosClave: [
      "Primer servicio desarrollado para Autopista del Norte en la Concesión Red Vial 4",
      "Ejecución simultánea con el proyecto de drenaje pluvial de Tumbes y Corrales",
      "Adaptación del modelo de datos PostgreSQL/PostGIS al inventario del derecho de vía",
      "Configuración de formularios QField para el levantamiento de predios e interferencias",
      "Elaboración de fichas técnicas y planos finales según los requerimientos del servicio"
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
    fecha_final: "2023-07"
  },
  /* {
    id: "aeropuerto-tingo-maria",
    titulo: "Aeropuerto - Tingo María",
    categoria: "Inventario Predial",
    imagen: "images/Proyectos/Imagen6.jpg",
    descripcionLarga: "Pendiente de completar.",
    geojson: null,
    centro: [-9.2965, -75.9955],
    zoom: 13,
    fecha: "2024-06-01"
  }, */
  {
    id: "defensa-qda-cansas",
    titulo: "Defensas Ribereñas de la Quebrada Cansas (Paquete Q-03)",
    categoria: "Soluciones Integrales",
    empresa: "Gino Antonio Pigato Rodríguez",
    cliente: "Consorcio S&F",
    imagen: "images/Proyectos/Imagen7.jpg",
    descripcionCorta: "Identificación y diagnóstico de interferencias",
    descripcionLarga: "Como Coordinador Técnico de Campo, coordiné el levantamiento de interferencias para el diseño a nivel de expediente técnico de las defensas ribereñas de la quebrada Cansas-Chanchajalla. Este proyecto marcó mi primera implementación autónoma de QField para la captura georreferenciada de información sin conexión. Diseñé el formulario digital, capacité al personal de campo y organicé el procesamiento de los datos técnicos y fotográficos utilizados para elaborar fichas por interferencia, planos e informes.",
    puntosClave: [
      "Primera implementación autónoma de QField para el levantamiento de interferencias",
      "Diseño del formulario digital y sincronización offline de la información",
      "Capacitación del personal de campo en el uso básico de QField",
      "Organización y procesamiento de los registros técnicos y fotográficos",
      "Elaboración de fichas por interferencia, planos e informes de campo"
    ],
    centro: [-14.0253, -75.6890],
    zoom: 12,
    fecha_inicio: "2022-10",
    fecha_final: "2023-02"
  },
  {
    id: "defensa-rio-chicama",
    titulo: "Defensa Ribereña del Río Chicama (Paquete R-06)",
    categoria: "Soluciones Integrales",
    empresa: "Consorcio Hidráulico del Norte (CHN)",
    cliente: "Obrascón Huarte Lain S.A. (OHLA)",
    imagen: "images/Proyectos/Imagen8.jpg",
    descripcionCorta: "Levantamiento de interferencias",
    descripcionLarga: "Como parte del Paquete R-06, coordiné el levantamiento de interferencias en el valle del río Chicama, uno de los dos ámbitos que integraron el proyecto de defensas ribereñas junto con el río Virú. El trabajo se desarrolló con una metodología preestablecida basada en la referenciación manual de estructuras sobre ortofotos y el registro fotográfico con coordenadas. Posteriormente, organicé y procesé la información en gabinete, vinculando las fotografías a cada estructura mediante ArcGIS Attachments para preparar el entregable independiente correspondiente al río Chicama.",
    puntosClave: [
      "Ámbito integrante del Paquete R-06 junto con el valle del río Virú",
      "Coordinación del levantamiento de interferencias de un equipo de 24 técnicos",
      "Referenciación manual de estructuras mediante ortofotos",
      "Registro fotográfico con coordenadas para identificar cada estructura",
      "Vinculación manual de fotografías mediante ArcGIS Attachments",
      "Procesamiento de información para el entregable independiente del río Chicama"
    ],
    capas: [
      // Pendiente: el respaldo de este levantamiento está en discos por montar en el servidor casero
    ],
    centro: [-7.8167, -79.15],
    zoom: 12,
    fecha_inicio: "2021-09",
    fecha_final: "2022-10"
  },
  {
    id: "defensa-rio-viru",
    titulo: "Defensa Ribereña - Río Virú (Paquete R-06)",
    categoria: "Soluciones Integrales",
    empresa: "Consorcio Hidráulico del Norte (CHN)",
    cliente: "Obrascón Huarte Lain S.A. (OHLA)",
    imagen: "images/Proyectos/Imagen9.jpg",
    descripcionCorta: "Levantamiento de interferencias",
    descripcionLarga: "Dentro del mismo Paquete R-06, coordiné el levantamiento de interferencias correspondiente al valle del río Virú, tratado como un ámbito y entregable independiente del río Chicama. Apliqué la misma metodología de referenciación manual de estructuras sobre ortofotos y registro fotográfico con coordenadas para mantener una estructura homogénea entre ambos valles. Posteriormente, organicé y procesé la información en gabinete, vinculando las fotografías mediante ArcGIS Attachments para elaborar los listados e informes correspondientes al río Virú.",
    puntosClave: [
      "Ámbito integrante del Paquete R-06 junto con el valle del río Chicama",
      "Aplicación de una metodología homogénea para los dos ámbitos del proyecto",
      "Referenciación manual de estructuras mediante ortofotos",
      "Organización y vinculación de fotografías mediante ArcGIS Attachments",
      "Elaboración de listados e informes para el entregable independiente del río Virú"
    ],
    capas: [
      // Pendiente: el respaldo de este levantamiento está en discos por montar en el servidor casero
    ],
    centro: [-8.4167, -78.75],
    zoom: 12,
    fecha_inicio: "2021-09",
    fecha_final: "2022-10"
  },

];