/*=============== scroll section active link =============== */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });



/*=============== sticky navbar =============== */
let header = document.querySelector(".header-container");

header.classList.toggle("sticky", window.scrollY > 100);
};



/*=============== dark and light mode =============== */
let darkModeIcon = document.querySelector("#darkmode-icon");

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("darkmode-icon");
}


/*=============== animations =============== */
ScrollReveal({
    reset : true,
    distance : '80px',
    duration : 2000,
    delay : 150
});

ScrollReveal().reveal('.home-content , .heading' , { origin: 'top' });
ScrollReveal().reveal('.contact form' , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , about-img' , { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content' , { origin: 'right' });
