function calc() {
  var x = document.getElementById("circumference").value;
   if (x > 0) { 
  document.getElementById("circum").innerHTML = x/2 * 2 * 3.14;
    document.getElementById("area").innerHTML = Math.pow(x/2,2) * 3.14;
   } else {
        var str = "You cannot enter a negative number!";
  var result = str.fontcolor("red");
  document.getElementById("no").innerHTML = result;
     }



}

document.getElementById("bg")
 .style.backgroundColor = "skyblue"