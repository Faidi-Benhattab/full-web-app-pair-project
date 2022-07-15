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

cent?.addEventListener("input", function () {
  console.log(this)
  convertlen("cm", this.value);
});
metre?.addEventListener("input", function () {
  convertlen("metre", this.value);
});
inch?.addEventListener("input", function () {
  convertlen("inch", this.value);
});
/////temperature conversion 
var Celsius = document.getElementById('cl');
var Fahr = document.getElementById('fh');
var Kelvin = document.getElementById('klv');
function convertCelsius() {
    let celsius = Number(this.value);
    let celsiusToFahrenheit = (1.8 * celsius) + 32;
    let celsiusToKelvin = celsius + 273.15;
    Fahr.value = celsiusToFahrenheit;
    Kelvin.value = celsiusToKelvin;
    if(Celsius.value === '') {
        Fahr.value = '';
        Kelvin.value = '';
    }
}
function convertFahrenheit() {
  let fahrenheit = Number(this.value);
  let fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
  let fahrenheitToKelvin = (fahrenheit + 459.67) * 5/9;
  Celsius.value = fahrenheitToCelsius;
  Kelvin.value = fahrenheitToKelvin;
  if(Fahr.value === '') {
      Celsius.value = '';
      Kelvin.value = '';
  }
}
function convertKelvin() {
  let kelvinn = Number(this.value);
  let kelvinToCelsius = kelvinn - 273.15;
  let kelvinToFahrenheit = (kelvinn * 1.8) - 459.67;
  Celsius.value = kelvinToCelsius;
  Fahr.value = kelvinToFahrenheit;
  if(Kelvin.value === '') {
      Celsius.value = '';
      Fahr.value = '';
  }
}
Celsius?.addEventListener('input', convertCelsius);
Fahr.addEventListener('input', convertFahrenheit);
Kelvin.addEventListener('input', convertKelvin);