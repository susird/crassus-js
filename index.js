console.log('Hello World')

import { createLogo } from './Components/Logo.js'

const rootElement = document.getElementById('root');
const logoElement = createLogo();

rootElement.appendChild(logoElement);