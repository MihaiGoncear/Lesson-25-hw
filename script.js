import { renderFullYear } from './renderYear.js'
import { createContent } from './createContent.js'

let renderBttn = document.getElementById('render');
renderBttn.onclick = makeYear;

function makeYear() {  
    renderFullYear()  
    fetch('https://api.nasa.gov/planetary/apod?api_key=onuijb7b2ILtD2BxLz3FOz8lYhd1NfHMFMVz4v3C&date=' + fullYear)
    .then(response => response.json())
    .then(data => {
            createContent(data);
    })
}





 