const checkbtn = document.getElementById("tg-btn");
const inpArray = document.querySelectorAll(".tg--input");
const message = document.getElementById("message");
const navToggle = document.getElementById('nav-toggle');
const menu = document.getElementById("header--nav");
let isToggle = false;

navToggle.addEventListener("click", () => {
    isToggle = !isToggle;
    if (isToggle) {
        menu.style.display = "block"
        // navToggle.style.transform = "rotate(90deg)"
    } else {
        menu.style.display = "none"
        // navToggle.style.transform = "rotate(180deg)"
    }
})

const showMessage = (msg) => {
    message.innerText = msg;
    message.style.display = "block"
}

const hideMessage = () => {
    message.style.display = "none"
}

const calculateHypotenuse = (base, height) => {
    let total = Math.sqrt(base ** 2 + height ** 2);
    showMessage(`The hypotenuse of triangle is ${total.toFixed(2)} unit`)

}


checkbtn.addEventListener("click", () => {
    let base = Number(inpArray[0].value);
    let height = Number(inpArray[1].value);
    if (!base || base <= 0) {
        showMessage("Please enter value of base greater than zero");
        return;
    }
    else if (!height || height <= 0) {
        showMessage("Please enter value of height greater than zero");
        return;
    }
    else {
        hideMessage();
        calculateHypotenuse(base, height)
    }
})