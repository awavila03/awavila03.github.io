// js/portafolio.js
// Genera la galería, controla "Ver más" y muestra el detalle de cada proyecto.

let mostrandoTodos = false;
let mapaDetalle = null;

// Detecta el mismo ancho utilizado por el diseño responsive del CSS
const vistaMovil = window.matchMedia('(max-width: 700px)');

// Ordena los proyectos por su fecha final, del más reciente al más antiguo
const proyectosOrdenados = [...proyectos].sort(
    (a, b) => b.fecha_final.localeCompare(a.fecha_final)
);


/* GENERACIÓN DE LA GALERÍA */

function renderGaleria() {
    const contenedor = document.querySelector(
        '.portafolio .galeria'
    );

    contenedor.innerHTML = '';

    // Muestra 3 proyectos en celulares y 6 en pantallas más grandes
    const cantidadInicial = vistaMovil.matches ? 3 : 6;

    const cantidadAMostrar = mostrandoTodos
        ? proyectosOrdenados.length
        : cantidadInicial;

    proyectosOrdenados
        .slice(0, cantidadAMostrar)
        .forEach(proyecto => {
            contenedor.innerHTML += `
                <div
                    class="proyecto"
                    data-id="${proyecto.id}"
                >
                    <img
                        src="${proyecto.imagen}"
                        alt="${proyecto.titulo}"
                    >

                    <div class="overlay">
                        <h3>${proyecto.titulo}</h3>
                        <p>${proyecto.descripcionCorta}</p>

                        <span class="indicador-detalle">
                            Ver detalles
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
            `;
        });

    // Asigna el evento de apertura a cada tarjeta
    document
        .querySelectorAll('.portafolio .galeria .proyecto')
        .forEach(tarjeta => {
            tarjeta.addEventListener('click', () => {
                abrirDetalle(tarjeta.dataset.id);
            });
        });

    actualizarBotonGaleria(cantidadInicial);
}


/* BOTÓN VER MÁS / VER MENOS */

function actualizarBotonGaleria(cantidadInicial) {
    const btnVerMas = document.getElementById('btn-ver-mas');

    // Oculta el botón cuando todos los proyectos caben inicialmente
    if (proyectosOrdenados.length <= cantidadInicial) {
        btnVerMas.style.display = 'none';
        return;
    }

    btnVerMas.style.display = 'block';

    btnVerMas.querySelector('.texto-boton').textContent =
        mostrandoTodos
            ? 'Ver menos'
            : 'Ver más proyectos';
}


/* FORMATO DE FECHAS */

function formatearFecha(fechaStr) {
    // Separa año y mes para evitar diferencias por zona horaria
    const [anio, mes] = fechaStr.split('-').map(Number);
    const fecha = new Date(anio, mes - 1, 1);

    return fecha.toLocaleDateString('es-PE', {
        month: 'long',
        year: 'numeric'
    });
}


/* APERTURA DEL DETALLE */

function abrirDetalle(id) {
    const proyecto = proyectosOrdenados.find(
        elemento => elemento.id === id
    );

    if (!proyecto) return;

    completarInformacionModal(proyecto);
    mostrarModal();
    crearMapaProyecto(proyecto);
}


/* INFORMACIÓN DEL MODAL */

function completarInformacionModal(proyecto) {
    document.getElementById('modal-titulo').textContent =
        proyecto.titulo;

    document.getElementById('modal-fechas').textContent =
        `De ${formatearFecha(proyecto.fecha_inicio)} ` +
        `a ${formatearFecha(proyecto.fecha_final)}`;

    const imagenModal = document.getElementById('modal-imagen');

    imagenModal.src = proyecto.imagen;
    imagenModal.alt = proyecto.titulo;

    document.getElementById('modal-categoria').textContent =
        proyecto.categoria;

    document.getElementById('modal-cliente').textContent =
        proyecto.cliente || '—';

    document.getElementById('modal-empresa').textContent =
        proyecto.empresa || '—';

    const parrafos = proyecto.descripcionLarga
        .split('\n\n')
        .map(parrafo => `<p>${parrafo}</p>`)
        .join('');

    const listaPuntos = proyecto.puntosClave?.length
        ? `
            <ul>
                ${proyecto.puntosClave
                    .map(punto => `<li>${punto}</li>`)
                    .join('')}
            </ul>
        `
        : '';

    document.getElementById('modal-descripcion').innerHTML =
        parrafos + listaPuntos;
}


/* CONTROL DEL MODAL */

function mostrarModal() {
    const modalProyecto = document.getElementById('modal-proyecto');
    const informacionModal = modalProyecto.querySelector('.modal-info');

    modalProyecto.classList.remove('oculto');

    // Reinicia la descripción en la parte superior
    informacionModal.scrollTop = 0;
}

