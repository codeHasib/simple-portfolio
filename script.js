const closeBtn = document.querySelector(".close");
const heroContactBtn = document.querySelector(".hero-contact");
const contactBox = document.querySelector(".hero-contact-popup");

heroContactBtn.addEventListener("click", ()=> {
    contactBox.style.display = "flex";
});

closeBtn.addEventListener("click", ()=> {
    contactBox.style.display = "none";
});