let textarea = document.getElementById("words")
let calculateBtn = document.getElementById("calculate")
let palindromeArr = []
function palindrome(myString) {
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    var checkPalindrome = removeChar.split('').reverse().join('');

    if (removeChar === checkPalindrome) {
        alert("İts a palindrome")
    }
    else{
        alert("its not palindrome")
    }
}
calculateBtn.addEventListener("click",palindrome(textarea.value))