var btnplus = document.querySelector(".btnplus");
var qtes = document.querySelector(".counter");

btnplus.addEventListener("click", function () {
  qtes.innerHTML++;
});

var btnminus = document.querySelector(".btnminus");

btnminus.addEventListener("click", function () {
  if (qtes.innerHTML > 0) {
    qtes.innerHTML--;
  }
});
