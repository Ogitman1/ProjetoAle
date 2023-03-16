var answer =  document.getElementById("answer"); // select the answer input element
  
    // select the numeric button elements
    var n0 = document.getElementById("n0");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var n5 = document.getElementById("n5");
    var n6 = document.getElementById("n6");
    var n7 = document.getElementById("n7");
    var n8 = document.getElementById("n8");
    var n9 = document.getElementById("n9");
  
    // add event listeners to the numeric buttons
    n0.addEventListener("click", function() {
      answer.value += "0";
    });
    n1.addEventListener("click", function() {
      answer.value += "1";
    });
    n2.addEventListener("click", function() {
      answer.value += "2";
    });
    n3.addEventListener("click", function() {
      answer.value += "3";
    });
    n4.addEventListener("click", function() {
      answer.value += "4";
    });
    n5.addEventListener("click", function() {
      answer.value += "5";
    });
    n6.addEventListener("click", function() {
      answer.value += "6";
    });
    n7.addEventListener("click", function() {
      answer.value += "7";
    });
    n8.addEventListener("click", function() {
      answer.value += "8";
    });
    n9.addEventListener("click", function() {
      answer.value += "9";
    });
  