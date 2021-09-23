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

const calculatePerimeter = (sideOne, sideTwo, sideThree) => {
    return Math.round(sideOne + sideTwo + sideThree)
}

const calculateArea = (sideOne, sideTwo, sideThree, perimeter) => {
    let s = perimeter / 2;
    let sMinusA = s - sideOne;
    let sMinusB = s - sideTwo;
    let sMinusC = s - sideThree;
    let area = Math.sqrt(s * sMinusA * sMinusB * sMinusC);
    showMessage(`The area of traingle is ${area.toFixed(2)} units by using Heron's formula`)
}


checkbtn.addEventListener("click", () => {
    let sideOne = Number(inpArray[0].value);
    let sideTwo = Number(inpArray[1].value);
    let sideThree = Number(inpArray[2].value);
    if (!sideOne || sideOne <= 0) {
        showMessage("Please enter value of side one greater than zero");
        return;
    }
    else if (!sideTwo || sideTwo <= 0) {
        showMessage("Please enter value of side two greater than zero");
        return;
    }
    else if (!sideThree || sideThree <= 0) {
        showMessage("Please enter value of side three greater than zero");
        return;
    }
    else {
        hideMessage();
        const perimeter = calculatePerimeter(sideOne, sideTwo, sideThree)
        calculateArea(sideOne, sideTwo, sideThree, perimeter);
    }
})