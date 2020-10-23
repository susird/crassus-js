import { data } from '../data.js';
import { createLogo } from './Logo.js';

export function createFooter() {
  const { footer: { description, socialMedia} } = data; // problema con el guion
  const footerElement = document.createElement('footer');
  footerElement.className = 'footer';

  const logoSocial = document.createElement('div');
  logoSocial.className = 'logo-social';

  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'description';
  descriptionElement.textContent = description;
  

  const socialElement = document.createElement('ul');
  socialElement.className = 'social'

  socialMedia.forEach(({href, image, description}) => {
    const elementToSocial = document.createElement('li');
    elementToSocial.className = 'social-links';
    elementToSocial.innerHTML = `<a href=${href}><img src= ${image}></a>`;

    socialElement.appendChild(elementToSocial)
  });

  const  { header: { links } } = data;
  const linkElement = document.createElement('ul');
  linkElement.className = 'menu-footer';

  links.forEach(({ href, label }) => {
    const element = document.createElement('li');
    element.className = 'menu-links-footer';
    element.innerHTML = `<a href=${href}>${label}</a>`;
    linkElement.appendChild(element);
  });

  const logoElement = createLogo();
  logoSocial.appendChild(logoElement);
  logoSocial.appendChild(descriptionElement);
  logoSocial.appendChild(socialElement);
  footerElement.appendChild(logoSocial);
  footerElement.appendChild(linkElement);

  return footerElement;
}