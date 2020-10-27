import { data } from '../data.js'

export function createMain() {
  const { main: { aside, article } } = data;
  const mainElement = document.createElement('main')
  mainElement.className = 'main';

  const urlToFigure = "https://avatars.dicebear.com/api/avataaars/55.svg";
  const urlToPost = "https://avatars.dicebear.com/api/avataaars/85.svg";

  const asideElement = document.createElement('aside');
  asideElement.className = 'last-posts';
  
  const articleElement = document.createElement('article');
  articleElement.className = 'article';

  const postsElement = document.createElement('ul');
  postsElement.className = 'posts';

  aside.forEach( ({title, content})=> {
    const elementToPost = document.createElement ('li');
    elementToPost.className = "content"
    elementToPost.innerHTML = `<h3>${title}</h3><p>${content}</p><a class="read-more" href="${urlToPost}">Read More...</a>`
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
    elementToFigure.innerHTML =`<a href=${urlToFigure}><img src=${image}></a>${description}`;
    figureElement.appendChild(elementToFigure);
  })
  
  mainElement.appendChild(wallpaperElement);
  mainElement.appendChild(asideElement);
  mainElement.appendChild(articleElement);
  mainElement.appendChild(figureElement);

  return mainElement;
}