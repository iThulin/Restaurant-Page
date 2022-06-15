import {createHTMLElement, $frame} from '../index.js';

function renderFooter() {
    const $footer = createHTMLElement('div', 'footer')

    const $developerContainer = createHTMLElement('div', 'container')

    $developerContainer.appendChild(createHTMLElement('p', 'attribution', null, 'Developed by'));
    
    const developerLink = createHTMLElement('a', null, null, 'iThulin');
    developerLink.href = 'https://github.com/iThulin';
    $developerContainer.appendChild(developerLink);

    $footer.appendChild($developerContainer);

    const $photographerContainer = createHTMLElement('div', 'container')
    $footer.appendChild($photographerContainer);

    $photographerContainer.appendChild(createHTMLElement('p', 'attribution', null, 'Photo by'));
    
    const photoLink = createHTMLElement('a', null, null, 'Daniel Lee');
    photoLink.href = 'https://unsplash.com/@crtvdan';
    
    $photographerContainer.appendChild(photoLink);

    $frame.appendChild($footer);
}

export { renderFooter };