import { createLogo } from './Components/Logo.js'
import { createHeader } from './Components/Header.js'

const rootElement = document.getElementById('root');
const headerElement = createHeader();
const logoElement = createLogo();

rootElement.appendChild(headerElement);
rootElement.appendChild(logoElement);
