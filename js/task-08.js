const resultForm = document.querySelector('login-form');

function addInfoForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value == '' || password.value == '') {
    return alert('Да пребудет с тобой сила, введи свой email и password');
  }

  const newClient = {};
  newClient.email = email.value;
  newClient.password = password.value;
  console.log(newClient);

  resultForm.reset();
}

resultForm.addEventListener('submit', addInfoForm);
