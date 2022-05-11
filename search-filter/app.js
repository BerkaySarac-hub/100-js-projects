// let divs = document.querySelectorAll("div")
let searchBox = document.getElementById("search-box")

// searchBox.addEventListener("keyup", () => {
//     divs.forEach(index => {
//         let results = index.innerHTML.includes(searchBox.value)
//         showIndexes = results.valueOf(true)
//         if (results === true) {
//             document.write(showIndexes)
//         }
//     });
// })
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-box');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
searchBox.addEventListener("keyup", myFunction)