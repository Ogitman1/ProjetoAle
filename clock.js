var seconds = 20;
function countdown() {
    const timer = document.getElementById("timer");
    timer.innerHTML = seconds;
    seconds--;
  
    if (seconds < 0) {
      clearInterval(intervalId);
      timer.innerHTML = "Time's up!";
      result.innerHTML = `Congratulations! You earned ${points} points`
      
      
    }
    console.log(seconds)
  }
  function countdown() {
    const timer = document.getElementById("timer");
    timer.innerHTML = seconds;
    seconds--;
  
    if (seconds < 0) {
      clearInterval(intervalId);
      timer.innerHTML = "Time's up!";
      result.innerHTML = `Congratulations! You earned ${points} points`
      
      
    }
    console.log(seconds)
  }
  
  const intervalId = setInterval(countdown, 1000); // update every 1000 milliseconds (1 second)
  countdown();

  
 
  
