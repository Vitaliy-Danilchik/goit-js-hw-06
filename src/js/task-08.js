const userData = {};

const refs = {
  loginForm: document.querySelector('.login-form'),
  textOutput: document.querySelector('#text'),
};

refs.loginForm.addEventListener('submit', onSubmitHandle);

function onSubmitHandle(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Attention! All fields must be filled!');
  }
  userData.email = email.value;
  userData.password = password.value;
  console.log(userData);
  e.currentTarget.reset();
}
