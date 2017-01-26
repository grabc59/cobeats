"use strict";
var grid = document.getElementById('grid-container');
var colors = ["#FFFFFF", "#C0C0C0", "#808080", "#404040", "#000000","#330066", "#5900B2", "#7200E5", "#9746EA", "#A4A0E4", "#5F56E8", "#0C00CF", "#08007F", "#040047", "#002F47", "#00547F", "#0088CF", "#50A9D7", "#A0CDE4", "#A0E4D8", "#50D7BF", "#00CFAB", "#007F69", "#00473B", "#064700", "#0B7F00", "#11CF00", "#5BD750", "#A6E4A0", "#DAE4A0", "#C3D750", "#B0CF00", "#6D7F00", "#3D4700", "#FFF896", "#FFFC5C", "#FDFF00", "#FFE900", "#FFF26F", "#FFB03F", "#FF9600", "#CC7800", "#7F4B00", "#AD8852", "#FF9979", "#FF3D00", "#B02A00", "#591500", "#590600", "#B00C00", "#FF1200", "#FF4D3F", "#FF8279", "#FF79AB", "#FF3F88", "#FF0060", "#B00042", "#590022", "#4C0059", "#9600B0", "#DA00FF", "#E33FFF", "#EC79FF"];
var paletteRow = document.getElementById('pal-row');
var currentColor;
var colorPicker = document.getElementById('color-picker');

// render grid and palette
createPixelGrid(30,60);
createColorWells(colors);

// palette functionality
paletteRow.addEventListener("click", function (event) {
  currentColor = event.target.style.backgroundColor;
  document.getElementById('current-color').style.backgroundColor = currentColor;
});
// color picker functionality
colorPicker.addEventListener("change", function (event) {
  currentColor = event.target.value;
  document.getElementById('current-color').style.backgroundColor = currentColor;
});
// paint-brush functionality
grid.addEventListener("mousedown", function (event) {
  event.target.style.backgroundColor = currentColor;
  grid.addEventListener("mouseover", setBackgroundColor);
});
grid.addEventListener("mouseup", function () {
  grid.removeEventListener("mouseover", setBackgroundColor);
});

// Create pixel grid
function createPixelGrid(rows,columns) {
  // create and append row containers to the grid
  for (var i = 0; i < rows; i++) {
    var newRow = document.createElement('div');
    newRow.className = "pixel-row";
    grid.appendChild(newRow);
    //populate rows with pixel-divs
    for (var col = 0; col < columns; col++) {
      var newPixel = document.createElement('div');
      newPixel.className = "pixel-div clearfix";
      newRow.appendChild(newPixel);
    }
  }
}

//populate color wells
function createColorWells(colors) {
  for (var i = 0; i < colors.length; i++) {
    var newColor = document.createElement('div');
    newColor.className = "color-well";
    newColor.style.backgroundColor = colors[i];
    paletteRow.appendChild(newColor);
  }
}
// show current brush color
function setBackgroundColor() {
  event.target.style.backgroundColor = currentColor;
}
