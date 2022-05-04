let specialChars = document.getElementById("Special-char")
let generateBtn = document.getElementById("generate-btn")
let generateArea = document.getElementById("generated-password")


let numbers = [1,2,3,4,5,6,7,8,9,0]
let alphabet = ['a','b','c','d','e','f','g','h','ı','i','j','k','l','m','n','o','p','r','s','t','u','v','y','z','q']
let upperCases = ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','S','T','V','Y','Z','X']
let specialCharacters = ["-",'_',"."]

let password = [""]

var rastgeleSayi = Math.floor(Math.random() * numbers.length)
var rastgeleHarf = Math.floor(Math.random() * alphabet.length)
var rastgeleBuyukHarf = Math.floor(Math.random() * upperCases.length)
var rastgeleOzelKarakter = Math.floor(Math.random() * specialCharacters.length)

generateBtn.addEventListener("click",()=>{
    
    generatePsw()
})
let randomProcess = 0;
function generatePsw() {
    for(let i = 1;i < 5;i++){
        var rastgeleSayi = Math.floor(Math.random() * numbers.length) //* rastgele sayı üret
        var rastgeleHarf = Math.floor(Math.random() * alphabet.length) //* rasgele küçük harf üret
        var rastgeleBuyukHarf = Math.floor(Math.random() * upperCases.length) //* rastgele büyük harf üret
        var rastgeleOzelKarakter = Math.floor(Math.random() * specialCharacters.length) //* rastgele özel karakter üret
        
        if (specialChars.checked == true) {
            
        }
        randomProcess = Math.floor(Math.random() * 24)
        switch (randomProcess) {
            case 1:
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                break;
            case 2:
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(alphabet[rastgeleHarf]) //* 2 
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(numbers[rastgeleSayi]) //! 1
                break;
            case 3:
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                break;
            case 4:
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
            break;
            case 5:
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(alphabet[rastgeleHarf]) //* 2
            break;
            case 6:
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                break;
            case 7:
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                break;
            case 8:
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(alphabet[rastgeleHarf]) //* 2
                break;
            case 9:
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                break;
            case 10:
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                break;
            case 11:
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(numbers[rastgeleSayi]) //! 1
                break;
            case 12:
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                 password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(numbers[rastgeleSayi]) //! 1
                break;
            case 13:
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                break;
            case 14:
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                break;
            case 15:
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(alphabet[rastgeleHarf]) //* 2
                break;
            case 16:
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(alphabet[rastgeleHarf]) //* 2
                break;
            case 17:
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                break;
            case 18:
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(numbers[rastgeleSayi]) //! 1
                break;
            case 19: 
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(numbers[rastgeleSayi]) //! 1
                break;
            case 20:
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(alphabet[rastgeleHarf]) //* 2
                break;
            case 21:
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(numbers[rastgeleSayi]) //! 1
                break;
            case 22:
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                password.push(alphabet[rastgeleHarf]) //* 2
                break;
            case 23:
                password.push(specialCharacters[rastgeleOzelKarakter]) //TODO 4
                password.push(numbers[rastgeleSayi]) //! 1
                password.push(alphabet[rastgeleHarf]) //* 2
                password.push(upperCases[rastgeleBuyukHarf]) //? 3
                break;
            default:
                break;
        }
        generateArea.value = ' '
    }
    let pswText = ""
   password.forEach(caracter =>{
        pswText += caracter
       generateArea.value = pswText
       
   })
}