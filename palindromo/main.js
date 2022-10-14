let userWord = prompt("insert a word to check for palindromy")

if(!isNaN(userWord)){
    alert("Please refresh and insert a word")
} else {
    palindromeChecker()
}

function palindromeChecker(){

    let counter = -1
    let correct = 0

    for(let i = userWord.length-1; i >= 0; i--){

        counter++

        if(userWord[i] == userWord[counter]){
            correct ++ 
        } else {
            alert("Your word is not a palindrome")
            break
        }

        if(correct == userWord.length){
            alert("The word is a palindrome")
        }
    }
}