const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
}
    });
}, {
    threshold: 0.2
});

secciones.forEach(sec => {
    observer.observe(sec);
});



const images = document.querySelectorAll(".grid-galeria img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});



function filtrar(categoria) {
    const imgs = document.querySelectorAll(".grid-galeria img");

    imgs.forEach(img => {
        if (categoria === "all") {
            img.style.display = "block";
        } else {
            if (img.dataset.categoria === categoria) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        }
    });
}