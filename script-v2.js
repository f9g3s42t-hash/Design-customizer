let myheading= document.querySelector(".container h1")
let containerBox = document.querySelector(".container");
let textInput= document.querySelector(".text-input")
let colorInput=document.querySelector(".color-input")
let backgroundColor=document.querySelector(".bg-color")
let weightInput=document.querySelector(".weight-input")
let sizeInput=document.querySelector(".size-input")
let borderInput=document.querySelector(".border-input")
let applyBtn=document.querySelector(".btn")
applyBtn.addEventListener("click",function(){
myheading.innerText=textInput.value;
myheading.style.color=colorInput.value;
containerBox.style.backgroundColor=backgroundColor.value;
myheading.style.fontWeight=weightInput.value;
myheading.style.fontSize=sizeInput.value;
containerBox.style.border=borderInput.value;

})

let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", function() {
    
    textInput.value = "";
    colorInput.value = "";
    backgroundColor.value = "";
    weightInput.value = "";
    sizeInput.value = "";
    borderInput.value = "";
    myheading.innerText = "Customize Your Design"; 
    myheading.style.color = "";                  
    myheading.style.fontWeight = "";           
    myheading.style.fontSize = "";              
    
    containerBox.style.backgroundColor = "";    
    containerBox.style.border = "";              
})