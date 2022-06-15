import {createHTMLElement, $frame} from '../index.js';

function renderMain() {
    const $mainContent = createHTMLElement('div', 'main')

    const $title = createHTMLElement('h1', 'title', null, 'Farina Alto')
    const $subtitle = createHTMLElement('h2', 'subtitle', null, 'Pizzaria and Wine Bar')

    $mainContent.appendChild($title);
    $mainContent.appendChild($subtitle);

    $frame.appendChild($mainContent);
}

export { renderMain };