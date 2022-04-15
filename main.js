var $car = document.querySelector('.car');
var move = false;
var intervalId = null;
var left = 0;

function handleKeys(event) {
  if (event.code.slice(0, 5) === 'Arrow') {
    handleDirection(event.code);
  }

  if (event.code === 'Space') {
    handleMove(event.code);
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
  return direction;
}

function handleMove(eventcode) {
  if (move === false) {
    intervalId = setInterval(moveCar, 16);
    move = true;
    console.log('moving');
  } else if (move === true) {
    clearInterval(intervalId);
    move = false;
    console.log('stopped');
  }
}

function moveCar() {
  left += 10;
  console.log('left prop value: ', left);
  $car.style.left = left.toString() + 'px';
}

document.addEventListener('keydown', handleKeys);
