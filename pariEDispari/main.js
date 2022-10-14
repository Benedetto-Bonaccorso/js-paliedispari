let userNumber = Number(prompt("please insert a number between 1 and 5"))

if(isNaN(userNumber) || userNumber>5 || userNumber<1){
    alert("The input is not valid, please refresh the page")
} else{numberChecker()}

function numberChecker(){
    let randomNumber = Math.floor(Math.random()*5 + 1)
    
    let finalNumber = userNumber + randomNumber

    if(finalNumber%2 == 0){
        alert("Your number is even")
    } else{
        alert("your number is odd")
    }
}