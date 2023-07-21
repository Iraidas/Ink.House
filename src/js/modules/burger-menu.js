export function burgerMenu() {
    let burgerButton = document.querySelector(".menu__button")
    let burgerMenu = document.querySelector(".menu__body")
    let basket = document.querySelector(".basket")
    
    burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle("menu__button_active");
        document.body.classList.toggle("body_lock");
        burgerMenu.classList.toggle("menu__body_active");
        if (basket.style.display == "none") {
            basket.style.display = "block";
        } else {
            basket.style.display = "none";
        }
    })
}