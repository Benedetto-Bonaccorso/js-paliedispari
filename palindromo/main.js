let userWord = prompt("insert a word to check for palindromy")

if(!isNaN(userWord)){
    alert("Please refresh and insert a word")
} else {
    console.log("aa")
    palindromeChecker()
}

function palindromeChecker(){

    let counter = userWord.length

    for(let i = 0; i < userWord.length; i++){

        if(userWord[i] == userWord[0-counter]){
            console.log("ok")
        }

        counter--
    }
}