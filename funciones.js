


function conversion(){
  var textoperutv=document.getElementById("textoperutv");
  var texto=document.getElementById("texto").value;
  var palabrakeyperctv=document.getElementById("palabraclave").value;
  var utmperctv="?utm_source=perctv&utm_medium=pctv&utm_campaign=pcufree";
  var finalutmperctv= texto + utmperctv;
  var palabraclaveperctv= palabrakeyperctv+"pctv";
  textoperutv.innerHTML="<br><br><br>"+finalutmperctv + "||||||||||||"+ palabraclaveperctv;
  
}  
