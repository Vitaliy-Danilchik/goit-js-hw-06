function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsDiv: document.querySelector('#controls'),
  divBox: document.querySelector('#boxes'),
};

refs.controlsDiv.addEventListener('click', onElementsHandler);
refs.controlsDiv.addEventListener('change', onAmountHandler);

let amountOfElements = 0;

function onElementsHandler(e) {
  if (e.target.hasAttribute('data-create')) {
    createBoxes(amountOfElements);
  } else if (e.target.hasAttribute('data-destroy')) {
    destroyBoxes();
  }
}

function onAmountHandler(e) {
  amountOfElements = e.target.value;
}

let sideLength = 20;
function createBoxes(amount) {
  let markup = ``;

  for (let index = 0; index < amount; index += 1) {
    sideLength += 10;
    const color = getRandomHexColor();
    markup += `<div style = "width: ${sideLength}px; height: ${sideLength}px; background-color: ${color};"></div>`;
  }
  refs.divBox.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  refs.divBox.innerHTML = '';
  sideLength = 20;
}