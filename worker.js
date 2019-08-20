postMessage("START");
var i = 0;
for(i=0;i<100;i++){
  if(i % 2 == 0){
    postMessage(i);
  }
}
postMessage("KONIEC");
