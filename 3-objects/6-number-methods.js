let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

//Challenge area
//1-5-true if correct-false if not correct

let makeGuess = function (num) {
    let min = 10
    let max = 5

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    
    return randomNum === num
}

console.log(makeGuess(1))
