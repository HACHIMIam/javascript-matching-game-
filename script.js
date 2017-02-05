var numberofface=5;
var score=0;
var leftside=document.getElementById("leftside");
var rightside=document.getElementById("rightside");
function generateFace() {

  while(leftside.firstChild){
    leftside.removeChild(leftside.firstChild);
  }
  while(rightside.firstChild){
    rightside.removeChild(rightside.firstChild);
  }
  for (var i=0;i<numberofface;i++){
    var img=document.createElement("img");
    img.setAttribute("src","img.png");
    img.style.width="100px";
    img.style.position="absolute";
    var rundnumberleft=Math.random()*380;
    var rundnumbertop=Math.random()*380;

    img.style.left=rundnumberleft+"px";
    img.style.top=rundnumbertop+"px";
    img.setAttribute("id",i);
    leftside.appendChild(img);
  }
  cln=leftside.cloneNode("true");
  cln.removeChild(cln.lastChild);
  rightside.appendChild(cln);
  event.stopPropagation();

  leftside.lastChild.onclick=createClickHandler();



}
var createClickHandler = function(arg) {
  return function load(){


      numberofface+=5;
      generateFace();
      score=score+100;
      var h2=document.getElementById("h2");
      h2.innerHTML="Score: "+score;
   }
}

function start() {

  generateFace();

  var theBody=document.getElementsByTagName('body')[0];

  theBody.onclick=function gameover() {
    alert("game over");
    numberofface=5;
      h2.innerHTML="Score:"
      score=0;
    generateFace();


  }


  }
