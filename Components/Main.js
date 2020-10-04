import { data } from '../data.js'

export function createMain() {
  const { main: { aside, article } } = data;
  const mainElement = document.createElement('main')
  mainElement.className = 'main';

  const asideElement = document.createElement('aside');
  asideElement.className = 'last-posts';
  
  const articleElement = document.createElement('article');
  articleElement.className = 'article';

  const postsElement = document.createElement('ul');
  postsElement.className = 'posts';

  aside.forEach( ({title, content})=> {
    /*const readMoreElement = document.createElement('a')
    readMoreElement.className = 'read-more';
    readMoreElement.textContent = "Read More";*/

    const elementToPost = document.createElement ('li');
    elementToPost.className = "content"
    elementToPost.innerHTML = `<h3>${title}</h3><p>${content}</p><a class="read-more" href="https://api.adorable.io/avatars/1000/500.png">Read More...</a>`
    //elementToPost.appendChild(readMoreElement);
    postsElement.appendChild(elementToPost);
  });

  const wallpaperElement = document.createElement('div')
  wallpaperElement.className = 'wallpaper';
  wallpaperElement.appendChild(postsElement);

  const figureElement = document.createElement('ul');
  figureElement.className = "img1-container"

  article.forEach( ({ image, description }) =>{
    const elementToFigure = document.createElement('li')
    elementToFigure.className = "caption"
    elementToFigure.innerHTML =`<a href="https://api.adorable.io/avatars/1000/35.png"><img src=${image}></a>${description}`;
    
    figureElement.appendChild(elementToFigure);
  })
  
  mainElement.appendChild(wallpaperElement);
  mainElement.appendChild(asideElement);
  mainElement.appendChild(articleElement);
  mainElement.appendChild(figureElement);

  return mainElement;
}