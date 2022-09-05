const refs = {
    validationInput: document.querySelector('#validation-input'),
  };
  
  refs.validationInput.addEventListener('blur', () => {
    refs.validationInput.classList.add('invalid');
    if (refs.validationInput.value.length === Number(refs.validationInput.dataset.length)) {
      refs.validationInput.classList.replace('invalid', 'valid');
    }
  });