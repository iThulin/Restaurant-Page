import {createHTMLElement, $frame} from '../index.js';
import menuData from '../menuData.json';

function renderMenu() {
    const menuItems = menuData;
    console.log(menuItems)

    const $menuContainer = createHTMLElement('div', 'menuContainer')
    const $menu = createHTMLElement('div', 'menu')

    // loop through the json to create a header for each type of food

    // loop through each object in header

    // create the title

    // create the price/s

    // create the description

    // appendChild to one layer higher until at the frame




    $menuContainer.appendChild($menu);
    $frame.appendChild($menuContainer);
}

export { renderMenu };