import { checkUrl } from './Checkurl';
export function store(url){
console.log(url);
   if(checkUrl(url)){
const keyValue =Math.floor(Math.random()*(999-100+1)+100);
localStorage.setItem(keyValue, url);
return true
   }else{
      return false
   }
    
    
}

export default store;