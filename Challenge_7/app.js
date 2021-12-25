const tipAmountDisplay = document.querySelector('#tip-amount');
const totalPerPersonDisplay = document.querySelector('#total-per-person');
const tipPercentageInputs = document.querySelectorAll('input[type="radio"]');
const billAmountInput = document.querySelector('#bill-amount');
const numberOfPeopleInput = document.querySelector('#number-of-people');
const calculateBtn = document.querySelector('#calculate');

let tipPercentage = 0;
let billAmount = parseFloat(billAmountInput.value);
let numberOfPeople = parseInt(numberOfPeopleInput.value);

tipPercentageInputs.forEach((tipPercentageInput) => {
  tipPercentageInput.addEventListener('click', (e) => {
    tipPercentage = parseInt(e.target.value);
    calculate();
  });
  if (tipPercentageInput.checked) {
    tipPercentage = parseInt(tipPercentageInput.value);
  }
});

billAmountInput.addEventListener('input', (e) => {
  billAmount = parseFloat(e.target.value);
  if (!billAmount) {
    alert('enter proper inputs');
  } else {
    console.log('alright');
  }
  console.log(billAmount);
});

numberOfPeopleInput.addEventListener('change', (e) => {
  numberOfPeople = parseInt(e.target.value);
  if (!numberOfPeople) {
    alert('enter proper inputs');
  } else {
    console.log('alright');
  }
  console.log(numberOfPeople);
});

calculateBtn.addEventListener('click', calculate);
function calculate() {
  // console.log(typeof billAmount, typeof numberOfPeople, typeof tipPercentage);
  console.log(billAmount, numberOfPeople, tipPercentage);
  let tipAmount = ((billAmount * tipPercentage) / 100).toFixed(2);
  let totalBillAmount = billAmount + +tipAmount;
  let totalPerPerson = (totalBillAmount / numberOfPeople).toFixed(2);
  tipAmountDisplay.innerText = tipAmount;
  totalPerPersonDisplay.innerText = totalPerPerson;
}
