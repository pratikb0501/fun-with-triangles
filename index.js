const formDataArray = document.getElementById("quiz-form");
const submitBtn = document.getElementById("content-btn")
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

const answers = ["yes", "right", "equilateral", "5", "scalene"]

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hideMessage();
    let score = 0;
    let formData = new FormData(formDataArray)
    for (let value of formData.entries()) {
        let answerNumber = value[0].split("-")[1];
        let answerGiven = value[1]
        if (answerGiven == answers[answerNumber - 1]) {
            score++;
        }
    }
    showMessage(`Your score is ${score} out of ${answers.length}`);
})