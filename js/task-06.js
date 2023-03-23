const inputEl = document.querySelector('#validation-input');
const styleEl = document.querySelector('style');

console.log(inputEl);
console.log(styleEl);

// const hello = () => {
//   console.log('HELLo');
// };
const valueLength = () => {
  inputEl.value.length;
};

const addInpunName = () => {
    return inputEl.value.length;
};

//   //   if (!inputEl.value) {
//   //     nameOut.textContent = 'Anonymous';
//   //   } else {
//   //     nameOut.textContent = nameIn.value;
//   //   }
// };

inputEl.addEventListener('input', valueLength);

inputEl.addEventListener('focus', event => console.log('Hello'));
inputEl.addEventListener('blur', event => {
  return inputEl.value.length;
  console.log('Hello');
  //   valueLength = inputEl.length;
});
console.log(valueLength);
console.log(addInpunName);

//   if (valueLength == Number(validLength)) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   }
// });

const inputElOn = () => {
  console.log('HELLo');
};

const inputElOff = () => {
  console.log('oh NO');
};

// if (valueLength == Number(validLength)) {
//   input.classList.add('valid');
//   input.classList.remove('invalid');
// } else {
//   input.classList.add('invalid');
//   input.classList.remove('valid');
// }

//   <style>
//       #validation-input {
//         border: 2px solid #bdbdbd;
//       }

//       #validation-input.valid {
//         border-color: #4caf50;
//       }

//       #validation-input.invalid {
//         border-color: #f44336;
//       }
//     </style>
