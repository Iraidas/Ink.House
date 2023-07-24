export function addGoods(){
    let basket = document.querySelector('.basket');

    let buttons = Array.from(document.querySelectorAll('.items__item-button'));

    let counter = 0;

    buttons.forEach( (button) => button.addEventListener('click', () => {
        basket.classList.add("basket_active");

        let basketCounter = basket.querySelector('.basket__counter');

        counter++

        basketCounter.innerHTML = `${counter}`;
    }))


}