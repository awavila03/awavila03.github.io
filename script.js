let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("qgis");
            habilidades[1].classList.add("arcgis");
            habilidades[2].classList.add("postgresql");
            habilidades[3].classList.add("geoserver");
            habilidades[4].classList.add("leaflet");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("tequipo");
            habilidades[7].classList.add("mgrupos");
            habilidades[8].classList.add("creatividad");
            habilidades[9].classList.add("compromiso");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


