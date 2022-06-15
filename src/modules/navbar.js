import {createHTMLElement, $frame} from '../index.js';

function renderNavBar() {
    const navItems = ['HOME', 'MENU', 'ABOUT'];
    const $ul = document.createElement('ul');

    navItems.forEach((item) => 
        $ul.appendChild(createHTMLElement('button', item, ['navButton'], item))
    );

    const $nav = document.createElement('div');
    $nav.id = 'nav';
    $nav.appendChild($ul);

    $frame.appendChild($nav);
}

export { renderNavBar };