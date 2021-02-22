const harmburger = document.getElementById("harmburger");

const close = document.getElementById("close");
const open = document.getElementById("open");

const navUl = document.getElementById("nav-ul");


harmburger.addEventListener("click", () => {
    navUl.classList.toggle("show");

    open.classList.toggle("bln");
    close.classList.toggle("view");

    // navUl.classList.toggle("backdrp");

});

