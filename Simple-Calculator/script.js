let screen = document.querySelector(".screen");
let resultScreen = document.querySelector(".resultScreen");
let buttons = document.querySelectorAll("button");
let calContainer = document.querySelector(".cal-container");
let darkMode = document.querySelector(".dark-mode");
let lightMode = document.querySelector(".light-mode");

let jsScreen = "";

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    buttonInnerText = e.target.innerText;
    if (buttonInnerText === "x") {
      buttonInnerText = "*";
      jsScreen += buttonInnerText;
      screen.innerText = jsScreen;
    } else if (buttonInnerText === "C") {
      screen.innerText = "0";
      resultScreen.innerText = "0";
      jsScreen = "";
    } else if (buttonInnerText === "Del") {
      jsScreen = jsScreen.substring(0, jsScreen.length - 1);
      screen.innerText = jsScreen;
    } else if (buttonInnerText === "=") {
      resultScreen.innerText = eval(jsScreen);
    } else {
      jsScreen += buttonInnerText;
      screen.innerText = jsScreen;
    }
  });
}

darkMode.addEventListener("click", () => {
  calContainer.style.backgroundColor = "black";
  screen.style.borderColor = "white";
  screen.style.color = "white";
  resultScreen.style.borderColor = "white";
  resultScreen.style.color = "white";
  darkMode.style.backgroundColor = "black";
  darkMode.style.color = "white";
  lightMode.style.backgroundColor = "";
  lightMode.style.color = "";
});

lightMode.addEventListener("click", () => {
  calContainer.style.backgroundColor = "";
  screen.style.borderColor = "";
  screen.style.color = "";
  resultScreen.style.borderColor = "";
  resultScreen.style.color = "";
  lightMode.style.backgroundColor = "white";
  lightMode.style.color = "black";
  darkMode.style.backgroundColor = "";
  darkMode.style.color = "";
});
