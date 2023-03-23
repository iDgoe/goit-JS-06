const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('ul.gallery');
console.log(list);

const result = x => {
  return x
    .map(({ url, alt } = {}) => {
      return `
    <li>
    <a href="#">
    <img src="${url}" alt="${alt}>
    </a>
    </li>`;
    })
    .join('');
};

list.insertAdjacentHTML('afterbegin', result(images));

// const result = ingredients.map(element => {
//   const el = document.createElement('li');
//   el.textContent = element;
//   el.classList.add('item');
//   return el;
// });

// list.append(...result);

// function result1(x) {
//   return x
//     .map(el => {
//       return `<li class = 'item'>${el}</li>`;
//     })
//     .join('');
// }

// list.insertAdjacentHTML('afterbegin', result1(ingredients));

// list.innerHTML = result1(ingredients);

// list.innerHTML = '';
