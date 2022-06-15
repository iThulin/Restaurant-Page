import {createHTMLElement, $frame} from '../index.js';
import menuData from '../menuData.json';

function renderMenu() {
    const menuItems = menuData;
    console.log(menuItems)

    // create menu container to hold all generated menu content

    const $menuContainer = createHTMLElement('div', 'menuContainer');
    const $menu = createHTMLElement('div', 'menu');

    // create subMenuContainers to hold each type of food

    const $antpastiContainer = createHTMLElement('div', 'subMenu');
    $menu.appendChild($antpastiContainer);
    $antpastiContainer.appendChild(createHTMLElement('h2', 'subMenuTitle', null, 'ANTIPASTI'));

    const $pizzaAndCalzonesContainer = createHTMLElement('div', 'subMenu');
    $menu.appendChild($pizzaAndCalzonesContainer);
    $pizzaAndCalzonesContainer.appendChild(createHTMLElement('h2', 'subMenuTitle', null, 'PIZZA & CALZONES'))



    // loop through the json to create a header for each type of food

    menuItems.Antipasti.forEach((category) => {
        //create the container

        const $menuItemContainer = createHTMLElement('div', 'menuItemContainer', ['antipasti']);
        $antpastiContainer.appendChild($menuItemContainer);

        // create the title, price, and description
        $menuItemContainer.appendChild(createHTMLElement('h3', 'menuItem', null, category.ID));

        const $subContainer = createHTMLElement('div', 'subContainer');
        $menuItemContainer.appendChild($subContainer)

        $subContainer.appendChild(createHTMLElement('h4', 'price', null, category.price));
        $subContainer.appendChild(createHTMLElement('h4', 'menuDescription', null, category.description));
        
    });

    menuItems['Pizza & Calzones'].forEach((category) => {
        //create the container

        const $menuItemContainer = createHTMLElement('div', 'menuItemContainer', ['antipasti']);
        $antpastiContainer.appendChild($menuItemContainer);

        // create the title, price, and description
        $menuItemContainer.appendChild(createHTMLElement('h3', 'menuItem', null, category.ID));

        const $subContainer = createHTMLElement('div', 'subContainer');
        $menuItemContainer.appendChild($subContainer)

        $subContainer.appendChild(createHTMLElement('h4', 'price', null, category.price));
        $subContainer.appendChild(createHTMLElement('h4', 'menuDescription', null, category.description));
        
    });

    // loop through each object in header





    $menuContainer.appendChild($menu);
    $frame.appendChild($menuContainer);
}

export { renderMenu };