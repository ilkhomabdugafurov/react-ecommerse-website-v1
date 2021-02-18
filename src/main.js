document.getElementById("load").onload = () => {

    // Menu Show
    const toggle = document.getElementById("nav-toggle"), nav = document.getElementById("nav-menu")
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        })
    }

    // Remove Menu
    const navLink = document.querySelectorAll(".nav__link"), navMenu = document.getElementById("nav-menu");

    function linkAction() {
        navMenu.classList.remove("show");
    }

    navLink.forEach(n => n.addEventListener("click", linkAction));

    // Scroll Sections Active Link
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", scrollActive)

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            let sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active");
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active");
            }
        })
    }

    // Change Color Header
    window.onscroll = function () {
        const nav = document.querySelector("#header");
        if (this.scrollY >= 200) {
            nav.classList.add("scroll-header")
        } else {
            nav.classList.remove("scroll-header")
        }
    };
}