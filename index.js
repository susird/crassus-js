import { createHeader } from './Components/Header.js';
import { createLogo } from './Components/Logo.js'
import { createMain } from './Components/Main.js'

const rootElement = document.getElementById('root');
const headerElement = createHeader();
const logoElement = createLogo();
const mainElement = createMain();

rootElement.appendChild(logoElement);
rootElement.appendChild(mainElement);
rootElement.appendChild(headerElement);
