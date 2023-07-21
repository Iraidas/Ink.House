export function smoothScroll() {
    const menuLink = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLink.length > 0){
        menuLink.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        })

        function onMenuLinkClick(event) {
            const menuLink = event.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                event.preventDerault();
            }
        }
    }
}