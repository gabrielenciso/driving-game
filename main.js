var $car = document.querySelector('.car');
var move = false;
var intervalId = null;

function handleKeys(event) {
  console.log(event.code);
  if (event.code.slice(0, 5) === 'Arrow') {
    handleDirection(event.code);
  }

  if (event.code === 'Space') {
    moveCar(event.code);
  }
}

function handleDirection(eventcode) {
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

function moveCar(eventcode) {
  if (move === false) {
    move = true;
    console.log('moving');
  } else if (move === true) {
    move = false;
    console.log('stopped');
  }
}

document.addEventListener('keydown', handleKeys);
// intervalId = setInterval(moveCar, 16);
