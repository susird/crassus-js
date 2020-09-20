import { data } from '../data.js';

export function createHeader() {
  const { header: {links} } = data;
  const headerElement = document.createElement('header');
  headerElement.className = 'header';

  const linkElement = document.createElement('ul');
  linkElement.className = 'links';
  
  links.forEach( ({href, label})  => {
    const element = document.createElement('li');
    element.className = 'nav-links';
    element.innerHTML = `
    <a href= ${href}>
    ${label}
    </a>
    `;

    linkElement.appendChild(element);
  });

  headerElement.appendChild(linkElement);

  return headerElement;
}