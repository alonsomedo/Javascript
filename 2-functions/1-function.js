let greetUser  = function() {
    console.log('Welcome User')
}

greetUser()

let square = function(num){
    let result = num * num;
    return result;
}
let num = 3
let value = square(num)
console.log(value)

let convertFahrenheitToCelsius = function(value) {
    return value - 2
}

let fahrenheit = 20

console.log(convertFahrenheitToCelsius(fahrenheit))