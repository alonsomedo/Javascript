// studentScore, totalPossibleScore
//15/20 --> You got a C (75%)
//A 90-100 , B 80-89 , C 70-79, D 60-69, E 0-59

let studentScore = 10
let totalPossibleScore = 20

let calculateGrade = function(studentScore, totalPossibleScore){

    let scorePercentage = (studentScore/totalPossibleScore)*100
    let msg = "Your score could not be evaluated."
    let letterGrade

    if(scorePercentage >= 90 ){
        letterGrade = 'A'
    }else if(scorePercentage >= 80 ){
        letterGrade = 'B'
    }else if(scorePercentage >= 70){
        letterGrade = 'C'
    }else if(scorePercentage >= 60){
        letterGrade = 'D'
    }else if(scorePercentage >= 0 ){
        letterGrade = 'E'
    }else{
        letterGrade = 'F'
    }
    msg = `You got a ${letterGrade} ${scorePercentage}%`
    return msg
}
console.log(calculateGrade(11,20))