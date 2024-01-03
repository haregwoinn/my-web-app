export function getall(){
    const allurls = [];
    for (let i = 0; i < localStorage.length; i++){
 const generatedurl = localStorage.getItem(localStorage.key(i));
    allurls.push(generatedurl);
     }

     return allurls;
}

export default getall;