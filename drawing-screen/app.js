var canvas = document.getElementById("sahne")
var context = canvas.getContext("2d")
var cizim = false
var rota = []
context.strokeStyle = "#212121"
context.lineJoin = "round"
context.lineWidth = 3
// Fare butonuna basıldığında
canvas.onmousedown = function(event){
    console.log("event: onMouseDown");
};

// Fare hareket ederken
canvas.onmousemove = function(event){
    console.log("event: onMouseMove");
};

// Fare butonu kaldırıldığında
canvas.onmouseup = function(){
    console.log("event: onMouseUp");
};

// Fare, canvas elementinin dışına çıktığında
canvas.onmouseleave = function(){
    console.log("event: onMouseLeave");
};
canvas.onmousedown = function(event){
    var mouseX = event.pageX - canvas.offsetLeft;
    var mouseY = event.pageY - canvas.offsetTop;
       
    cizim = true;
       
    rota.push({
        x : mouseX,
        y : mouseY,
        drag : false
    });
};
canvas.onmousemove = function(event){
    var mouseX = event.pageX - canvas.offsetLeft;
    var mouseY = event.pageY - canvas.offsetTop;

    if(cizim){
        rota.push({
            x : mouseX,
            y : mouseY,
            drag : true
        });
    }
};
canvas.onmouseup = function(){
    cizim = false;
};

canvas.onmouseleave = function(){
    cizim = false;
};
function boya(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
       
    for(var i=0; i < rota.length; i++){  
        context.beginPath();
           
        if(rota[i].drag && i){
            context.moveTo(rota[i -1 ].x, rota[i - 1].y);
        }else{
            context.moveTo(rota[i].x - 1, rota[i].y);
        }
        
        context.lineTo(rota[i].x, rota[i].y);
        context.closePath();
        context.stroke();
    }
}
setInterval(boya, 30); 