import { createHeader } from './Components/Header.js';
<<<<<<< HEAD
import { createLogo } from './Components/Logo.js'
import { createMain } from './Components/Main.js'

const rootElement = document.getElementById('root');
const headerElement = createHeader();
const mainElement = createMain();

rootElement.appendChild(headerElement);
rootElement.appendChild(mainElement);
=======
import { createFooter } from './Components/Footer.js';

const rootElement = document.getElementById('root');
const headerElement = createHeader();
const footerElement = createFooter();

rootElement.appendChild(headerElement);
rootElement.appendChild(footerElement);
>>>>>>> Add social-media icons and footer
