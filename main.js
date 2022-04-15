var $car = document.querySelector('.car');

function handleArrowKeys(event) {
  if (event.code.slice(0, 5) !== 'Arrow') {
    return;
  }

  var direction = event.code;
  if (direction === 'ArrowUp') {
    $car.className = 'car turn-up';
  } else if (direction === 'ArrowRight') {
    $car.className = 'car turn-right';
  } else if (direction === 'ArrowDown') {
    $car.className = 'car turn-down';
  } else if (direction === 'ArrowLeft') {
    $car.className = 'car turn-left';
  }
}

document.addEventListener('keydown', handleArrowKeys);
