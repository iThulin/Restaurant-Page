import {createHTMLElement, $frame} from '../index.js';

function renderFooter() {
    // Main div's
    const $attributions = createHTMLElement('div', 'attributions')
    const $footer = createHTMLElement('div', 'footer');

    // Containers
    const $developerContainer = createHTMLElement('div', 'container');
    $attributions.appendChild($developerContainer);
    const $photographerContainer = createHTMLElement('div', 'container');
    $attributions.appendChild($photographerContainer);

    // Developed by LINK
    $developerContainer.appendChild(createHTMLElement('p', 'attribution', null, 'Developed by'));
    const developerLink = createHTMLElement('a', null, null, 'iThulin');
    developerLink.href = 'https://github.com/iThulin';
    $developerContainer.appendChild(developerLink);

    // Photo by LINK
    $photographerContainer.appendChild(createHTMLElement('p', 'attribution', null, 'Photo by'));
    const photoLink = createHTMLElement('a', null, null, 'Daniel Lee');
    photoLink.href = 'https://unsplash.com/@crtvdan';
    $photographerContainer.appendChild(photoLink);

    // Attach sections to main framework
    $frame.appendChild($footer)
    $frame.appendChild($attributions);
}

export { renderFooter };