import { renderNavBar } from './navbar.js';
import './style.css';

// Creates an element to hold all the content of the webpage.
// This element is exported to other modules for augmentation.

const framework = document.createElement('div');
document.body.appendChild(framework);
framework.id = 'frame';
const $frame = document.getElementById('frame')

function createHTMLElement(type, id, classes, content) {
  // When passed the parameters this function will return a new HTML element
  // with all parameters applied.
  const element = document.createElement(type);

  if (id) element.id = id;
  if (classes) classes.forEach((newClass) => element.classList.add(newClass));
  if (content) element.innerText = content;

  return element;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function home() {
  removeAllChildNodes($frame);
  console.log('Render Home');
  renderNavBar();
  //render main
  //render footer
}

function menu() {
  removeAllChildNodes($frame);
  console.log('Render Menu');
  renderNavBar();
  //render menu
  //render footer
}

function about() {
  removeAllChildNodes($frame);
  console.log('Render About');
  renderNavBar();
  //render about
  //render footer
}



home();
document.addEventListener('click', (element) => {
  const target = element.target;

  if (target.id == 'HOME') home();
  if (target.id == 'MENU') menu();
  if (target.id == 'ABOUT') about();
});


//document.body.appendChild(createFramework());
export {createHTMLElement, $frame};