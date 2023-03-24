var max = 10;
var min = 1;
var level = 1;


function generateEquation(){
  //Passo 1: Lógica pra montar a equação
    const x = Math.floor(Math.random() *(max - min+ 1) ) + min;
    const equation = `Quanto é X + ${x} = ${x *2} ?`
    return {x, equation};
}
function displayEquation() {
  //Passo 2: Pegando o document pra mostrar o problema
    const { x, equation } = generateEquation();
    document.getElementById("equation").innerHTML = equation;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("ll").innerHTML = `Level: ${level}`;
    return x;
  }
  let x = displayEquation();//execução pra mostrar a operação
  let points = 50;//valor pré-fixado

  function checkanswer(){//função que checa se a resposta está certa
    
    const answer = parseInt(document.getElementById("answer").value);
    //transformar o valor do input em int
    const result = document.getElementById("result");
    var newans =  (x*2) - x;
    if(answer=== newans ){//Checa se a resposta está correta
        points += points
        level++;//"passa" de nível
        x = displayEquation();
    }
    else{
       result.innerHTML = `Desculpa, mas essa não é a resposta certa... ${points} `//perde 100 pontos 
       points -= (points/5);

    }

  }
  