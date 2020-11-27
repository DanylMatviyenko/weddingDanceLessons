const hamburger = document.querySelector('.hamburger');
const dropDownMenu = document.querySelector('.navigation__drop-down-menu');

const menuAnimation = function() {
    const items = this.children;

    if(items[0].classList.contains('hamburger__item_animation_none')) {
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove('hamburger__item_animation_none');
        }
    }
    hamburger.classList.toggle('hamburger_animation_close-menu');
    dropDownMenu.classList.toggle('navigation__drop-down-menu_expand');
}

hamburger.addEventListener('click', menuAnimation);