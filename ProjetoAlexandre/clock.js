var seconds = 60;
function countdown() {
    
    const timer = document.getElementById("timer");
    timer.innerHTML = seconds;
    seconds--;
  
    if (seconds < 0) {
      timer.innerHTML = "O tempo acabou!";
      result.innerHTML = `Parabéns! Você ganhou ${points} pontos :)`
      
    }
  }

  const intervalId = setInterval(countdown, 1000); // update every 1000 milliseconds (1 second)

  function countdown1(){
    const levell = document.getElementById("ll");
    level = 1
    levell.innerHTML =`Level: ${level}`;
    seconds = 60;
    points = 0;
    points += 300;
    const timer = document.getElementById("timer");
    timer.innerHTML = seconds;
    seconds--;
    
    
  }

  

  
 
  
