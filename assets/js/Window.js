const windowDiv = document.querySelector(".window");
function shakeWindow() {
    windowDiv.style.transform = "translateX(-10px)";
    setTimeout(() => windowDiv.style.transform = "translateX(10px)", 100);
    setTimeout(() => windowDiv.style.transform = "translateX(0)", 200);
}