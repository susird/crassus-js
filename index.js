import { createHeader } from './Components/Header.js';
import { createLogo } from './Components/Logo.js'
import { createMain } from './Components/Main.js'
import { createFooter } from './Components/Footer.js';

const rootElement = document.getElementById('root');
const headerElement = createHeader();
const mainElement = createMain();
const footerElement = createFooter();

rootElement.appendChild(headerElement);
rootElement.appendChild(mainElement);
rootElement.appendChild(footerElement);
