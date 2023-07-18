const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const quienes = document.querySelector("#quienes");
const inicio = document.querySelector("#inicio");
const propiedades = document.querySelector("#propiedades");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

quienes.addEventListener("click", () => {
    nav.classList.remove("visible");
});

inicio.addEventListener("click", () => {
    nav.classList.remove("visible");
});

propiedades.addEventListener("click", () => {
    nav.classList.remove("visible");
});
