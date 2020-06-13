export function createContent(info) {
    let title = document.createElement('h1');
    title.innerText = info.title;

    let imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    if(info.media_type === 'video') {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', info.url);
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

    container.append(title);
    container.append(imageDiv);
    container.append(paragraph);
    container.append(copyrightDiv);
}