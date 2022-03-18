
function sumar(){
    let forma = document.getElementById('forma');
    let operandoA = forma['operandoA']
    let operandoB = forma['operandoB']
    let result = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(result))
        result = 'La operacion no tiene numeos';
    const Result = document.getElementById('resultado')
    Result.innerHTML = `El resultado es: <b>${result}</b>`;
    console.log(`El resultado es: ${result}`);
}


function resta(){
    let forma = document.getElementById('forma');
    let operandoA = forma['operandoA']
    let operandoB = forma['operandoB']
    let result;
    if (parseInt(operandoA.value) < 0 || parseInt(operandoB.value) < 0) {
        result = "Valores no validos"
    }else{
        result = parseInt(operandoA.value) - parseInt(operandoB.value);
        if(isNaN(result))
            result = 'La operacion no tiene numeros';
        const Result = document.getElementById('resultado')
        Result.innerHTML = `El resultado es: <b>${result}</b>`;
        console.log(`El resultado es: ${result}`);
    }
    
    
}
function resetear(){
    let forma = document.getElementById('forma');
    forma['operandoA'].value = '';
    forma['operandoB'].value = '';
    const Result = document.getElementById('resultado')
    Result.innerHTML = `----Resultado-----`;
}