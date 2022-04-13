window.onload = choosePic

var myPix = new Array("img/portfolio/13.jpg","img/portfolio/14.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
