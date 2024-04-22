let userInputEle = document.getElementById("userInput");
let keyCodeListEle = document.getElementById("keyCodeList");

function createAndAppend(keyCode){
    let listElement = document.createElement("li");
    listElement.classList.add('mt-1');
    listElement.textContent = keyCode;
    keyCodeListEle.appendChild(listElement);
}

function keyEnter(event){
    createAndAppend(event.keyCode);
}
userInputEle.addEventListener("keydown",keyEnter);