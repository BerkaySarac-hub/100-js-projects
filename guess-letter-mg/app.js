let questions = [
    {question:"alfabenin ilk 10 harfi arasında yuvarlak ve şapkalı olan harf"},
    {question:"alfabenin ilk 10 harfi arasında sola doğru çevirince geniş çatalaa benzer"},
    {question:"alfabenin ilk 10 harfi arasında çubuk şeklinde olan harf"}
]

let answers = [
     {answer1:["d","e","f","a"]},
     {answer2:["z","r","e","b"]},
     {answer3:["k","j","g","ı"]}
];

let hint = document.getElementById("hint")
let options = document.querySelectorAll("li")
let deneme = document.getElementById("deneme")
let questionIndex = 0
let answerIndex = 0
let trueOption;

function askHim() {
     //* 1 artıyo
    // answerIndex++; //* 1 artıyo
    
    hint.innerText = questions[questionIndex].question // hint h1 inin içinde ki yazıyı questions arrayinin question indexinci elemanı yap
    questionIndex++;
    if (questionIndex >= (questions.length - 1)) {
        questionIndex = 0
    }
    trueOption = options[Math.floor(Math.random() * 3)]; //! trueOption li lerden rastgele bir tanesi

    console.log(trueOption.innerText)

    let answer = [alphabet[0],alphabet[4],alphabet[7]]  //! answer soruların cevapları 

    options.forEach(index =>{
        index.innerHTML = alphabet[Math.floor(Math.random() * (alphabet.length))] //! harfler rastgele olarak yazdırılıyor
        if (index === options[2]) {
            index.innerHTML = answer[questionIndex]
        }
    })
}
deneme.addEventListener("click",askHim)