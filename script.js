const closeBtn = document.querySelector(".close");
const heroContactBtn = document.querySelector(".hero-contact");
const contactBox = document.querySelector(".hero-contact-popup");

heroContactBtn.addEventListener("click", ()=> {
    contactBox.style.display = "flex";
});

closeBtn.addEventListener("click", ()=> {
    contactBox.style.display = "none";
});

const navBar = document.querySelector(".nav-bar");
const navIcon = document.querySelector(".nav-icon");
const navClose = document.querySelector(".nav-bar-close");

let rotate = 0;

navIcon.addEventListener("click", ()=> {
    rotate += 360;
    navIcon.style.transform = `rotate(${rotate}deg)`;
    navBar.classList.add("active");
});

navClose.addEventListener("click", ()=> {
    rotate += 360;
    navClose.style.transform = `rotate(${rotate}deg)`;
    navBar.classList.remove("active");
});
