let add = function(a,b,c){
    return a+b+c
}

let result = add(10,1,5)
console.log(result)

//Default arguments

let getScoreText = function(name="Anonymous", score=0){
    return 'Name: '+ name + ' ' + score
}

let scoreText = getScoreText(undefined,20)
console.log(scoreText)

//Challenge area
//total, tipPercent 20%

let calculateTip = function(totalPrice, tipPercent=0.2){
    return totalPrice * tipPercent
}

let tip = calculateTip(100,0.5)
console.log('Tip: ' + tip)
