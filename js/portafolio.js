// js/portafolio.js
// Pinta la galería de proyectos, maneja "ver más" y el modal de detalle.

let mostrandoTodos = false;
let mapaDetalle = null;

// Ordena por fecha, el más reciente primero
const proyectosOrdenados = [...proyectos].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
);

function renderGaleria() {
    const contenedor = document.querySelector('.portafolio .galeria');
    contenedor.innerHTML = '';

    const cantidadAMostrar = mostrandoTodos ? proyectosOrdenados.length : 6;
    proyectosOrdenados.slice(0, cantidadAMostrar).forEach(p => {
        contenedor.innerHTML += `
        <div class="proyecto" data-id="${p.id}">
            <img src="${p.imagen}" alt="${p.titulo}">
            <div class="overlay">
            <h3>${p.titulo}</h3>
            <p>${p.descripcionCorta}</p>
            </div>
        </div>`;
    });

    // Vuelve a enganchar el click en cada tarjeta (se pierde al hacer innerHTML)
    document.querySelectorAll('.portafolio .galeria .proyecto').forEach(card => {
        card.addEventListener('click', () => abrirDetalle(card.dataset.id));
    });

    // Oculta el botón "ver más" si ya no quedan proyectos por mostrar
    const btnVerMas = document.getElementById('btn-ver-mas');
    if (proyectosOrdenados.length <= 3) {
        btnVerMas.style.display = 'none'; // si tienes 3 proyectos o menos, ni falta el botón
    } else {
        btnVerMas.style.display = 'block';
        btnVerMas.querySelector('.texto-boton').textContent = mostrandoTodos ? 'Ver menos' : 'Ver más proyectos';
    }
}

function formatearFecha(fechaStr) {
    const conDia = fechaStr.length === 7 ? fechaStr + '-01' : fechaStr;
    const fecha = new Date(conDia);
    return fecha.toLocaleDateString('es-PE', { month: 'long', year: 'numeric' });
}

function abrirDetalle(id) {
    const p = proyectosOrdenados.find(x => x.id === id);
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
    const viñetas = (p.puntosClave && p.puntosClave.length)
    ? '<ul>' + p.puntosClave.map(pt => `<li>${pt}</li>`).join('') + '</ul>'
    : '';
    document.getElementById('modal-descripcion').innerHTML = parrafos + viñetas;

    document.getElementById('modal-proyecto').classList.remove('oculto');

    // Si ya había un mapa de un proyecto anterior, lo destruye antes de crear otro
    if (mapaDetalle) {
        mapaDetalle.remove();
        mapaDetalle = null;
    }

    mapaDetalle = L.map('mapa-detalle', { maxZoom: 18 }).setView(p.centro, p.zoom);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapaDetalle);

        const capas = p.capas || [];

        // Intenta cargar todas las capas del proyecto; si alguna falla o no existe, se ignora sin romper las demás
        const promesas = capas.map(capaInfo =>
        fetch(capaInfo.archivo)
            .then(r => r.json())
            .then(data => ({ info: capaInfo, data }))
            .catch(() => null)
        );

        Promise.all(promesas).then(resultados => {
        const overlays = {};
        const gruposValidos = [];

        resultados.forEach(res => {
            if (!res) return; // esta capa no existe todavía, se omite

            const capaLeaflet = L.geoJSON(res.data, {
            style: () => ({ color: res.info.color || '#3388ff', weight: 3, fillOpacity: 0.25 }),
            onEachFeature: (feature, layer) => {
                const props = feature.properties || {};
                let html = '';
                if (props.tipo) html += `<strong>${props.tipo}</strong><br>`;
                if (props.foto) html += `<img src="${props.foto}" style="max-width:180px;">`;
                if (html) layer.bindPopup(html);
            }
            }).addTo(mapaDetalle);

            overlays[res.info.nombre] = capaLeaflet;
            gruposValidos.push(capaLeaflet);
        });

        // Ajusta el zoom para que se vean todas las capas cargadas juntas
        if (gruposValidos.length > 0) {
            const grupoTotal = L.featureGroup(gruposValidos);
            mapaDetalle.fitBounds(grupoTotal.getBounds());
        }

        // Solo muestra el selector de capas si hay más de una
        if (Object.keys(overlays).length > 1) {
            L.control.layers(null, overlays).addTo(mapaDetalle);
        }
        });

    // Leaflet necesita esto porque el mapa se creó dentro de un modal
    // que estaba oculto (display:none) hasta hace un instante
    setTimeout(() => mapaDetalle.invalidateSize(), 100);
}

function cerrarDetalle() {
    document.getElementById('modal-proyecto').classList.add('oculto');
}

document.getElementById('btn-ver-mas').addEventListener('click', () => {
    mostrandoTodos = !mostrandoTodos;
    renderGaleria();
    if (!mostrandoTodos) {
        // Si acaba de colapsar a 3, regresa la vista al inicio de la sección
        document.querySelector('.portafolio').scrollIntoView({ behavior: 'smooth' });
    }
});

// Cerrar el modal al hacer clic fuera de la tarjeta blanca (sobre el fondo oscuro)
document.getElementById('modal-proyecto').addEventListener('click', (evento) => {
    if (evento.target.id === 'modal-proyecto') {
        cerrarDetalle();
    }
});

// Cerrar el modal con la tecla Esc
document.addEventListener('keydown', (evento) => {
    const modalAbierto = !document.getElementById('modal-proyecto').classList.contains('oculto');
    if (evento.key === 'Escape' && modalAbierto) {
        cerrarDetalle();
    }
});

// Pinta la galería apenas el DOM esté listo
renderGaleria();