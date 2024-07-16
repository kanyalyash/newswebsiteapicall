import News from "../models/news.js";
import { URL } from "../utils/js config.js";
import { getNews } from "./api-client.js";
export const newsService={
    async readNews(){
        const news = await getNews(URL)
        console.log('News are',news.articles);
        const allNews=[];
         
        //for(let i=0;i<news.articles.length;i++){
          //  const currentNews=news.articles[i];
            //const newsObject=new news(currentNews['title'],currentNews['description'],currentNews['url'],currentNews['urlToImage']);
//allNews.push(newsObject);
  //      }
  //declarative way
  
  return news.articles.map((currentNews)=>new News(currentNews['title'],currentNews['description'],currentNews['url'],currentNews['urlToImage']));

  //return allNews;
    },
    markRead(){

    },
    markReadLater(){

    }
}
