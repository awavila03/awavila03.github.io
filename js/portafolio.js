// js/portafolio.js
// Pinta la galería de proyectos, maneja "ver más" y el modal de detalle.

let mostrandoTodos = false;
let mapaDetalle = null;
let tarjetaActiva = null;

// Detecta el mismo ancho de pantalla usado por el diseño responsive
const vistaMovil = window.matchMedia('(max-width: 700px)');

// Ordena los proyectos por su fecha de finalización
const proyectosOrdenados = [...proyectos].sort(
    (a, b) => b.fecha_final.localeCompare(a.fecha_final)
);

function renderGaleria() {
    const contenedor = document.querySelector('.portafolio .galeria');
    contenedor.innerHTML = '';

    // Muestra 3 proyectos en celulares y 6 en pantallas más grandes
    const cantidadInicial = vistaMovil.matches ? 3 : 6;

    const cantidadAMostrar = mostrandoTodos
        ? proyectosOrdenados.length
        : cantidadInicial;

    proyectosOrdenados.slice(0, cantidadAMostrar).forEach(p => {
        contenedor.innerHTML += `
            <button
                type="button"
                class="proyecto"
                data-id="${p.id}"
                aria-label="Ver detalles del proyecto ${p.titulo}"
            >
                <img src="${p.imagen}" alt="">
                <div class="overlay">
                    <h3>${p.titulo}</h3>
                    <p>${p.descripcionCorta}</p>
                </div>
            </button>
        `;
    });

    // Vuelve a enganchar el clic en cada tarjeta
    document
        .querySelectorAll('.portafolio .galeria .proyecto')
        .forEach(card => {
            card.addEventListener('click', () => {
                abrirDetalle(card.dataset.id);
            });
        });

    const btnVerMas = document.getElementById('btn-ver-mas');

    // Oculta el botón cuando todos los proyectos caben en la vista inicial
    if (proyectosOrdenados.length <= cantidadInicial) {
        btnVerMas.style.display = 'none';
    } else {
        btnVerMas.style.display = 'block';

        btnVerMas.querySelector('.texto-boton').textContent =
            mostrandoTodos ? 'Ver menos' : 'Ver más proyectos';
    }
}

function formatearFecha(fechaStr) {
    // Separa el año y el mes para crear la fecha en horario local
    const [anio, mes] = fechaStr.split('-').map(Number);
    const fecha = new Date(anio, mes - 1, 1);

    return fecha.toLocaleDateString('es-PE', {
        month: 'long',
        year: 'numeric'
    });
}

function abrirDetalle(id) {
    // Guarda la tarjeta para devolverle el foco al cerrar el modal
    tarjetaActiva = document.activeElement;
    const p = proyectosOrdenados.find(proyecto => proyecto.id === id);

    if (!p) return;

    document.getElementById('modal-titulo').textContent = p.titulo;

    document.getElementById('modal-fechas').textContent =
        `De ${formatearFecha(p.fecha_inicio)} a ${formatearFecha(p.fecha_final)}`;

    document.getElementById('modal-imagen').src = p.imagen;
    document.getElementById('modal-imagen').alt = p.titulo;
    document.getElementById('modal-categoria').textContent = p.categoria;
    document.getElementById('modal-cliente').textContent = p.cliente || '—';
    document.getElementById('modal-empresa').textContent = p.empresa || '—';

    const parrafos = p.descripcionLarga
        .split('\n\n')
        .map(parrafo => `<p>${parrafo}</p>`)
        .join('');

    const viñetas = p.puntosClave && p.puntosClave.length
        ? '<ul>' +
            p.puntosClave
                .map(punto => `<li>${punto}</li>`)
                .join('') +
          '</ul>'
        : '';

    document.getElementById('modal-descripcion').innerHTML =
        parrafos + viñetas;

    const modalProyecto = document.getElementById('modal-proyecto');

    modalProyecto.classList.remove('oculto');
    modalProyecto.setAttribute('aria-hidden', 'false');

    // Lleva el foco al botón de cierre
    modalProyecto.querySelector('.cerrar').focus();

    // Destruye el mapa del proyecto anterior antes de crear uno nuevo
    if (mapaDetalle) {
        mapaDetalle.remove();
        mapaDetalle = null;
    }

    mapaDetalle = L.map('mapa-detalle', {
        maxZoom: 18
    }).setView(p.centro, p.zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapaDetalle);

    const capas = p.capas || [];

    // Carga todas las capas disponibles sin detener las demás si alguna falla
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
            // Omite las capas que no existan o no se puedan cargar
            if (!resultado) return;

            const capaLeaflet = L.geoJSON(resultado.data, {
                style: () => ({
                    color: resultado.info.color || '#3388ff',
                    weight: 3,
                    fillOpacity: 0.25
                }),

                onEachFeature: (feature, layer) => {
                    const propiedades = feature.properties || {};
                    let contenidoPopup = '';

                    if (propiedades.tipo) {
                        contenidoPopup +=
                            `<strong>${propiedades.tipo}</strong><br>`;
                    }

                    if (propiedades.foto) {
                        contenidoPopup +=
                            `<img src="${propiedades.foto}" style="max-width:180px;">`;
                    }

                    if (contenidoPopup) {
                        layer.bindPopup(contenidoPopup);
                    }
                }
            }).addTo(mapaDetalle);

            capasSuperpuestas[resultado.info.nombre] = capaLeaflet;
            gruposValidos.push(capaLeaflet);
        });

        // Ajusta el mapa para mostrar todas las capas cargadas
        if (gruposValidos.length > 0) {
            const grupoTotal = L.featureGroup(gruposValidos);
            mapaDetalle.fitBounds(grupoTotal.getBounds());
        }

        // Muestra el selector solamente cuando existe más de una capa
        if (Object.keys(capasSuperpuestas).length > 1) {
            L.control.layers(null, capasSuperpuestas).addTo(mapaDetalle);
        }
    });

    // Leaflet necesita recalcular el tamaño porque estaba dentro del modal oculto
    setTimeout(() => {
        mapaDetalle.invalidateSize();
    }, 100);
}

function cerrarDetalle() {
    const modalProyecto = document.getElementById('modal-proyecto');

    modalProyecto.classList.add('oculto');
    modalProyecto.setAttribute('aria-hidden', 'true');

    // Devuelve el foco a la tarjeta que abrió el modal
    if (tarjetaActiva) {
        tarjetaActiva.focus();
        tarjetaActiva = null;
    }
}

// Controla el botón "Ver más / Ver menos"
document
    .getElementById('btn-ver-mas')
    .addEventListener('click', () => {
        mostrandoTodos = !mostrandoTodos;
        renderGaleria();

        if (!mostrandoTodos) {
            // Al volver a la vista inicial, regresa al comienzo de la sección
            document.querySelector('.portafolio').scrollIntoView({
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

// Cierra el modal con la tecla Esc
document.addEventListener('keydown', evento => {
    const modalAbierto = !document
        .getElementById('modal-proyecto')
        .classList.contains('oculto');

    if (evento.key === 'Escape' && modalAbierto) {
        cerrarDetalle();
    }
});

// Actualiza la cantidad inicial al cambiar entre escritorio y celular
vistaMovil.addEventListener('change', () => {
    if (!mostrandoTodos) {
        renderGaleria();
    }
});

// Pinta la galería cuando el archivo termina de cargar
renderGaleria();