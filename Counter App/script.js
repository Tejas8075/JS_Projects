let para = document.querySelector("p");

let decrease = document.querySelector(".minus");

let reset = document.querySelector(".reset");

let increase = document.querySelector(".plus");

let count = 0;

function updateDisplay(){
    para.textContent = count;
    para.style.color = count < 0 ? "red" : "white";
}

decrease.addEventListener("click", () => {
    count--; // decrement first
    updateDisplay();
});

reset.addEventListener("click", () => {
    count = 0;
    updateDisplay();
})

increase.addEventListener("click", () => {
    count ++; // increment first
    updateDisplay();
})