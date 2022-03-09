const inputNumber = document.querySelector(".inputNumber");
const selectNumber = document.querySelector(".selectNumber");
const playButton = document.querySelector(".playButton");
const txt1 = document.querySelector(".txt1");
const txt2 = document.querySelector(".txt2");

function GenerateNumber() {
  const randomNumber = Math.round(Math.random() * inputNumber.value);
  const selNumber = selectNumber.value;
  txt1.innerText =
    "You chose:" + selNumber + ",the machine chose:" + randomNumber + ".";
  if (randomNumber == selNumber) {
    txt2.innerText = "You won!";
  } else {
    txt2.innerText = "You lost!";
  }
}

playButton.addEventListener("click", GenerateNumber);
