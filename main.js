//////////////// weight converter
var valueIngrame = document.getElementById("grames");
var valueInkilos = document.getElementById("kilos");
var valueInpound = document.getElementById("pound");
function convertwei(id, val) {
  if (id == "grames") {
    kilos.value = val / 1000;
    pound.value = val * 0.0022046;
  }
  if (id == "pound") {
    grames.value = val / 0.0022046;
    kilos.value = val / 2.2046;
  }
  if (id == "kilos") {
    grames.value = val * 1000;
    pound.value = val * 2.2046;
  }
}
valueIngrame?.addEventListener("input", function () {
  convertwei("grames", this.value);
});
valueInkilos?.addEventListener("input", function () {
  convertwei("kilos", this.value);
});
valueInpound?.addEventListener("input", function () {
  convertwei("pound", this.value);
});
///////////////////////// length converter
var cent = document.getElementById("cm");
var metre = document.getElementById("metre");
var inch = document.getElementById("inch");

function convertlen(id, val) {
  if (id == "cm") {
    metre.value = val / 100;
    inch.value = val / 2.54;
  }
  if (id == "metre") {
    cent.value = val / 100;
    inch.value = val * 0.0254;
  }
  if (id == "inch") {
    cent.value = val * 2.54;
    metre.value = val * 2.54*100;
  }
}

cent.addEventListener("input", function () {
  console.log(this)
  convertlen("cm", this.value);
});
metre.addEventListener("input", function () {
  convertlen("metre", this.value);
});
inch.addEventListener("input", function () {
  convertlen("inch", this.value);
});