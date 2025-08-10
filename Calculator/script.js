let icon = document.querySelector(".bx");

let body = document.querySelector("body");

let isClicked = true;

let flag = 0;

let allClear = document.querySelector(".all-clear");
let deleteOne = document.querySelector(".delete");
let percent = document.querySelector(".percent");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multi");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let equalsTo = document.querySelector(".equals");

let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let doubleZero = document.querySelector(".double-zero");
let zero = document.querySelector(".zero");
let point = document.querySelector(".point");


icon.addEventListener("click", () => {
    if (flag == 0) {
        // To Dark mode
        icon.style.color = "#fff";
        body.style.background = "#232424"
        flag = 1;
        isClicked = true;
    }
    else {
        // To Light Mode
        icon.style.color = "#232424";
        body.style.background = "#fff"
        flag = 0;
        isClicked = false;
    }
})

// icon.addEventListener("mouseenter", () => {
//     icon.style.background = isDarkMode ? "#232424" : "#fff";
// });

// icon.addEventListener("mouseleave", () => {
//     icon.style.background = "transparent"; 
// });

icon.addEventListener("mouseenter", () => {
    // Hover background depends on current mode
    icon.style.background = isClicked ? "#232424" : "#fff";
});

icon.addEventListener("mouseleave", () => {
    // Reset background after hover
    icon.style.background = "transparent";
});