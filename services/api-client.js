import {URL} from '../utils/js config.js';
export async function getNews(URL){
    try{
        const response=await fetch(URL);
        const data=await response.json();
        console.log('data is',data);
        return data;
    }
    catch(err){
        throw err;
    }
  /* const promise = fetch(URL) ;
   console.log('promise is ',promise);
   promise.then(function(response){
const pr = response.json();
pr.then(function(data){
    console.log('data rec ',data);
}).catch(function(err){
    console.log('invalid JSON',err);
})
   }).catch(function(err){

   })

*/}
getNews(URL);