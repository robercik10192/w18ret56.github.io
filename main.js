function importScript(url){
var req = new XMLHttpRequest();
req.open('GET',url, false); 
req.send(null);
eval(req.responseText);
}
