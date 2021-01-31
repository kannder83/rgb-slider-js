let sliderRed = document.getElementById("red");
let valueColorRed = 0;
let sliderGreen = document.getElementById("green");
let valueColorGreen = 0;
let sliderBlue = document.getElementById("blue");
let valueColorBlue = 0;
let textColorSelect = document.getElementById("output");

// let colorSelectForBackground = document.getElementById("container");

function setColorBackground() {
  let colorBackgroundRGB = `(${valueColorRed},${valueColorGreen},${valueColorBlue})`;
  textColorSelect.innerHTML = `RGB ${colorBackgroundRGB}`;
  document.body.style.backgroundColor = `rgb${colorBackgroundRGB}`;
}

sliderRed.oninput = function () {
  valueColorRed = this.value;
  setColorBackground();
};

sliderGreen.oninput = function () {
  valueColorGreen = this.value;
  setColorBackground();
};

sliderBlue.oninput = function () {
  valueColorBlue = this.value;
  setColorBackground();
};
