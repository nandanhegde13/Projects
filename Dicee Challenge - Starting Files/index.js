document.getElementById("h1").style.color = "yellow";

var rand1 = Math.floor(Math.random()*6)+1;
var randImage1 = "dice"+rand1+".png";

var rand2 = Math.floor(Math.random()*6)+1;
var randImage2 = "dice"+rand2+".png";


var randomImageSource = "images/"+randImage1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

var randomImageSource = "images/"+randImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource);


if(rand1>rand2){
  document.getElementById("h2").innerHTML = "Player1 won🥇";
}
else{
    document.getElementById("h2").innerHTML = "Player2 won🥇";
}

