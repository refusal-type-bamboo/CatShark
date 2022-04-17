$(function() {
window.onload = displayPic

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//Initialize an array of images
var myPix = new Array();
var prefix = "img/portfolio/";
for (let i = 1; i <= 17; i++){
  myPix.push(prefix.concat(i,".jpg"));
}

shuffle(myPix);

function displayPic() {

     var bar = document.getElementById("portfolio-sidebar").getElementsByTagName("li");
     for (let i = 0; i < myPix.length; i++) {
       bar[i].getElementsByTagName("img")[0].src = myPix[i];
     }
}

})
