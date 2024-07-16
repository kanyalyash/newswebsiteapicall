
import {
    newsService
}from"../services/news-services.js";
async function prepareNews(){
const allNews=await newsService.readNews();
allNews.forEach(news=>printNews(news));
console.log('all news are',allNews) ;  
}
function printNews(news){
    const newsID =document.querySelector('#news');
    const colDiv=document.createElement('div');
    colDiv.className='col-4';
    const cardDiv =document.createElement('div');
    cardDiv.className='card';
    cardDiv.style.width='18rem';
    colDiv.appendChild(cardDiv);
    const img=document.createElement('img');
    img.src=news.image;
    img.className='card-img-top';
    cardDiv.appendChild(img);
    const cardbody=document.createElement('div');
    cardbody.className='card-body';
    cardDiv.appendChild(cardbody);
    const h5=document.createElement('h5');
 h5.className='card-title';
 h5.innerText=news.title;
 cardbody.appendChild(h5);
const pTag=document.createElement('p');
pTag.innerText=news.desc;
pTag.className='card-text';
cardbody.appendChild(pTag);
const aTag=document.createElement('a');
aTag.href=news.url;
aTag.className='btn btn-primary';
aTag.innerText='Read More';
cardbody.appendChild(aTag);
newsID.appendChild(colDiv);
}
    prepareNews();