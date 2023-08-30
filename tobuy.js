const data = document.getElementById("userInput");
const btnSave = document.getElementById("btnSave");
const toBuyContainer = document.getElementById("toByContainer");
const btnDeleteAll = document.getElementById("btnDeleteAll");

data.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        saveDataHandler();
    }
});
btnDeleteAll.addEventListener("click", RemoveAllHandler);
btnSave.addEventListener("click", saveDataHandler);
window.addEventListener("load", printDataHandler);

function saveDataHandler(){
    var dataKEY = Date.now(); //임시로 키값을 지금 시간으로 줘봄
    localStorage.setItem(dataKEY, data.value);
    printDataHandler();
}

function printDataHandler(){
    toBuyContainer.innerHTML ="";
    toBuyContainer.innerHTML = `<div>장 볼 목록이 ${localStorage.length}개 남았습니다.</div>`
    for(var i = 0; i< localStorage.length; i++){
        const myKey = localStorage.key(i);
        const myData = localStorage.getItem(myKey);
        const li = document.createElement("li");
        li.innerHTML = myData;
        toBuyContainer.appendChild(li);
        const button = document.createElement("button");
        button.innerText = "삭제";
        li.appendChild(button);

        button.addEventListener("click", function(){RemoveHandler(myKey)});
    }
}

function RemoveHandler(myKey){
    localStorage.removeItem(myKey);
    toBuyContainer.innerHTML ="";
    printDataHandler();
}

function RemoveAllHandler(){
    localStorage.clear();
    toBuyContainer.innerHTML ="";
}