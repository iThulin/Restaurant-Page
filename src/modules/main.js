import {createHTMLElement, $frame} from '../index.js';

function renderMain() {
    // Main div
    const $mainContent = createHTMLElement('div', 'main')

    // Create title and subtitle
    const $title = createHTMLElement('h1', 'title', null, 'Farina Alto')
    $mainContent.appendChild($title)
    const $subtitle = createHTMLElement('h2', 'subtitle', null, 'Pizzeria and Wine Bar')
    $mainContent.appendChild($subtitle);

    // Attach section to main framework
    $frame.appendChild($mainContent);
}

export { renderMain };