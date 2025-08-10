let icon = document.querySelector(".bx");

let body = document.querySelector("body");

let isClicked = true;

let flag = 0;

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