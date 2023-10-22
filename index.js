var black = document.getElementById("black");
var blue = document.getElementById("blue");
var pink = document.getElementById("pink");
var purple = document.getElementById("purple");
var red = document.getElementById("red");

red.addEventListener("click", function () {
  var source = (document.getElementById("watch").src = "assets/images/red.png");
});

black.addEventListener("click", function () {
  var source = (document.getElementById("watch").src =
    "assets/images/black.png");
});

blue.addEventListener("click", function () {
  var source = (document.getElementById("watch").src =
    "assets/images/blue.png");
});

pink.addEventListener("click", function () {
  var source = (document.getElementById("watch").src =
    "assets/images/pink.png");
});

purple.addEventListener("click", function () {
  var source = (document.getElementById("watch").src =
    "assets/images/purple.png");
});


// code to display the time
 function showTime() {
   const date = new Date();
   const h = date.getHours();
   const m = date.getMinutes();
   const s = date.getSeconds();

//    document.getElementsByClassName(".time").innerHTML(h + ":" + m + ":" + s);
var div = document.getElementById("display");
div.innerHTML = h + ":" + m + ":" + s;
//    console.log(h);
 }
 setInterval(showTime, 1000);