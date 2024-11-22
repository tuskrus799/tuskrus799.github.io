const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("results-div");
const clear = document.getElementById("clear-btn");

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

/* Regex Explanation
^ = start of line

each (xyz) grouping is a group to be found

1\s? means find either 0 or 1 '1', followed by ? means optional

\(\d{3}\) | \d{3} means find a 3 digit area code either in or not in parentheses

[\s\-]? means optionally include a space or '-' in expression

$ = end of line
*/

clear.addEventListener("click", () => {
    result.innerHTML = ``;
});

check.addEventListener("click", () => {
    const num = input.value;
    let invalid = 0;
    if(num.length === 0) {
        alert("Please provide a phone number");
    }

    if(regex.test(num)) {
        result.innerHTML += `Valid US number: ${num}\n`;
    } else {
        invalid = 1;
    }
    if(invalid) {
        result.innerHTML += `Invalid US number: ${num}\n`;
    }
});