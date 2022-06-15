import {createHTMLElement, $frame} from '../index.js';

function renderFooter() {
    const $footer = createHTMLElement('div', 'footer', null, null)
    $footer.appendChild(createHTMLElement('p', 'attribution', null, 'Created by  '));
    
    const footerLink = createHTMLElement('a', null, null, 'iThulin');
    footerLink.href = 'https://github.com/iThulin';
    $footer.appendChild(footerLink);

    $frame.appendChild($footer);
}

export { renderFooter };