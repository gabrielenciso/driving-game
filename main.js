var $car = document.querySelector('.car');

function handleArrowKeys(event) {
  console.log(event.code);
}

document.addEventListener('keydown', handleArrowKeys);
