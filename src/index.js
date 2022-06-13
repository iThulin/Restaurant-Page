import _ from 'lodash';
import './style.css';
import Icon from './pizza_oven.png';

function component() {
    const element = document.createElement('div');

    //Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());