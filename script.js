import { makeYear } from './renderYear.js'

let renderBttn = document.getElementById('render');
renderBttn.onclick = makeYear;


fetch('https://api.nasa.gov/planetary/apod?api_key=onuijb7b2ILtD2BxLz3FOz8lYhd1NfHMFMVz4v3C&date=' + makeYear())
    .then(response => response.json())
    .then(data => {
            createContent(data);
})

function createContent(info) {
    let body = document.body;
            let title = document.createElement('h1');
            title.innerText = info.title;

            let imageDiv = document.createElement('div');
            imageDiv.classList.add('image');

            if(info.media_type === 'video') {
                let iframe = document.createElement('iframe');
                iframe.setAttribute('src', data.url);
                iframe.setAttribute('width', '420');
                iframe.setAttribute('height', '300');
                imageDiv.append(iframe);
            } else {
                let image = document.createElement('img');
                image.setAttribute('src', info.url);
                imageDiv.append(image);
            }

            let paragraph = document.createElement('p');
            paragraph.innerText = info.explanation;
            
            let copyrightDiv = document.createElement('div');
            copyrightDiv.classList.add('copyright');
            
            let copyrightSpan = document.createElement('span');

            if(info.copyright){
                copyrightSpan.innerHTML = '© ' + info.copyright;
            } else {
                copyrightSpan.innerHTML = '©';
            }
            
            copyrightDiv.append(copyrightSpan);

            body.append(title);
            body.append(imageDiv);
            body.append(paragraph);
            body.append(copyrightDiv);
}



 