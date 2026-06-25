function calculate() {
  let inputLeft = document.querySelector('#left');
  let inputRight = document.querySelector('#right');
  let valLeft = inputLeft.value;
  let valRight = inputRight.value;
  let result = Number(valLeft) + Number(valRight);
  
  let answerSpan = document.querySelector('#answer');
  answerSpan.textContent = result;
}
let calcButton = document.querySelector('#calc');
calcButton.addEventListener('click', calculate);