export function extractFavicon(url) {
  var favicon = "";

  if (favicon.indexOf("http") !== 0) {
    var parser = document.createElement("a");
    parser.href = url;
    favicon = parser.protocol + "//" + parser.hostname + "/favicon.ico";
  }
  return favicon;
}