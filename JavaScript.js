
  function myFunction() {
      var x = document.getElementById("myNumber").value;
      document.getElementById("demo").innerHTML = x;

    }

function myFunction1() {
        var y = Math.floor((Math.random() * 10) + 1);
    document.getElementById("demo1").innerHTML = y;

}

function myFunction2(x,y) {
 
    var z = (document.getElementById("demo").innerHTML == document.getElementById("demo1").innerHTML) ? "Congratulations" : "sorry";
    document.getElementById("demo2").innerHTML = z;

}
    