import _ from 'lodash';
import './style.css';

function createFramework() {
  // Create framework divs
  const content = document.createElement('div');
  const header = document.createElement('div');
  const main = document.createElement('div');
  const footer = document.createElement('div');
  
  // Assign class to framework elements
  content.classList.add('content');
  header.classList.add('header');
  main.classList.add('main');
  footer.classList.add('footer');

  // Add framework elements to content container
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
  
  return content;
}
  
document.body.appendChild(createFramework());