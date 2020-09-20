import { createHeader } from './Components/Header.js';

const rootElement = document.getElementById('root');
const headerElement = createHeader();


rootElement.appendChild(headerElement);

