let container = document.querySelector(".container");

let icon = document.querySelector(".bx");

let body = document.querySelector("body");

let isClicked = true;

let flag = 0;

let display = document.querySelector("p");

let wholeDisplay = document.querySelector(".display");

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

const numOne = 1;
const numTwo = 2;
const numThree = 3;
const numFour = 4;
const numFive = 5;
const numSix = 6;
const numSeven = 7;
const numEight = 8;
const numNine = 9;
const numZero = 0;
const dZ = "00";

const division = "/";
const multiplication = "*";
const subtraction = "-";
const addition = "+";
const decimal = ".";
const percentage = "%";

zero.textContent = numZero;
one.textContent = numOne;
two.textContent = numTwo;
three.textContent = numThree;
four.textContent = numFour;
five.textContent = numFive;
six.textContent = numSix;
seven.textContent = numSeven;
eight.textContent = numEight;
nine.textContent = numNine;
doubleZero.textContent = dZ;

divide.textContent = division;
multiply.textContent = multiplication;
minus.textContent = subtraction;
plus.textContent = addition;
point.textContent = decimal;
percent.textContent = percentage;

// Calculator Logic

function displayNum(num) {
    if (display.textContent === "0") {
        display.textContent = num.textContent;
    }
    else {
        display.textContent += num.textContent;
    }
}

function displayOperations(operation) {
    if (display.textContent === "0") {
        display.textContent = "0";
    }
    else {
        display.textContent += operation.textContent;
    }
}

allClear.addEventListener("click", () => {
    display.textContent = zero.textContent;
})

doubleZero.addEventListener("click", () => {
    displayNum(doubleZero);
})
zero.addEventListener("click", () => {
    displayNum(zero);
})
one.addEventListener("click", () => {
    displayNum(one);
})
two.addEventListener("click", () => {
    displayNum(two);
})
three.addEventListener("click", () => {
    displayNum(three);
})
four.addEventListener("click", () => {
    displayNum(four);
})
five.addEventListener("click", () => {
    displayNum(five);
})
six.addEventListener("click", () => {
    displayNum(six);
})
seven.addEventListener("click", () => {
    displayNum(seven);
})
eight.addEventListener("click", () => {
    displayNum(eight);
})
nine.addEventListener("click", () => {
    displayNum(nine);
})

percent.addEventListener("click", () => {
    // console.log(percent.textContent)
    displayOperations(percent);
})

divide.addEventListener("click", () => {
    // console.log(percent.textContent)
    displayOperations(divide);
})

multiply.addEventListener("click", () => {
    // console.log(percent.textContent)
    displayOperations(multiply);
})

minus.addEventListener("click", () => {
    // console.log(percent.textContent)
    displayOperations(minus);
})

plus.addEventListener("click", () => {
    // console.log(percent.textContent)
    displayOperations(plus);
})

point.addEventListener("click", () => {
    // console.log(percent.textContent)
    displayOperations(point);
})

equalsTo.addEventListener("click", () => {
    let result = eval(display.textContent);
    display.textContent = result;
    console.log(result);
})

deleteOne.addEventListener("click", () => {
    let current = display.textContent;

    if (current.length > 1) {
        display.textContent = current.slice(0, -1); // Remove last character
    } else {
        display.textContent = "0"; // Reset to 0 if only one digit is left
    }
});


// Default Mode
container.classList.add("light")
container.classList.remove("dark")

wholeDisplay.classList.add("light-mode")
wholeDisplay.classList.remove("dark-mode")

allClear.classList.add("light-mode")
allClear.classList.add("grey-color")
allClear.classList.remove("green-color")
deleteOne.classList.add("light-mode")
deleteOne.classList.add("grey-color")
deleteOne.classList.remove("green-color")
percent.classList.add("light-mode")
percent.classList.add("grey-color")
percent.classList.remove("green-color")


seven.classList.add("light-mode")
seven.classList.remove("dark-mode")
eight.classList.add("light-mode")
eight.classList.remove("dark-mode")
nine.classList.add("light-mode")
nine.classList.remove("dark-mode")
four.classList.add("light-mode")
four.classList.remove("dark-mode")
five.classList.add("light-mode")
five.classList.remove("dark-mode")
six.classList.add("light-mode")
six.classList.remove("dark-mode")
one.classList.add("light-mode")
one.classList.remove("dark-mode")
two.classList.add("light-mode")
two.classList.remove("dark-mode")
three.classList.add("light-mode")
three.classList.remove("dark-mode")
doubleZero.classList.add("light-mode")
doubleZero.classList.remove("dark-mode")
zero.classList.add("light-mode")
zero.classList.remove("dark-mode")
point.classList.add("light-mode")
point.classList.remove("dark-mode")


