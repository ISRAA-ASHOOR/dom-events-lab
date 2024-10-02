/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let number1 = '';
let number2 = '';
let operator = '';
let result = '';

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
console.dir(buttons);
const calculator = document.querySelector('#calculator');
console.dir(calculator);
const display = document.querySelector('.display');
console.dir(display);

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.value = event.target.innerText;
  });
});

/*-------------------------------- Functions --------------------------------*/

calculator.addEventListener('click', (event) => {
  console.log(event.target.innerText);

  if (event.target.classList.contains('number')) {
    if (operator === '') {
      number1 += event.target.value;
      display.textContent = number1;
    } else if(operator !=='') {
      if(number1 !==''){
      number2 += event.target.value;
      display.textContent = number2;
      };
    };
  } else if (event.target.classList.contains('operator')){
    if (event.target.value === '+' || event.target.value === '-' || event.target.value === '*' || event.target.value === '/' || event.target.value === 'C') {
    operator = event.target.value;
    display.textContent = operator;
    };
  }  else if (event.target.value === '=') {
    if (operator !== '' && number1 !== '' && number2 !== '') {
      if (operator === '+'){
        result = parseInt(number1) + parseInt(number2);
      } else if (operator === '-'){
        result = parseInt(number1) - parseInt(number2);
      } else if (operator === '*'){
        result = parseInt(number1) * parseInt(number2);
      } else if (operator === '/'){
        result = parseInt(number1) / parseInt(number2);
      } else if (operator === 'C') {
        result = '';
        number1 = '';
        number2 = '';
        operator = '';
      }
      display.textContent = result;
      console.log(result);
    };
  };
});
