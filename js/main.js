let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elInner = document.querySelector(".inner");
let elList = document.querySelector(".list");
let elMicro = document.querySelector(".record");

let arr = [];

let record = new webkitSpeechRecognition();
record.lang = 'en';

elMicro.addEventListener("click", function() {
    record.start();
})

record.onresult = function(evt) {
    const result = evt.results[0][0].transcript;
    elInput.value = result;
}


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let inputValue = elInput.value;
    
    arr.push({
        id : (arr.length + 1),
        written_text : inputValue,
        isCompleted : false,
    })
    
    elInput.value = '';
    elList.innerHTML = '';
    
    // console.log(arr);


    
    for (const item of arr) {
        let itemElement = document.createElement("li");
        let elStrong = document.createElement("strong");
        let elSpan = document.createElement("span");
        let elinpcheked = document.createElement("input");
        elinpcheked.setAttribute("type", "checkbox");
        elinpcheked.textContent = item.iscompleted;
        elStrong.textContent = `ID: ${item.id} `;
        elSpan.textContent = item.written_text;
        
        itemElement.appendChild(elinpcheked);
        itemElement.appendChild(elStrong);
        itemElement.appendChild(elSpan);
        elList.appendChild(itemElement);
    }
})