function cerrarDetalle() {
    document
        .getElementById('modal-proyecto')
        .classList.add('oculto');
}


/* MAPA DEL PROYECTO */

function crearMapaProyecto(proyecto) {
    // Elimina el mapa anterior antes de crear uno nuevo
    if (mapaDetalle) {
        mapaDetalle.remove();
        mapaDetalle = null;
    }

    mapaDetalle = L.map('mapa-detalle', {
        maxZoom: 18
    }).setView(
        proyecto.centro,
        proyecto.zoom
    );

    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; OpenStreetMap contributors'
        }
    ).addTo(mapaDetalle);

    cargarCapasProyecto(proyecto);

    // Leaflet recalcula el tamaño porque el mapa estaba oculto
    setTimeout(() => {
        mapaDetalle.invalidateSize();
    }, 100);
}


/* CARGA DE CAPAS GEOJSON */

function cargarCapasProyecto(proyecto) {
    const capas = proyecto.capas || [];

    const promesas = capas.map(capaInfo =>
        fetch(capaInfo.archivo)
            .then(respuesta => respuesta.json())
            .then(datos => ({
                info: capaInfo,
                data: datos
            }))
            .catch(() => null)
    );

    Promise.all(promesas).then(resultados => {
        const capasSuperpuestas = {};
        const gruposValidos = [];

        resultados.forEach(resultado => {
            // Omite las capas inexistentes o que no pudieron cargarse
            if (!resultado) return;

            const capaLeaflet = L.geoJSON(
                resultado.data,
                {
                    style: () => ({
                        color:
                            resultado.info.color ||
                            '#3388ff',
                        weight: 3,
                        fillOpacity: 0.25
                    }),

                    onEachFeature: (feature, layer) => {
                        agregarPopup(
                            feature,
                            layer
                        );
                    }
                }
            ).addTo(mapaDetalle);

            capasSuperpuestas[
                resultado.info.nombre
            ] = capaLeaflet;

            gruposValidos.push(capaLeaflet);
        });

        ajustarExtensionMapa(gruposValidos);
        agregarControlCapas(capasSuperpuestas);
    });
}


/* CONTENIDO DE LOS POPUPS */

function agregarPopup(feature, layer) {
    const propiedades = feature.properties || {};
    let contenidoPopup = '';

    if (propiedades.tipo) {
        contenidoPopup += `
            <strong>${propiedades.tipo}</strong>
            <br>
        `;
    }

    if (propiedades.foto) {
        contenidoPopup += `
            <img
                src="${propiedades.foto}"
                style="max-width: 180px;"
            >
        `;
    }

    if (contenidoPopup) {
        layer.bindPopup(contenidoPopup);
    }
}


/* AJUSTE DEL MAPA */

function ajustarExtensionMapa(gruposValidos) {
    if (gruposValidos.length === 0) return;

    const grupoTotal = L.featureGroup(gruposValidos);

    mapaDetalle.fitBounds(
        grupoTotal.getBounds()
    );
}


/* SELECTOR DE CAPAS */

function agregarControlCapas(capasSuperpuestas) {
    const cantidadCapas = Object.keys(
        capasSuperpuestas
    ).length;

    // Muestra el selector solamente cuando existe más de una capa
    if (cantidadCapas > 1) {
        L.control.layers(
            null,
            capasSuperpuestas
        ).addTo(mapaDetalle);
    }
}


/* EVENTOS */

// Expande o contrae la galería
document
    .getElementById('btn-ver-mas')
    .addEventListener('click', () => {
        mostrandoTodos = !mostrandoTodos;

        renderGaleria();

        if (!mostrandoTodos) {
            document
                .querySelector('.portafolio')
                .scrollIntoView({
                    behavior: 'smooth'
                });
        }
    });


// Cierra el modal al hacer clic sobre el fondo oscuro
document
    .getElementById('modal-proyecto')
    .addEventListener('click', evento => {
        if (evento.target.id === 'modal-proyecto') {
            cerrarDetalle();
        }
    });


// Cierra el modal mediante la tecla Escape
document.addEventListener('keydown', evento => {
    const modalAbierto = !document
        .getElementById('modal-proyecto')
        .classList.contains('oculto');

    if (
        evento.key === 'Escape' &&
        modalAbierto
    ) {
        cerrarDetalle();
    }
});


// Actualiza la galería al cambiar entre escritorio y celular
vistaMovil.addEventListener('change', () => {
    if (!mostrandoTodos) {
        renderGaleria();
    }
});


/* INICIO */

// Genera la galería cuando termina de cargar el archivo
renderGaleria();