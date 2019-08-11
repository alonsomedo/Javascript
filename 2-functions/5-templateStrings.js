let getScoreText = function(name="Anonymous", score=0){
    return `My name is ${name} and my score is ${score}.` 
}

let scoreText = getScoreText(undefined,20)
console.log(scoreText)

let calculateTip = function(totalPrice, tipPercent=20){
    return totalPrice * tipPercent
}

let tip = calculateTip(100,5)
console.log(`La propina es de ${tip/100} nuevos soles.`)
