console.log("Funcionando!");

// tema lógica
const temaBtn = document.getElementById("themeBtn");
const sol = document.getElementById("claro");
const lua = document.getElementById("escuro");

const body = document.querySelector("body");

let isLight = false;

/* Lógica de tema */

function mudarTema() {
    if (isLight == false) { // verificarTema() == false 
        body.classList.add("light"); 

        localStorage.setItem('tema', 'light');
        isLight = true;
    } else {
        body.classList.remove("light"); 

        localStorage.removeItem('tema');
        isLight = false;
    }
}

function verificarTema() {
    if (localStorage.getItem('tema') === 'light') {
        body.classList.add("light");
    } else {
        body.classList.remove("light");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    verificarTema();
    temaBtn.addEventListener("click", mudarTema);

    /* menu lógica */
    const burgerBtn = document.getElementById("burger");
    const nav = document.querySelector("nav");
    const ulNav = document.getElementById("ulNav");

    let isAberto = true;

    burgerBtn.addEventListener("click", function () {
        if (isAberto) {
            nav.classList.add("menu-aberto");
            ulNav.classList.add("menu-aberto");

            isAberto = false;
        } else {
            nav.classList.remove("menu-aberto");
            ulNav.classList.remove("menu-aberto");

            isAberto = true;
        }
    });
});