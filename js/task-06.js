const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
console.log(inputEl.dataset.length);

const addColor = () => {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};

inputEl.addEventListener('blur', addColor);


// console.log(inputEl);
// console.log(number);

// inputEl.addEventListener('focus', event => console.log('Hello'));

// const hello = () => {
//   console.log('HELLo');
// };
// const valueLength = () => {
//   console.dir(inputEl.value);
// };

// const addInpunName = () => {
//   console.log(inputEl.length);
// };

//   //   if (!inputEl.value) {
//   //     nameOut.textContent = 'Anonymous';
//   //   } else {
//   //     nameOut.textContent = nameIn.value;
//   //   }
// };

// console.log(valueLength);
// console.log(addInpunName);

//
// });

// const inputElOn = () => {
//   console.log('HELLo');
// };

// const inputElOff = () => {
//   console.log('oh NO');
// };


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
