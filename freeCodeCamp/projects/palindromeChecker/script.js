const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

// check input(?)
checkButton.addEventListener("click", () => {
    const realText = textInput.value;
    const input = realText.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log("button clicked");
    if(input) {
        let pFlag = true;
        console.log("text is present");

        const len = input.length;
        let j = len-1;
        for(let i = 0; i < j; i++) {
            console.log(`reading ${input[i]} and ${input[j]}`)
            if(input[i] != input[j]) {
                pFlag = false;
                break;
            }
            j--;
        }
        if(pFlag === true) {
            result.innerHTML = `${realText} is a palindrome`;
        } else {
            result.innerHTML = `${realText} is not a palindrome`;
        }
    } else {
        console.log("text not present");
        alert("Please input a value");
    }


});