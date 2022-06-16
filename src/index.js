import { renderFooter } from './modules/footer.js';
import { renderNavBar } from './modules/navbar.js';
import { renderMain } from './modules/main';
import { renderMenu } from './modules/menu.js';
import { renderAbout } from './modules/about.js';
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
  renderMain();
  renderFooter();
}

function menu() {
  removeAllChildNodes($frame);
  console.log('Render Menu');
  renderNavBar();
  renderMenu();
  renderFooter();
}

function about() {
  removeAllChildNodes($frame);
  console.log('Render About');
  renderNavBar();
  renderAbout();
  renderFooter();
}
// Load homepage on load
home();
document.addEventListener('click', (element) => {
  const target = element.target;

  if (target.id == 'HOME') home();
  if (target.id == 'MENU') menu();
  if (target.id == 'ABOUT') about();
});

export {createHTMLElement, $frame};