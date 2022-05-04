let item1 = document.getElementById("item1")
let item2 = document.getElementById("item2")

var konum = item1.getBoundingClientRect(),
left=Math.round(konum.left),
top = Math.round(konum.top);
console.log(left+" "+top)
var konum2 = item2.getBoundingClientRect(),
left=Math.round(konum2.left),
top = Math.round(konum2.top);
console.log(left+" "+top)
let index = 0;
setInterval(() => {
    index++;
    item1.style.top = index + "px";
}, 50);
setInterval(() => {
    let index2 = 0;
    index2++;
    item1.style.left = index + "px";
}, 70);
setInterval(() => {
    index++;
    item2.style.top = index + "px";
}, 203);
setInterval(() => {
    let index2 = 0;
    index2++;
    item2.style.left = index + "px";
}, 308);