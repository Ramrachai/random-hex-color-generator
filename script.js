let body, btn, colorText, tooltip;
body = document.querySelector("body");
btn = document.querySelector(".changeColor");
colorText = document.querySelector("#colorText");
tooltip = document.querySelector(".tooltip");

btn.addEventListener("click", changeColor);
colorText.addEventListener("click", copyText);
colorText.addEventListener("mouseout", copyTooltip);

function changeColor() {
  var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  var color = "#";
  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * n.length);
    color = color + n[random];
  }
  body.style.background = color;
  colorText.value = color;
}

function copyText() {
  colorText.select();
  document.execCommand("copy");
  tooltip.innerHTML = "Copied: " + colorText.value.toUpperCase();
  tooltip.style.background = "#008697";
}

function copyTooltip() {
  tooltip.innerHTML = "Click to copy";
  tooltip.style.background = "#616161";
}
