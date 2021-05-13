let inputField = document.getElementById("item-txt-field");
let doneBtn = document.getElementById("done-btn");
let clearBtn = document.getElementById("clear-btn");
let previewText = document.getElementById("preview-txt");

const inputTxt = () => String(inputField.value).trim();

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
    if(inputTxt().length === 0){
        alert("Text field must be filled out to search.");
    }
});

clearBtn.addEventListener("click", () => {
    setPreview();
})