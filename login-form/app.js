let inpFullNanme = document.getElementById("fullname")
let inpEmail = document.getElementById("email")
let inpMale = document.getElementById("sex-male")
let inpFemale = document.getElementById("sex-female")
let inpDate = document.getElementById("birthdate")
let okay = document.getElementById("okay")

function validateForm() {
    var emailString = inpEmail.value
    var emailCtrl = emailString.indexOf("@")
    var emailCtrlDot = emailString.indexOf(".");
    if (inpFullNanme.value=="" || inpFullNanme.value==" ") {
        alert("kullanıcı adı boş bırakılamaz");
    }
    else if(inpEmail.value == "" || inpEmail.value==" "){
        alert("email boş bırakılamaz")
    }
    else if(emailCtrl < 1 || emailCtrlDot<1){
        alert("Geçerli bir email adresi giriniz....")
    }
    else if(inpMale.checked == false && inpFemale.checked == false){
        alert("Cinsiyet seçiniz")
    }
    else{
        alert("başarıyla kayıt oldunuz")
    }
    
}
okay.addEventListener("click",validateForm)