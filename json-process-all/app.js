let list = document.getElementById("list")
let listItem = document.getElementById("list-item")
const listBtn = document.getElementById("list")

// fetch('./sample-data.json')
//     .then(cevap => cevap.json)
//     .then(veri => document.write(veri))

listBtn.addEventListener("click",function(){
    
})
fetch('./sample-data.json')
    .then(cevap => cevap.json())
    .then(veri => {
        veri.products.forEach(element => {
            let listItems = document.createElement("li")
            let listPrices = document.createElement("li")
            listItems.innerHTML = element.ProductName + " "
            listPrices.innerHTML = element.ProductPrice + " "
            list.appendChild(listItems)
            listItems.appendChild(listPrices)
        });
    })