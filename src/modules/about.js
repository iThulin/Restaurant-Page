import {createHTMLElement, $frame} from '../index.js';

function renderAbout() {
    // Main divs
    const $aboutContainer = createHTMLElement('div', 'aboutContainer');
    const $about = createHTMLElement('div', 'about');

    // Create title and subtitle
    $about.appendChild(createHTMLElement('h2', 'callToAction', null, 'VISIT US'));

    const $aboutSubContainer = createHTMLElement('div', 'aboutSubContainer');
    $about.appendChild($aboutSubContainer);

    // Location
    const $locationContainer = createHTMLElement('div', 'locationContainer');
    $aboutSubContainer.appendChild($locationContainer);
    $locationContainer.appendChild(createHTMLElement('h3', 'location', null, 'ALBUQUERQUE NM'));
    $locationContainer.appendChild(createHTMLElement('h4', 'address', null, '10721 Montgomery Blvd NE'));
    $locationContainer.appendChild(createHTMLElement('h4', 'address', null, 'Albuquerque, NM 87111'));
    $locationContainer.appendChild(createHTMLElement('h4', 'phoneNumber', null, '(505) 298-0035'));

    // Hours
    const $hoursContainer = createHTMLElement('div', 'hoursContainer');
    $aboutSubContainer.appendChild($hoursContainer);

    $hoursContainer.appendChild(createHTMLElement('h3', 'hours', null, 'HOURS'));

    const $hoursSubContainer1 = createHTMLElement('div', 'hoursSubContainer');
    $hoursContainer.appendChild($hoursSubContainer1);

    $hoursSubContainer1.appendChild(createHTMLElement('h4', 'dayOfWeek', null, 'Monday - Thursday'))
    $hoursSubContainer1.appendChild(createHTMLElement('h4', 'timeRange', null, '11:00 am - 8:00 pm'));

    const $hoursSubContainer2 = createHTMLElement('div', 'hoursSubContainer');
    $hoursContainer.appendChild($hoursSubContainer2);

    $hoursSubContainer2.appendChild(createHTMLElement('h4', 'dayOfWeek', null, 'Friday - Saturday'))
    $hoursSubContainer2.appendChild(createHTMLElement('h4', 'timeRange', null, '11:00 am - 9:00 pm'));

    const $hoursSubContainer3 = createHTMLElement('div', 'hoursSubContainer');
    $hoursContainer.appendChild($hoursSubContainer3);

    $hoursSubContainer3.appendChild(createHTMLElement('h4', 'dayOfWeek', null, 'Sunday'));
    $hoursSubContainer3.appendChild(createHTMLElement('h4', 'timeRange', null, '12:00 pm - 8:00 pm'));

    // Map
    $about.appendChild(createHTMLElement('div', 'map'))

    // Attach sections to the main framework
    $aboutContainer.appendChild($about);
    $frame.appendChild($aboutContainer);
}

export { renderAbout };