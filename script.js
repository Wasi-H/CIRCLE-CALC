function calc() {
  var x = document.getElementById("circumference").value;
  document.getElementById("circum").innerHTML = x * 2 * 3.14;
    document.getElementById("area").innerHTML = Math.pow(x,2) * 3.14;
}