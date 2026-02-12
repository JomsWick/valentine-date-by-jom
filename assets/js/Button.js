import { showToast } from "./Toast.js";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".buttons");

const originalPos = {
    left: noBtn.offsetLeft + "px",
    top: noBtn.offsetTop + "px"
};

const altPos = {
    left: "40px",
    top: "0px"
};

let toggled = false;

if (yesBtn && noBtn && container) {
    yesBtn.addEventListener("click", () => {
        showToast("You chose YES!! 💖", "success");

        window.location.href = "viber://chat?number=%2B639561250706";

        setTimeout(() => {
            window.location.href = "https://vb.me/639561250706";
        }, 3000);

        setTimeout(() => {
            window.open("https://wa.me/639561250706", "_blank");
        }, 4000);

        setTimeout(() => {
            window.open("https://t.me/joms_wick", "_blank");
        }, 5000);
    });

    noBtn.addEventListener("mouseover", () => {
        if (!toggled) {
            noBtn.style.position = "absolute";
            noBtn.style.left = altPos.left;
            noBtn.style.top = altPos.top;
            toggled = true;
        } else {
            noBtn.style.left = originalPos.left;
            noBtn.style.top = originalPos.top;
            toggled = false;
        }
    });
}
