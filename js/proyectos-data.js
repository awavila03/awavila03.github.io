// Cada objeto es un proyecto de tu portafolio.
// Para agregar uno nuevo, copia un bloque {...} y cambia los valores.

const proyectos = [
  {
    id: "defensa-rio-rimac",
    titulo: "Defensa Ribereña del Río Rímac (Paquete R-11)",
    categoria: "Soluciones Integrales",
    empresa: "Consorcio Soluciones Integrales Rímac S.A.C.",
    cliente: "Autoridad Nacional de Infraestructura (ANIN)",
    imagen: "images/Proyectos/defensa-rimac.JPG",
    descripcionCorta: "Identificación y diagnóstico de interferencias",

    caseStudy: {
      role: "Especialista GIS de Interferencias",
      tagline:
        "Mantener en marcha un levantamiento de más de 30 000 registros, incluso en sectores sin señal.",
      challenge:
        "El levantamiento abarcó el río Rímac y sus quebradas, con sectores sin cobertura, más de 30 000 registros y cerca de 90 000 fotografías. El flujo inicial dependía de PostGIS en línea y de transferencias manuales de fotos.",
      contribution:
        "Organicé el trabajo GIS entre campo y gabinete para un despliegue inicial de 24 técnicos, que luego continuó con un equipo permanente de 10 personas. Cuando la falta de conectividad limitó el método inicial, dirigí la migración hacia una solución offline que mantuviera relacionados los registros y sus fotografías.",
      solution: [
        "Estructuré registros, relaciones y controles en PostgreSQL/PostGIS.",
        "Configuré los formularios de campo con QGIS y QField.",
        "Migré el levantamiento a Mergin Maps para operar sin conexión.",
        "Integré DB Sync y Media Sync para centralizar datos y fotografías.",
        "Preparé vistas PostGIS para agilizar planos y entregables."
      ],
      outcome:
        "El equipo pudo continuar trabajando en sectores sin cobertura y sincronizar la información al recuperar conexión. Esto eliminó las transferencias manuales y permitió que los datos y fotografías llegaran ordenados al equipo de gabinete para preparar los entregables.",
      technologies: [
        "QGIS",
        "QField",
        "PostgreSQL/PostGIS",
        "Tailscale",
        "Mergin Maps CE",
        "DB Sync",
        "Media Sync"
      ]
    },

    capas: [
      {
        nombre: "lev_campo",
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

    caseStudy: {
      role: "Coordinador GIS de Interferencias",
      tagline:
        "Un flujo GIS que evolucionó de la sincronización manual a la edición directa sobre PostGIS en campo.",
      challenge:
        "Los cambios de diseño exigieron varias campañas para concluir con el levantamiento. Con cinco técnicos debíamos gestionar 15 131 registros y alrededor de 45 000 fotografías. La información de las EPS era inconsistente y, en muchos casos, estaba desactualizada.",
      contribution:
        "Configuré en QGIS el modelo de captura, los formularios, las relaciones y los campos autocalculados. También coordiné la evolución del flujo desde la sincronización manual hasta la edición directa sobre PostGIS y el control del avance desde campo.",
      solution: [
        "Primera etapa: preparé proyectos de edición offline en QField y sincronicé diariamente los levantamientos en PostGIS.",
        "Segunda etapa: publiqué capas WFS con GeoServer, accesibles mediante una red privada Tailscale.",
        "Tercera etapa: conecté QField directamente a PostGIS mediante claves XML de autenticación.",
        "Durante las campañas, centralicé el control de calidad y el seguimiento del avance desde campo.",
        "Para los entregables, preparé capas y vistas PostGIS consumidas en ArcGIS mediante Data Interoperability."
      ],
      outcome:
        "El equipo de cinco técnicos completó 15 131 registros y cerca de 45 000 fotografías. La metodología madurada en Tumbes permitió visualizar avances compartidos y luego se reutilizó en los proyectos viales de AUNOR.",
      technologies: [
        "QGIS",
        "QField",
        "PostgreSQL/PostGIS",
        "pgAdmin",
        "Tailscale",
        "GeoServer",
        "ArcGIS"
      ]
    },

    centro: [-3.5669, -80.4515],
    zoom: 12,
    fecha_inicio: "2023-03",
    fecha_final: "2024-05"
  },

  {
    id: "via-huarmey-salaverry-viru",
    titulo:
      "Vía de Evitamiento de Huarmey y Virú, e Intercambio Vial de Salaverry",
    categoria: "Infraestructura Vial",
    empresa: "Corporación PIZE S.A.C.",
    cliente: "Autopista del Norte S.A.C.",
    imagen: "images/Proyectos/Imagen3.jpg",
    descripcionCorta: "Inventario de interferencias",

    caseStudy: {
      role: "Coordinador GIS de Interferencias",
      tagline:
        "Tres obras, un mismo método y una forma sencilla de consultar cada estructura.",
      challenge:
        "Debíamos registrar las estructuras encontradas en Huarmey, Salaverry y Virú, y separar cuáles estaban dentro del derecho de vía y cuáles coincidían con las zonas donde se ejecutarían las obras. La información debía quedar ordenada y lista para entregarse en diferentes formatos.",
      contribution:
        "Organicé el trabajo del equipo y el procesamiento de la información para que los tres inventarios siguieran un mismo criterio. Además, creé un KMZ interactivo que permitía consultar los datos y la fotografía de cada estructura desde Google Earth.",
      solution: [
        "Preparé en QGIS y QField los formularios utilizados durante el levantamiento.",
        "Centralicé la información de los tres ámbitos en una base de datos PostGIS.",
        "Usé ST_Intersects para separar automáticamente las estructuras según su ubicación.",
        "Diseñé en HTML la ficha que mostraba los datos y la fotografía de cada registro.",
        "Organicé los planos, listados, informes y geodatabases correspondientes a cada obra."
      ],
      outcome:
        "El cliente recibió un inventario independiente para cada obra, acompañado de planos, listados, informes y geodatabases. El KMZ ofreció una manera más directa de recorrer las estructuras y revisar sus fotografías desde Google Earth.",
      technologies: [
        "QGIS",
        "QField",
        "PostgreSQL/PostGIS",
        "Tailscale",
        "ArcGIS",
        "Google Earth",
        "HTML"
      ]
    },

    centro: [-9.145, -78.569],
    zoom: 7,
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

    caseStudy: {
      role: "Coordinador GIS de Interferencias",
      tagline:
        "La primera versión de un KMZ personalizado para consultar cada estructura junto con sus datos y fotografía.",
      challenge:
        "El servicio debía completarse en pocos días con un equipo pequeño. Además de registrar las estructuras, debíamos distinguir cuáles se encontraban dentro del derecho de vía y cuáles coincidían con el ámbito constructivo de la obra.",
      contribution:
        "Coordiné el levantamiento y adapté la metodología utilizada en Tumbes a los requerimientos de Autopista del Norte. También diseñé la primera versión del KMZ personalizado para presentar los datos y la fotografía de cada estructura.",
      solution: [
        "Adapté los formularios y la base de datos al inventario solicitado para Casma.",
        "Centralicé la información levantada con QField en una base de datos PostGIS.",
        "Separé las estructuras según el derecho de vía y el ámbito constructivo.",
        "Utilicé las ortofotos en gabinete para revisar y corregir la ubicación de los registros.",
        "Diseñé una tabla HTML de dos columnas con la fotografía en la última fila de cada elemento del KMZ."
      ],
      outcome:
        "El cliente recibió planos, fichas, listados, informes, una geodatabase y un KMZ de consulta. Este primer diseño sirvió como base para la versión mejorada que posteriormente utilicé en Huarmey, Salaverry y Virú.",
      technologies: [
        "QGIS",
        "QField",
        "PostgreSQL/PostGIS",
        "GeoServer",
        "Tailscale",
        "ArcGIS",
        "HTML",
        "Google Earth"
      ]
    },

    centro: [-9.4739, -78.3006],
    zoom: 12,
    fecha_inicio: "2023-06",
    fecha_final: "2023-07"
  },

  {
    id: "defensa-qda-cansas",
    titulo: "Defensas Ribereñas de la Quebrada Cansas (Paquete Q-03)",
    categoria: "Soluciones Integrales",
    empresa: "Gino Antonio Pigato Rodríguez",
    cliente: "Consorcio S&F",
    imagen: "images/Proyectos/Imagen7.jpg",
    descripcionCorta: "Identificación y diagnóstico de interferencias",

    caseStudy: {
      role: "Coordinador Técnico de Campo – Interferencias",
      tagline:
        "Mi primer flujo profesional con QField para conectar ubicación, información y fotografías desde el campo.",
      challenge:
        "El diagnóstico requería recorrer una extensa zona de la quebrada Cansas para verificar directamente las estructuras existentes. Gran parte del terreno era eriazo, el trabajo debía realizarse sin conexión y contábamos con un equipo reducido.",
      contribution:
        "Realicé gran parte del recorrido de campo y coordiné un equipo de tres personas. Preparé el proyecto para QField, vinculé las fotografías con cada registro y organicé la información para elaborar mis primeras fichas de interferencias.",
      solution: [
        "Reuní la información secundaria disponible y preparé la base del levantamiento en QGIS.",
        "Registré las estructuras y sus fotografías con QField sin depender de conexión a internet.",
        "Revisé y completé en gabinete la información recopilada durante los recorridos.",
        "Exporté los registros a Excel y generé las fichas mediante correspondencia con Word.",
        "Preparé planos e insumos para el informe de diagnóstico de interferencias."
      ],
      outcome:
        "Cada estructura quedó identificada con su ubicación, información técnica y registro fotográfico. Este proyecto marcó el inicio de un flujo digital que luego fui mejorando en trabajos de mayor escala.",
      technologies: [
        "QGIS",
        "QField",
        "Microsoft Excel",
        "Microsoft Word",
        "ArcGIS"
      ]
    },

    centro: [-14.0253, -75.689],
    zoom: 12,
    fecha_inicio: "2022-10",
    fecha_final: "2023-02"
  },

  {
    id: "defensa-rio-chicama-viru",
    titulo: "Defensas Ribereñas de los Ríos Chicama y Virú (Paquete R-06)",
    categoria: "Soluciones Integrales",
    empresa: "Consorcio Hidráulico del Norte (CHN)",
    cliente: "Obrascón Huarte Lain S.A. (OHLA)",
    imagen: "images/Proyectos/defensa-chicama-viru.jpg",
    descripcionCorta: "Levantamiento de interferencias",

    caseStudy: {
      role: "Coordinador Técnico de Campo de Interferencias",
      tagline:
        "Coordinar a 24 técnicos y convertir fotografías geoetiquetadas en dos inventarios completos.",
      challenge:
        "Me incorporé cuando el levantamiento ya estaba por comenzar y la metodología aprobada se apoyaba en fichas y croquis manuales. Sin equipos GPS ni una aplicación de captura, debíamos ubicar las estructuras encontradas en Chicama y Virú y preparar entregables independientes para cada río.",
      contribution:
        "Asumí la coordinación operativa de interferencias en ambos ríos y dirigí a un equipo de 24 técnicos. Para conservar una referencia de ubicación, establecí que todas las fotografías se tomaran con el GPS activado y posteriormente organicé la reconstrucción de cada registro.",
      solution: [
        "Organicé la distribución y los criterios de levantamiento para los dos ámbitos.",
        "Utilicé las coordenadas almacenadas en las fotografías para recuperar la ubicación de las estructuras.",
        "Contrasté las fotografías y los croquis con ortofotos durante el trabajo de gabinete.",
        "Optimicé el tamaño de las imágenes y las vinculé a cada registro mediante Attachments.",
        "Preparé planos, listados, informes y geodatabases independientes para Chicama y Virú."
      ],
      outcome:
        "Se completaron dos inventarios independientes, con cada estructura vinculada a su ubicación y registro fotográfico. Esta experiencia evidenció la necesidad de integrar datos, geometrías y fotografías desde el propio trabajo de campo, enfoque que adopté posteriormente con QField.",
      technologies: [
        "ArcGIS",
        "Timestamp",
        "Microsoft Excel",
        "Microsoft Word"
      ]
    },

    centro: [-8.1167, -78.95],
    zoom: 9,
    fecha_inicio: "2021-09",
    fecha_final: "2022-10"
  }
];