import { data } from '../data.js';
import { createLogo } from './Logo.js';

export function createFooter() {
  const { footer: { description, socialMedia} } = data; // problema con el guion
  const footerElement = document.createElement('footer');
  footerElement.className = 'footer';

  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'description';
  descriptionElement.textContent = description;

  const socialElement = document.createElement('ul');
  socialElement.className = 'social'

  socialMedia.forEach(({href, image}) => {
    const elementToSocial = document.createElement('li');
    elementToSocial.className = 'social-links';
    elementToSocial.innerHTML = `<a href=${href}><img src= ${image}></a>`;

    socialElement.appendChild(elementToSocial)
  });

  const logoElement = createLogo();

  footerElement.appendChild(socialElement);
  footerElement.appendChild(descriptionElement);

  return footerElement;
}