document.querySelector(".one").onclick = function(){
    document.querySelector(".display-input").value +=1
}
document.querySelector(".two").onclick = function(){
    document.querySelector(".display-input").value +=2
}
document.querySelector(".three").onclick = function(){
    document.querySelector(".display-input").value +=3
}
document.querySelector(".four").onclick = function(){
    document.querySelector(".display-input").value +=4
}
document.querySelector(".five").onclick = function(){
    document.querySelector(".display-input").value +=5
}
document.querySelector(".six").onclick = function(){
    document.querySelector(".display-input").value +=6
}
document.querySelector(".seven").onclick = function(){
    document.querySelector(".display-input").value +=7
}
document.querySelector(".eight").onclick = function(){
    document.querySelector(".display-input").value +=8
}
document.querySelector(".nine").onclick = function(){
    document.querySelector(".display-input").value +=9
}
document.querySelector(".zero").onclick = function(){
    document.querySelector(".display-input").value +=0
}
document.querySelector(".zeroo").onclick = function(){
    document.querySelector(".display-input").value +='00'
}
document.querySelector(".dot").onclick = function(){
    document.querySelector(".display-input").value +='.'
}
document.querySelector(".slash").onclick = function(){
    document.querySelector(".display-input").value +='/'
}
document.querySelector(".multi").onclick = function(){
    document.querySelector(".display-input").value +='*'
}
document.querySelector(".mines").onclick = function(){
    document.querySelector(".display-input").value +='-'
}
document.querySelector(".plus").onclick = function(){
    document.querySelector(".display-input").value +='+'
}
// --------------------------------------------
document.querySelector(".ac").onclick = function(){
    document.querySelector(".display-input").value =""
}
document.querySelector(".equal").onclick = function(){
    document.querySelector(".display-input").value =eval(document.querySelector(".display-input").value)
}
document.querySelector(".de").onclick = function(){
    document.querySelector(".display-input").value = document.querySelector(".display-input").value.toString().slice(0,-1)
}