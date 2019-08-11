let name = "Alonso"

//length of property
console.log(name.length)

//upperCase
console.log(name.toUpperCase())

// includes
let password = 'abc123asdf098'
console.log(password.includes('xxx'))

// Trim
let lastName = "Medina "
console.log(lastName.trim()) 


//Challenge
//isValidPassword
//length is more than 8 - and it doesnt containt the word password

isValidPassowrd = function(pass) {
    return pass.length > 8 && !pass.includes("password")
}

console.log(isValidPassowrd('asdfp'))
console.log(isValidPassowrd('abc@123#"$'))
console.log(isValidPassowrd('asdfpasd3password'))