var seconds = 20;
function countdown() {
    const timer = document.getElementById("timer");
    timer.innerHTML = seconds;
    seconds--;
  
    if (seconds < 0) {
      timer.innerHTML = "Time's up!";
      result.innerHTML = `Congratulations! You earned ${points} points`
      
    }
  }

  const intervalId = setInterval(countdown, 1000); // update every 1000 milliseconds (1 second)

  function countdown1(){
    const levell = document.getElementById("ll");
    level = 1
    levell.innerHTML =`Level: ${level}`;
    seconds = 20;
    points = 0;
    points += 300;
    const timer = document.getElementById("timer");
    timer.innerHTML = seconds;
    seconds--;
    
    
  }

  

  
 
  
