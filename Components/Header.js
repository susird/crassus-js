import { data } from '../data.js';
import { createLogo } from './Logo.js';

export function createHeader() {
  const { header: {links} } = data;
  const headerElement = document.createElement('header');
  headerElement.className = 'header';
  
  const hamElement = document.createElement('div');
  hamElement.className = 'ham-box';
  
  const linkElement = document.createElement('ul');
  linkElement.className = 'links';

  const buttonElement = document.createElement('button')
  buttonElement.className = 'button'
  buttonElement.innerHTML = `
      <div class="item-button item-button-1"></div>
      <div class="item-button item-button-2"></div>
      <div class="item-button item-button-3"></div>`

  links.forEach(({href, label})  => {
    const element = document.createElement('li');
    element.className = 'nav-links';
    element.innerHTML = `<a href=${href}>${label}</a>`;
    linkElement.appendChild(element);
  });

  buttonElement.addEventListener('click', toggleHamburger)
   function toggleHamburger() {
     headerElement.classList.toggle("showHam");
   };
   
  const logoElement = createLogo();
  headerElement.appendChild(logoElement);
  headerElement.appendChild(hamElement);
  headerElement.appendChild(linkElement);
  headerElement.appendChild(buttonElement);

  return headerElement;
}