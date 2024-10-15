const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
var romanInt = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
};

convertBtn.addEventListener("click", () => {
    // check input
    const inputString = numberInput.value;
    let inputInt = parseInt(numberInput.value);
    if(!numberInput.value) {
        output.innerText = `Please enter a valid number`;
        return;
    } else if(inputInt < 0 ) {
        output.innerText = `Please enter a number greater than or equal to 1`;
        return;
    } else if(inputInt > 3999) {
        output.innerText =`Please enter a number less than or equal to 3999`;
        return;
    } else {
        // convert
        let result = '';
        let roman;
        while(inputInt > 0) {
            for(roman in romanInt) {
                if(inputInt >= romanInt[roman]) {
                    console.log(roman);
                    console.log(romanInt[roman]);
                    result += roman;
                    inputInt = inputInt - romanInt[roman];
                    break;
                }
            }
        }
        // result done
        console.log(result);
        output.innerText = result;
    }
});