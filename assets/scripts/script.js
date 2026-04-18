console.log("Funcionando!");

// tema lógica
const temaBtn = document.getElementById("themeBtn");
const sol = document.getElementById("claro");
const lua = document.getElementById("escuro");

const body = document.querySelector("body");
// let elementos = document.querySelectorAll("body, header, h1, p, a, #misaelImg");

document.addEventListener("DOMContentLoaded", function () {
    temaBtn.addEventListener("click", function() {
        if (sol.style.opacity == 1) { // modo light
            sol.style.opacity = "0"; 
            sol.style.pointerEvents = "none"; 
            lua.style.opacity = "1"; 
            lua.style.pointerEvents = "visibile"; 

            body.classList.add("light");

            // document.body.style.backgroundColor = "white";
            // header.style.backgroundColor = "rgb(255, 255, 255, 0.8)";
            // header.style.borderBottom = "1px solid rgb(0, 0, 0, 0.3)";

            // h1.forEach(h1 => {
            //     h1.style.color = "black";
            // });
            // p.forEach(p => {
            //     p.style.color = "black";
            // });
            // a.forEach(a => {
            //     a.style.color = "black";
            // });

            // misaelImg.classList.add("light");
        } else { // modo dark
            sol.style.opacity = "1"; 
            sol.style.pointerEvents = "visible"; 
            lua.style.opacity = "0"; 
            lua.style.pointerEvents = "none"; 

            body.classList.remove("light");

            // document.body.style.backgroundColor = "black";
            // header.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
            // header.style.borderBottom = "1px solid rgb(255, 255, 255, 0.3)";

            // h1.forEach(h1 => {
            //     h1.style.color = "white";
            // });
            // p.forEach(p => {
            //     p.style.color = "white";
            // });
            // a.forEach(a => {
            //     a.style.color = "white";
            // });

            // misaelImg.classList.remove("light");
        }
    });


    // menu lógica
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