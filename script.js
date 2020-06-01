fetch('https://api.nasa.gov/planetary/apod?api_key=onuijb7b2ILtD2BxLz3FOz8lYhd1NfHMFMVz4v3C&date=2020-01-22&hd=true')
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

            let image = document.createElement('img');
            image.setAttribute('src', info.url);
            imageDiv.append(image);

            let paragraph = document.createElement('p');
            paragraph.innerText = info.explanation;

            let copyrightDiv = document.createElement('div');
            copyrightDiv.classList.add('copyright');
            
            let copyrightSpan = document.createElement('span');
            copyrightSpan.innerHTML = '© ' + info.copyright;
            copyrightDiv.append(copyrightSpan);

            body.append(title);
            body.append(imageDiv);
            body.append(paragraph);
            body.append(copyrightDiv);
}