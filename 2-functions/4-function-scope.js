//Global Scope (convertFahrenheitToCelsius,tempOne,tempTwo)
    //Local Scope (fahrenheit, celsius)
        //Local Scope (isFreezing)

let convertFahrenheitToCelsius = function(){
    let celsius = (fahrenheit -32)*5/9

    if(celsius <= 0){
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)