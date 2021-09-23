const checkbtn = document.getElementById("tg-btn");
const inpArray = document.querySelectorAll(".tg--input");
const message = document.getElementById("message");

const showMessage = (msg) => {
    message.innerText = msg;
    message.style.display = "block"
}

const hideMessage = () => {
    message.style.display = "none"
}

const calculateTotalAngles = (angleOne, angleTwo, angleThree) => {
    let total = angleOne + angleTwo + angleThree;
    if (total == 180) {
        showMessage("Given angles make a traingle")
    } else {
        showMessage("Oops ! Given angles doesnot make a traingle")
    }
}


checkbtn.addEventListener("click", () => {
    let angleOne = Number(inpArray[0].value);
    let angleTwo = Number(inpArray[1].value);
    let angleThree = Number(inpArray[2].value);
    if (!angleOne || angleOne <= 0) {
        showMessage("Please enter value of angle one greater than zero");
        return;
    }
    else if (!angleTwo || angleTwo <= 0) {
        showMessage("Please enter value of angle two greater than zero");
        return;
    }
    else if (!angleThree || angleThree <= 0) {
        showMessage("Please enter value of angle three greater than zero");
        return;
    }
    else {
        hideMessage();
        calculateTotalAngles(angleOne, angleTwo, angleThree)
    }
})