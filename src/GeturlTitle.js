export function geturlTitle(urls){
    let hostName = urls
hostName = hostName.replace("https://", "");
hostName = hostName.replace("https://", "");
hostName = hostName.replace("www.", "");
return hostName.split(".")[0];
}