multiply.classList.add("light-mode")
multiply.classList.add("grey-color")
multiply.classList.remove("green-color")
divide.classList.add("light-mode")
divide.classList.add("grey-color")
divide.classList.remove("green-color")
minus.classList.add("light-mode")
minus.classList.add("grey-color")
minus.classList.remove("green-color")
plus.classList.add("light-mode")
plus.classList.add("grey-color")
plus.classList.remove("green-color")


// Light and Dark Mode
icon.addEventListener("click", () => {
    if (flag == 0) {
        // To Dark mode
        icon.style.color = "#fff";
        body.style.background = "#232424"

        container.classList.add("dark")
        container.classList.remove("light")

        wholeDisplay.classList.add("dark-mode")
        wholeDisplay.classList.remove("light-mode")

        allClear.classList.remove("light-mode")
        allClear.classList.remove("grey-color")
        allClear.classList.add("green-color")
        deleteOne.classList.remove("light-mode")
        deleteOne.classList.remove("grey-color")
        deleteOne.classList.add("green-color")
        percent.classList.remove("light-mode")
        percent.classList.remove("grey-color")
        percent.classList.add("green-color")


        seven.classList.remove("light-mode")
        seven.classList.add("dark-mode")
        eight.classList.remove("light-mode")
        eight.classList.add("dark-mode")
        nine.classList.remove("light-mode")
        nine.classList.add("dark-mode")
        four.classList.remove("light-mode")
        four.classList.add("dark-mode")
        five.classList.remove("light-mode")
        five.classList.add("dark-mode")
        six.classList.remove("light-mode")
        six.classList.add("dark-mode")
        one.classList.remove("light-mode")
        one.classList.add("dark-mode")
        two.classList.remove("light-mode")
        two.classList.add("dark-mode")
        three.classList.remove("light-mode")
        three.classList.add("dark-mode")
        doubleZero.classList.remove("light-mode")
        doubleZero.classList.add("dark-mode")
        zero.classList.remove("light-mode")
        zero.classList.add("dark-mode")
        point.classList.remove("light-mode")
        point.classList.add("dark-mode")


        multiply.classList.remove("light-mode")
        multiply.classList.remove("grey-color")
        multiply.classList.add("green-color")
        divide.classList.remove("light-mode")
        divide.classList.remove("grey-color")
        divide.classList.add("green-color")
        minus.classList.remove("light-mode")
        minus.classList.remove("grey-color")
        minus.classList.add("green-color")
        plus.classList.remove("light-mode")
        plus.classList.remove("grey-color")
        plus.classList.add("green-color")

        flag = 1;
        isClicked = true;
    }
    else {
        // To Light Mode
        icon.style.color = "#232424";
        body.style.background = "#fff"

        container.classList.add("light")
        container.classList.remove("dark")

        wholeDisplay.classList.add("light-mode")
        wholeDisplay.classList.remove("dark-mode")

        allClear.classList.add("light-mode")
        allClear.classList.add("grey-color")
        allClear.classList.remove("green-color")
        deleteOne.classList.add("light-mode")
        deleteOne.classList.add("grey-color")
        deleteOne.classList.remove("green-color")
        percent.classList.add("light-mode")
        percent.classList.add("grey-color")
        percent.classList.remove("green-color")


        seven.classList.add("light-mode")
        seven.classList.remove("dark-mode")
        eight.classList.add("light-mode")
        eight.classList.remove("dark-mode")
        nine.classList.add("light-mode")
        nine.classList.remove("dark-mode")
        four.classList.add("light-mode")
        four.classList.remove("dark-mode")
        five.classList.add("light-mode")
        five.classList.remove("dark-mode")
        six.classList.add("light-mode")
        six.classList.remove("dark-mode")
        one.classList.add("light-mode")
        one.classList.remove("dark-mode")
        two.classList.add("light-mode")
        two.classList.remove("dark-mode")
        three.classList.add("light-mode")
        three.classList.remove("dark-mode")
        doubleZero.classList.add("light-mode")
        doubleZero.classList.remove("dark-mode")
        zero.classList.add("light-mode")
        zero.classList.remove("dark-mode")
        point.classList.add("light-mode")
        point.classList.remove("dark-mode")


        multiply.classList.add("light-mode")
        multiply.classList.add("grey-color")
        multiply.classList.remove("green-color")
        divide.classList.add("light-mode")
        divide.classList.add("grey-color")
        divide.classList.remove("green-color")
        minus.classList.add("light-mode")
        minus.classList.add("grey-color")
        minus.classList.remove("green-color")
        plus.classList.add("light-mode")
        plus.classList.add("grey-color")
        plus.classList.remove("green-color")

        flag = 0;
        isClicked = false;
    }
})