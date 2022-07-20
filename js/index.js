let counter = 0;

//Create button
function addButton(buttonContent, buttonClass, parentElement) {
  const button = document.createElement("button");
  button.textContent = buttonContent;
  button.setAttribute("id", buttonClass);
  parentElement.appendChild(button);
}

//Colorise Counter
function coloriseCounter() {
  if (counter === 0) {
    counterValue.classList.remove("counterNegatif");
    counterValue.classList.remove("counterPositif");
  } else if (counter > 0) {
    counterValue.classList.remove("counterNegatif");
    counterValue.classList.add("counterPositif");
  } else {
    counterValue.classList.add("counterNegatif");
    counterValue.classList.remove("counterPositif");
  }
}

//Countainer element
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.prepend(container);

// Title element
const title = document.createElement("h1");
title.textContent = "Counter";
title.classList.add("title");
container.appendChild(title);

const counterValue = document.createElement("div");
counterValue.textContent = counter;
counterValue.classList.add("counter");
container.appendChild(counterValue);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

addButton("DECREASE", "decrease", buttons);
addButton("RESET", "reset", buttons);
addButton("INCREASE", "increase", buttons);

const buttonElts = document.querySelectorAll("button");

buttonElts.forEach((buttonElt) => {
  buttonElt.addEventListener("click", () => {
    console.log("");
    for (let buttonElt of buttonElts) {
      buttonElt.classList.remove("active");
    }
    buttonElt.classList.add("active");
  });
});

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

decrease.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
  coloriseCounter();
});

reset.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
  coloriseCounter();
});

increase.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
  coloriseCounter();
});
