let productValue = Number(prompt(`Quanto você acha que custa 2kg de feijão`))

if (productValue >= 20){
    document.getElementById('result').innerHTML = 'Correto :)'
}
else{
    document.getElementById('result').innerHTML = 'Incorreto, tente novamente.'
}