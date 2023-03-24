const itemAll = document.querySelectorAll('.item');
console.log('Number of categories: ' + itemAll.length);

itemAll.forEach(element => {
  console.log('Category: ' + element.firstElementChild.textContent);
  console.log('Elements: ' + element.querySelectorAll('li').length);
  // console.log('Elements: ' + element.nextElementSibling.children.length);
});
