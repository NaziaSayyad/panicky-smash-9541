var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;
  
rangeslider.oninput = function() {
  output.innerHTML = this.value;
}

// let x;
// document.getElementById("myCheck");
// x.checked = true;
