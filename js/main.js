/* ==================================================
   MENÚ DE NAVEGACIÓN MÓVIL
   ================================================== */

const menuToggle = document.querySelector("#menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");
const navigationLinks = document.querySelectorAll(".navigation-link");


function openMenu() {
    mainNavigation.classList.add("is-open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Cerrar menú");
}


function closeMenu() {
    mainNavigation.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
}


function toggleMenu() {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}


/* Abrir y cerrar desde el botón */

menuToggle.addEventListener("click", toggleMenu);


/* Cerrar después de seleccionar una sección */

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});


/* Cerrar al hacer clic fuera del encabezado */

document.addEventListener("click", (event) => {
    const clickedInsideHeader = event.target.closest(".header-container");

    if (!clickedInsideHeader) {
        closeMenu();
    }
});


/* Cerrar con la tecla Escape */

document.addEventListener("keydown", (event) => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
        closeMenu();
        menuToggle.focus();
    }
});


/* ==================================================
   CAMBIO DE TEMA
   ================================================== */

const rootElement = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const savedTheme = localStorage.getItem("geoavila-theme");


function applyTheme(theme) {
    const isLightTheme = theme === "light";

    rootElement.classList.toggle("light-theme", isLightTheme);

    themeIcon.textContent = isLightTheme ? "☾" : "☀";

    themeToggle.setAttribute(
        "aria-label",
        isLightTheme
            ? "Activar tema oscuro"
            : "Activar tema claro"
    );
}


/* Aplicar el tema guardado o utilizar oscuro por defecto */

applyTheme(savedTheme ?? "dark");


/* Cambiar y guardar el tema */

themeToggle.addEventListener("click", () => {
    const isLightTheme =
        rootElement.classList.contains("light-theme");

    const newTheme = isLightTheme ? "dark" : "light";

    applyTheme(newTheme);
    localStorage.setItem("geoavila-theme", newTheme);
});


/* Cerrar el menú al pasar a escritorio */

const desktopBreakpoint = window.matchMedia(
    "(min-width: 1024px)"
);

desktopBreakpoint.addEventListener("change", (event) => {
    if (event.matches) {
        closeMenu();
    }
});


/* ==================================================
   CURRENT YEAR
   ================================================== */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}