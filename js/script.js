const projectsSlider = tns({
    container: '.projects-slider',
    items: 4,
    slideBy: 1,
    loop: false,
    controlsContainer: '.projects-slider-controls',
    navContainer: '.slider-nav-container',
    gutter: 25,
    responsive: {
        320: {
            items: 1,
        },
        640: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1440: {
            items: 4,
        }
    }
});


let btn = document.querySelector("#hidden-menu-btn");
let li = document.querySelectorAll(".hidden-a")
let menu = document.querySelector("#hidden-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    btn.classList.toggle("toggle")
})


li.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.toggle("menu-active");
        btn.classList.toggle("toggle")
    })
})


lightGallery(document.getElementById('lightgallery'), {
    loop: false
});
