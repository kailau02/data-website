const inputField = document.getElementById("item-txt-field");
const doneBtn = document.getElementById("done-btn");
const clearBtn = document.getElementById("clear-btn");
const previewText = document.getElementById("preview-txt");
const dataTable = document.getElementById("data-table");
const tableUL = document.getElementById("ul");

let dataArray = [];

const inputTxt = () => String(inputField.value).trim();

function reloadTable(){
    tableUL.textContent = "";
    for(item of dataArray){
        let newChild = document.createElement("li");
        newChild.textContent = `${item.timeStamp} ••••••• ${item.title}`;
        tableUL.appendChild(newChild)
    }
}

function addItem(title){
    if(inputTxt().length === 0){
        alert("Text field must be filled out to search.");
    }
    else{
        const date = new Date();
        const timestamp = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        const nObj = {
            title: title,
            timeStamp: timestamp
        };
        dataArray.push(nObj);
        reloadTable();
        inputField.value = "";
    }
}

function setPreview() {
    let txtValue = inputTxt();
    txtValue = txtValue.trim();
    if(txtValue.length === 0){
        txtValue = "Empty Text";
    }
    else{
        txtValue = "Preview: " + txtValue;
    }
    previewText.textContent = txtValue;
}

inputField.addEventListener("input", setPreview);

doneBtn.addEventListener("click", () => {
    addItem(inputTxt());
});

clearBtn.addEventListener("click", () => {
    inputField.value = "";
    setPreview();
})

document.addEventListener("keypress", e => {
    console.log(e.code);
    if(e.key === "Enter"){
        addItem(inputTxt());
    }
});