`use strict`;
const userWord = prompt(`Inserire una parola`);

function palindrome (userWord){
   const wordRev ="";
   for (let i = userWord.length; userWord >= 0; i--){
      wordRev += userWord[i];
   }
   if (userWord === wordRev){
      return true;
   }
   return false;
}

if (palindrome(userWord)){
   alert ("La parola è palindroma")
} else{
   alert (`La parola non è palindroma`)
}



