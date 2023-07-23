export function smoothScroll() {
    const menuLink = document.querySelectorAll('.menu-link[data-goto]');
    if (menuLink.length > 0){
        function onMenuLinkClick(event) {
            const menuLink = event.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                event.preventDefault();
            }
        }

        menuLink.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        })
    }
}