import {createHTMLElement, $frame} from '../index.js';
import menuData from '../menuData.json';

function renderMenu() {
    const menuItems = menuData;

    // Main divs
    const $menuContainer = createHTMLElement('div', 'menuContainer');
    const $menu = createHTMLElement('div', 'menu');

    // Containers for each type of food
    $menu.appendChild(createHTMLElement('h2', 'subMenuTitle', null, 'ANTIPASTI'));
    const $antpastiContainer = createHTMLElement('div', 'Antipasti', ['subMenu']);
    $menu.appendChild($antpastiContainer);

    $menu.appendChild(createHTMLElement('h2', 'subMenuTitle', null, 'INSALATA'));
    const $insalataContainer = createHTMLElement('div', 'Insalata', ['subMenu']);
    $menu.appendChild($insalataContainer);

    $menu.appendChild(createHTMLElement('h2', 'subMenuTitle', null, 'PIZZA & CALZONES'))
    const $pizzaAndCalzonesContainer = createHTMLElement('div', 'Pizza-Calzones', ['subMenu']);
    $menu.appendChild($pizzaAndCalzonesContainer);

    $menu.appendChild(createHTMLElement('h2', 'subMenuTitle', null, 'Pasta & Primi'))
    const $pastaAndPrimiContainer = createHTMLElement('div', 'Pasta-Primi', ['subMenu']);
    $menu.appendChild($pastaAndPrimiContainer);

    // Antipasti
    menuItems.Antipasti.forEach((category) => {
        // Menu item container
        const $menuItemContainer = createHTMLElement('div', 'menuItemContainer', ['antipasti']);
        $antpastiContainer.appendChild($menuItemContainer);

        // Title
        $menuItemContainer.appendChild(createHTMLElement('h3', 'menuItem', null, category.ID));

        // Price and Description
        const $subContainer = createHTMLElement('div', 'subContainer');
        $menuItemContainer.appendChild($subContainer)

        $subContainer.appendChild(createHTMLElement('h4', 'price', null, category.price));
        $subContainer.appendChild(createHTMLElement('h4', 'menuDescription', null, category.description));
    });

    // Insalata
    menuItems['Pizza & Calzones'].forEach((category) => {
        // Menu Item container
        const $menuItemContainer = createHTMLElement('div', 'menuItemContainer', ['insalata']);
        $insalataContainer.appendChild($menuItemContainer);

        // Title
        $menuItemContainer.appendChild(createHTMLElement('h3', 'menuItem', null, category.ID));

        const $subContainer = createHTMLElement('div', 'subContainerInsalata');
        $menuItemContainer.appendChild($subContainer)

        // Description
        $subContainer.appendChild(createHTMLElement('h4', 'menuDescription', null, category.description));
        
        // Price
        const $priceContainer = createHTMLElement('div', 'priceContainer')
        $subContainer.appendChild($priceContainer);
        
        $priceContainer.appendChild(createHTMLElement('h4', null, null, 'half'));
        $priceContainer.appendChild(createHTMLElement('h4', 'halfPrice', null, category['half-price']));
        $priceContainer.appendChild(createHTMLElement('h4', null, null, 'full'));
        $priceContainer.appendChild(createHTMLElement('h4', 'fullPrice', null, category['full-price']));
    });

    // Pizza & Calzones
    menuItems['Pizza & Calzones'].forEach((category) => {
        // Menu Item container
        const $menuItemContainer = createHTMLElement('div', 'menuItemContainer', ['Pizza-Calzones']);
        $pizzaAndCalzonesContainer.appendChild($menuItemContainer);

        // Title
        $menuItemContainer.appendChild(createHTMLElement('h3', 'menuItem', null, category.ID));

        const $subContainer = createHTMLElement('div', 'subContainerPizza');
        $menuItemContainer.appendChild($subContainer)

        // Description
        $subContainer.appendChild(createHTMLElement('h4', 'menuDescription', null, category.description));
        
        // Price
        const $priceContainer = createHTMLElement('div', 'priceContainer')
        $subContainer.appendChild($priceContainer);
        
        $priceContainer.appendChild(createHTMLElement('h4', null, null, 'half'));
        $priceContainer.appendChild(createHTMLElement('h4', 'halfPrice', null, category['half-price']));
        $priceContainer.appendChild(createHTMLElement('h4', null, null, 'full'));
        $priceContainer.appendChild(createHTMLElement('h4', 'fullPrice', null, category['full-price']));
    });

    // Antipasti
    menuItems.Antipasti.forEach((category) => {
        // Menu item container
        const $menuItemContainer = createHTMLElement('div', 'menuItemContainer', ['pasta-primi']);
        $pastaAndPrimiContainer.appendChild($menuItemContainer);

        // Title
        $menuItemContainer.appendChild(createHTMLElement('h3', 'menuItem', null, category.ID));

        // Price and Description
        const $subContainer = createHTMLElement('div', 'subContainer');
        $menuItemContainer.appendChild($subContainer)

        $subContainer.appendChild(createHTMLElement('h4', 'price', null, category.price));
        $subContainer.appendChild(createHTMLElement('h4', 'menuDescription', null, category.description));
    });

    // Attach sections to the main framework
    $menuContainer.appendChild($menu);
    $frame.appendChild($menuContainer);
}

export { renderMenu };