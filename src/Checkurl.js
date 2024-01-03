export function checkUrl(urls){
    let adressUrl ;
    try{
        adressUrl = new URL(urls);
    }catch(err){
        return false;
    }
    return true;
}