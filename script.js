const btnSaudar = document.querySelector('#btn-saudar')

btnSaudar.onclick = () => {
    //capturar o input e o select
    const numb1 = parseFloat(document.querySelector('#numb1').value)
    const opcao =document.querySelector('#opcao').value
    const numb2 = parseFloat(document.querySelector('#numb2').value)

    if(numb1 && numb2){

    

    var resultado = 0
    if (opcao == "somar"){

        resultado = numb1 + numb2
    }
    else if (opcao == 'subtrair'){
        resultado = numb1 - numb2
    }
    else if(opcao == 'multiplicar'){
        resultado = numb1 * numb2
    }
    else if(opcao == 'dividir'){
        resultado = numb1 / numb2
    }
            


    alert('o Resultado é ' + resultado)
    
}
    else{
        alert('O numero 1 e numero 2 é obrigatorios')

    }

    console.log(numb1,numb2, opcao)

}