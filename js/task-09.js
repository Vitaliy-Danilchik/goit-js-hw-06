const refs = {
  body: document.querySelector('body'),
  changeColorButton: document.querySelector('.change-color'),
  outputColor: document.querySelector('.color'),
};

refs.changeColorButton.addEventListener('click', onChangeColorButtonHandler);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorButtonHandler() {
  refs.outputColor.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.outputColor.textContent;
}