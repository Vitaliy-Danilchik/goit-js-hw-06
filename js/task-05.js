const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
  };
  
  refs.textInput.addEventListener('input', event =>
    event.target.value === ''
      ? (refs.textOutput.textContent = 'Anonymous')
      : (refs.textOutput.textContent = event.target.value)
  );