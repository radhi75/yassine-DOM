// var red=document.getElementsByClassName(".btnred");
// function red {
//     switch color:
//     case red:
//         "onclick" return bag "red";
//     case yellow:
//         "onclick" return bag= "yellow";
//     case green:
//         "onclick" return bag "green";
//         default:
//             return null

var test = document.querySelector("body");

var btn = document.querySelector(".btnred");
btn.addEventListener("click", function () {
  test.style.background = "red";
});
var btn = document.querySelector(".btngreen");
btn.addEventListener("click", function () {
  test.style.background = "green";
});
var btn = document.querySelector(".btnyellow");
btn.addEventListener("click", function () {
  test.style.background = "yellow";
});


