import generateJoke from "./generateJoke";

import './styles/main.scss'
import scanner from './assets/Scanner.jpg'

const scannerImg = document.getElementById('scannerImg');
scannerImg.src = scanner;


console.log(generateJoke())