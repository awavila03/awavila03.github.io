/* ==================================================
   PROYECTOS SELECCIONADOS
   ================================================== */

const projectsList = document.querySelector("#projects-list");


/* Ordenar desde el proyecto más reciente */

const sortedProjects = [...proyectos].sort(
    (projectA, projectB) =>
        projectB.fecha_final.localeCompare(
            projectA.fecha_final
        )
);


/* Crear las tarjetas */

function renderProjects() {
    if (!projectsList) {
        return;
    }

    projectsList.innerHTML = sortedProjects
        .map((project, index) => {
            const projectNumber = String(index + 1)
                .padStart(2, "0");

            return `
                <article
                    class="project-card"
                    data-project-id="${project.id}"
                >
                    <div class="project-image">
                        <img
                            src="${project.imagen}"
                            alt="${project.titulo}"
                            loading="lazy"
                            draggable="false"
                        >
                    </div>

                    <div class="project-content">
                        <div class="project-identification">
                            <span class="project-number">
                                ${projectNumber}
                            </span>

                            <span class="project-category">
                                ${project.categoria}
                            </span>
                        </div>

                        <h3 class="project-title">
                            ${project.titulo}
                        </h3>

                        <p class="project-summary">
                            ${project.descripcionCorta}
                        </p>

                        <button
                            class="project-link"
                            type="button"
                            data-project-id="${project.id}"
                            aria-label="Ver el caso ${project.titulo}"
                        >
                            Ver caso
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");
}


renderProjects();


/* ==================================================
   NAVEGACIÓN DEL CARRUSEL
   ================================================== */

const previousButton = document.querySelector(
    "#projects-previous"
);

const nextButton = document.querySelector(
    "#projects-next"
);

const projectsPagination = document.querySelector(
    "#projects-pagination"
);

const projectsViewport = document.querySelector(
    ".projects-viewport"
);

let currentProjectPage = 0;
let visibleProjects = getVisibleProjects();


/* Cantidad de tarjetas visibles según el breakpoint */

function getVisibleProjects() {
    if (window.matchMedia("(min-width: 1280px)").matches) {
        return 4;
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
        return 3;
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
        return 2;
    }

    return 1;
}


/* Cantidad total de páginas */

function getTotalProjectPages() {
    return Math.ceil(
        sortedProjects.length / getVisibleProjects()
    );
}


/* Crear los puntos de navegación */

function createProjectPagination() {
    const totalPages = getTotalProjectPages();

    projectsPagination.innerHTML = Array.from(
        { length: totalPages },
        (_, index) => `
            <button
                class="projects-dot"
                type="button"
                data-project-page="${index}"
                aria-label="Mostrar grupo ${index + 1} de proyectos"
            ></button>
        `
    ).join("");

    projectsPagination
        .querySelectorAll(".projects-dot")
        .forEach((dot) => {
            dot.addEventListener("click", () => {
                currentProjectPage = Number(
                    dot.dataset.projectPage
                );

                updateProjectsCarousel();
            });
        });
}


/* Actualizar posición y controles */

function updateProjectsCarousel() {
    const firstCard = projectsList.querySelector(
        ".project-card"
    );

    if (!firstCard) {
        return;
    }

    const visibleCount = getVisibleProjects();
    const totalPages = getTotalProjectPages();

    currentProjectPage = Math.min(
        currentProjectPage,
        totalPages - 1
    );

    const listStyles = getComputedStyle(projectsList);
    const gap = parseFloat(listStyles.columnGap) || 0;

    const lastPossibleIndex = Math.max(
        sortedProjects.length - visibleCount,
        0
    );

    const firstVisibleIndex = Math.min(
        currentProjectPage * visibleCount,
        lastPossibleIndex
    );

    const displacement =
        firstVisibleIndex *
        (
            firstCard.getBoundingClientRect().width +
            gap
        );

    projectsList.style.transform =
        `translateX(-${displacement}px)`;

    previousButton.disabled =
        currentProjectPage === 0;

    nextButton.disabled =
        currentProjectPage === totalPages - 1;

    projectsPagination
        .querySelectorAll(".projects-dot")
        .forEach((dot, index) => {
            const isActive =
                index === currentProjectPage;

            dot.classList.toggle(
                "is-active",
                isActive
            );

            if (isActive) {
                dot.setAttribute(
                    "aria-current",
                    "true"
                );
            } else {
                dot.removeAttribute(
                    "aria-current"
                );
            }
        });
}


/* Flechas */

previousButton.addEventListener("click", () => {
    if (currentProjectPage > 0) {
        currentProjectPage--;
        updateProjectsCarousel();
    }
});

nextButton.addEventListener("click", () => {
    if (
        currentProjectPage <
        getTotalProjectPages() - 1
    ) {
        currentProjectPage++;
        updateProjectsCarousel();
    }
});


/* Recalcular al cambiar el tamaño de pantalla */

window.addEventListener("resize", () => {
    const newVisibleProjects =
        getVisibleProjects();

    if (newVisibleProjects !== visibleProjects) {
        visibleProjects = newVisibleProjects;
        currentProjectPage = 0;

        createProjectPagination();
    }

    updateProjectsCarousel();
});


/* ==================================================
   ARRASTRE CON MOUSE Y GESTO TÁCTIL
   ================================================== */

let isDraggingProjects = false;
let dragStartX = 0;
let dragCurrentX = 0;
let initialTrackPosition = 0;


/* Posición horizontal actual de la pista */

function getTrackPosition() {
    const transform =
        getComputedStyle(projectsList).transform;

    if (transform === "none") {
        return 0;
    }

    return new DOMMatrixReadOnly(transform).m41;
}


/* Comenzar el arrastre */

function startProjectsDrag(event) {
    /*
     * No iniciar el arrastre desde controles
     * interactivos.
     */
    if (event.target.closest("button, a")) {
        return;
    }

    if (
        event.pointerType === "mouse" &&
        event.button !== 0
    ) {
        return;
    }

    isDraggingProjects = true;
    dragStartX = event.clientX;
    dragCurrentX = event.clientX;
    initialTrackPosition = getTrackPosition();

    projectsList.classList.add("is-dragging");

    projectsViewport.setPointerCapture(
        event.pointerId
    );
}


/* Mover la pista junto con el puntero */

function moveProjectsDrag(event) {
    if (!isDraggingProjects) {
        return;
    }

    dragCurrentX = event.clientX;

    const dragDistance =
        dragCurrentX - dragStartX;

    projectsList.style.transform =
        `translateX(${
            initialTrackPosition + dragDistance
        }px)`;
}


/* Finalizar el arrastre */

function finishProjectsDrag(event) {
    if (!isDraggingProjects) {
        return;
    }

    const dragDistance =
        dragCurrentX - dragStartX;

    const dragThreshold = Math.min(
        projectsViewport.clientWidth * 0.15,
        80
    );

    if (
        dragDistance <= -dragThreshold &&
        currentProjectPage <
            getTotalProjectPages() - 1
    ) {
        currentProjectPage++;
    }

    if (
        dragDistance >= dragThreshold &&
        currentProjectPage > 0
    ) {
        currentProjectPage--;
    }

    isDraggingProjects = false;

    projectsList.classList.remove(
        "is-dragging"
    );

    if (
        projectsViewport.hasPointerCapture(
            event.pointerId
        )
    ) {
        projectsViewport.releasePointerCapture(
            event.pointerId
        );
    }

    requestAnimationFrame(
        updateProjectsCarousel
    );
}


/* Cancelar y regresar a la página actual */

function cancelProjectsDrag(event) {
    if (!isDraggingProjects) {
        return;
    }

    isDraggingProjects = false;

    projectsList.classList.remove(
        "is-dragging"
    );

    if (
        projectsViewport.hasPointerCapture(
            event.pointerId
        )
    ) {
        projectsViewport.releasePointerCapture(
            event.pointerId
        );
    }

    requestAnimationFrame(
        updateProjectsCarousel
    );
}


/* Eventos del gesto */

projectsViewport.addEventListener(
    "pointerdown",
    startProjectsDrag
);

projectsViewport.addEventListener(
    "pointermove",
    moveProjectsDrag
);

projectsViewport.addEventListener(
    "pointerup",
    finishProjectsDrag
);

projectsViewport.addEventListener(
    "pointercancel",
    cancelProjectsDrag
);


/* Inicializar el carrusel */

createProjectPagination();
updateProjectsCarousel();


/* ==================================================
   DETALLE NARRATIVO DEL PROYECTO
   ================================================== */

const projectDialog = document.querySelector(
    "#project-dialog"
);

const projectDialogContainer = document.querySelector(
    ".project-dialog-container"
);

const projectDialogClose = document.querySelector(
    "#project-dialog-close"
);

let projectDialogTrigger = null;
let projectMap = null;


/* Formatear fechas YYYY-MM */

function formatProjectDate(dateString) {
    const [year, month] = dateString.split("-");

    const date = new Date(
        Number(year),
        Number(month) - 1
    );

    return new Intl.DateTimeFormat("es-PE", {
        month: "long",
        year: "numeric"
    }).format(date);
}


/* Configurar Ctrl + scroll para el mapa */

function configureControlledMapZoom(
    map,
    mapElement
) {
    let lastZoomTime = 0;

    const handleControlledZoom = (event) => {
        if (!event.ctrlKey) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        const currentTime = performance.now();

        /*
         * Evita que un trackpad o una rueda sensible
         * genere demasiados cambios seguidos.
         */
        if (currentTime - lastZoomTime < 100) {
            return;
        }

        lastZoomTime = currentTime;

        if (event.deltaY === 0) {
            return;
        }

        const zoomDirection =
            event.deltaY < 0 ? 1 : -1;

        const nextZoom = Math.min(
            map.getMaxZoom(),
            Math.max(
                map.getMinZoom(),
                map.getZoom() + zoomDirection
            )
        );

        map.setZoomAround(
            map.mouseEventToContainerPoint(event),
            nextZoom
        );
    };

    mapElement.addEventListener(
        "wheel",
        handleControlledZoom,
        { passive: false }
    );

    mapElement.setAttribute(
        "title",
        "Mantén presionada la tecla Ctrl y usa la rueda para controlar el zoom"
    );

    /*
     * Al destruir el mapa también se elimina
     * el evento del elemento.
     */
    map.once("unload", () => {
        mapElement.removeEventListener(
            "wheel",
            handleControlledZoom
        );
    });
}


/* Construir el mapa del proyecto */

function renderProjectMap(project) {
    const mapSection = document.querySelector(
        ".project-case-map"
    );

    const mapElement = document.querySelector(
        "#project-dialog-map"
    );

    if (!mapSection || !mapElement) {
        return;
    }

    if (projectMap) {
        projectMap.remove();
        projectMap = null;
    }

    const hasValidCenter =
        Array.isArray(project.centro) &&
        project.centro.length === 2;

    if (!hasValidCenter) {
        mapSection.hidden = true;
        return;
    }

    mapSection.hidden = false;

    mapElement.setAttribute(
        "aria-label",
        `Mapa del proyecto ${project.titulo}`
    );

    const currentMap = L.map(mapElement, {
        maxZoom: 18,
        scrollWheelZoom: false
    }).setView(
        project.centro,
        project.zoom ?? 12
    );

    projectMap = currentMap;

    configureControlledMapZoom(
        currentMap,
        mapElement
    );

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                "&copy; OpenStreetMap contributors"
        }
    ).addTo(currentMap);

    const layerRequests = (
        project.capas ?? []
    ).map(async (layerInfo) => {
        const response = await fetch(
            layerInfo.archivo
        );

        if (!response.ok) {
            throw new Error(
                `No se pudo cargar ${layerInfo.archivo}`
            );
        }

        return {
            layerInfo,
            data: await response.json()
        };
    });

    Promise.allSettled(layerRequests)
        .then((results) => {
            if (projectMap !== currentMap) {
                return;
            }

            const overlays = {};
            const validLayers = [];

            results.forEach((result) => {
                if (
                    result.status !== "fulfilled"
                ) {
                    return;
                }

                const {
                    layerInfo,
                    data
                } = result.value;

                const geoJsonLayer = L.geoJSON(
                    data,
                    {
                        style: {
                            color:
                                layerInfo.color ??
                                "#1CB698",
                            weight: 3,
                            fillOpacity: 0.25
                        },

                        pointToLayer(
                            feature,
                            latlng
                        ) {
                            return L.circleMarker(
                                latlng,
                                {
                                    radius: 6,
                                    color:
                                        layerInfo.color ??
                                        "#1CB698",
                                    weight: 2,
                                    fillOpacity: 0.75
                                }
                            );
                        },

                        onEachFeature(
                            feature,
                            layer
                        ) {
                            const properties =
                                feature.properties ?? {};

                            const popupContent = [];

                            if (properties.tipo) {
                                popupContent.push(
                                    `<strong>${properties.tipo}</strong>`
                                );
                            }

                            if (properties.foto) {
                                popupContent.push(
                                    `<img
                                        src="${properties.foto}"
                                        alt=""
                                        style="
                                            display: block;
                                            max-width: 180px;
                                            margin-top: 0.5rem;
                                        "
                                    >`
                                );
                            }

                            if (popupContent.length) {
                                layer.bindPopup(
                                    popupContent.join("")
                                );
                            }
                        }
                    }
                ).addTo(currentMap);

                overlays[layerInfo.nombre] =
                    geoJsonLayer;

                validLayers.push(
                    geoJsonLayer
                );
            });

            if (validLayers.length) {
                const completeGroup =
                    L.featureGroup(validLayers);

                currentMap.fitBounds(
                    completeGroup.getBounds(),
                    {
                        padding: [20, 20]
                    }
                );
            }

            if (
                Object.keys(overlays).length > 1
            ) {
                L.control.layers(
                    null,
                    overlays
                ).addTo(currentMap);
            }
        });

    window.setTimeout(() => {
        if (projectMap === currentMap) {
            currentMap.invalidateSize();
        }
    }, 100);
}


/* Abrir y completar el caso de estudio */

function openProjectDialog(projectId) {
    const project = sortedProjects.find(
        (item) => item.id === projectId
    );

    if (!project || !project.caseStudy) {
        return;
    }

    document.querySelector(
        "#project-dialog-category"
    ).textContent = project.categoria;

    document.querySelector(
        "#project-dialog-title"
    ).textContent = project.titulo;

    document.querySelector(
        "#project-dialog-tagline"
    ).textContent =
        project.caseStudy.tagline;

    const dialogImage = document.querySelector(
        "#project-dialog-image"
    );

    dialogImage.src = project.imagen;
    dialogImage.alt =
        `Vista del proyecto ${project.titulo}`;

    document.querySelector(
        "#project-dialog-dates"
    ).textContent =
        `${formatProjectDate(
            project.fecha_inicio
        )} — ${formatProjectDate(
            project.fecha_final
        )}`;

    document.querySelector(
        "#project-dialog-client"
    ).textContent = project.cliente;

    document.querySelector(
        "#project-dialog-company"
    ).textContent = project.empresa;

    document.querySelector(
        "#project-dialog-role"
    ).textContent =
        project.caseStudy.role;

    document.querySelector(
        "#project-dialog-challenge"
    ).textContent =
        project.caseStudy.challenge;

    document.querySelector(
        "#project-dialog-contribution"
    ).textContent =
        project.caseStudy.contribution;

    document.querySelector(
        "#project-dialog-outcome"
    ).textContent =
        project.caseStudy.outcome;

    document.querySelector(
        "#project-dialog-solution"
    ).innerHTML =
        project.caseStudy.solution
            .map((step) => `<li>${step}</li>`)
            .join("");

    document.querySelector(
        "#project-dialog-technologies"
    ).innerHTML =
        project.caseStudy.technologies
            .map(
                (technology) =>
                    `<li>${technology}</li>`
            )
            .join("");

    /*
     * Primer reinicio antes de abrir. Esto limpia
     * cualquier posición que conserve el contenedor.
     */
    projectDialog.scrollTop = 0;
    projectDialogContainer.scrollTop = 0;

    projectDialog.showModal();

    document.body.classList.add(
        "dialog-open"
    );

    /*
     * Segundo reinicio cuando el diálogo ya está
     * visible y el navegador calculó su distribución.
     */
    requestAnimationFrame(() => {
        projectDialog.scrollTop = 0;
        projectDialogContainer.scrollTop = 0;

        projectDialogClose.focus({
            preventScroll: true
        });

        renderProjectMap(project);
    });
}


/* Abrir desde el botón Ver caso */

projectsList.addEventListener("click", (event) => {
    const projectLink = event.target.closest(
        ".project-link"
    );

    if (!projectLink) {
        return;
    }

    projectDialogTrigger = projectLink;

    openProjectDialog(
        projectLink.dataset.projectId
    );
});


/* Cerrar desde el botón */

projectDialogClose.addEventListener(
    "click",
    () => {
        projectDialog.close();
    }
);


/* Cerrar al pulsar el fondo exterior */

projectDialog.addEventListener(
    "click",
    (event) => {
        const dialogBounds =
            projectDialog.getBoundingClientRect();

        const clickedOutside =
            event.clientX < dialogBounds.left ||
            event.clientX > dialogBounds.right ||
            event.clientY < dialogBounds.top ||
            event.clientY > dialogBounds.bottom;

        if (clickedOutside) {
            projectDialog.close();
        }
    }
);


/* Restaurar la página después del cierre */

projectDialog.addEventListener(
    "close",
    () => {
        document.body.classList.remove(
            "dialog-open"
        );

        if (projectMap) {
            projectMap.remove();
            projectMap = null;
        }

        /*
         * Dejar también el diálogo preparado para
         * la siguiente apertura.
         */
        projectDialog.scrollTop = 0;
        projectDialogContainer.scrollTop = 0;

        if (projectDialogTrigger) {
            projectDialogTrigger.focus({
                preventScroll: true
            });

            projectDialogTrigger = null;
        }
    }
);