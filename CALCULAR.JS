function somar(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
    if (operação < 0){
    corResultado.style.backgroundColor = "red";
    }
    else {
    corResultado.style.backgroundColor = "green";
    }

  }
function subtrair(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado").innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
    if (operação < 0){
    corResultado.style.backgroundColor = "red";
    }
    else {
    corResultado.style.backgroundColor = "green";
    }

}


function dividir(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0){
        document.getElementById("resultado").innerHTML = "Erro: divisão por 0 não é possível."

        document.getElementById("resultado").style.backgroundColor = "yellow"

    }

    else{
 
    let resultado = n1 / n2;
    document.getElementById("resultado").innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
    if (operação < 0){
    corResultado.style.backgroundColor = "red";
    }
    else {
    corResultado.style.backgroundColor = "green";
    }

    }


}