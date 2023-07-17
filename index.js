// // Your code here
// const DODGER = document.getElementById('dodger');

// function moveDodgerLeft() {
//   const leftNumbers = DODGER.style.left.replace('px', '');
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     DODGER.style.left = `${left - 4}px`; 
//   }
// }

// console.log(DODGER.style.left); 
// moveDodgerLeft(); 
// console.log(DODGER.style.left); 


const DODGER = document.getElementById('dodger');
const GAME_WIDTH = 400; 
const DODGER_WIDTH = 40; 

function moveDodgerLeft() {
  const leftNumbers = DODGER.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    DODGER.style.left = `${left - 4}px`; 
  }
}

function moveDodgerRight() {
  const leftNumbers = DODGER.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left + DODGER_WIDTH < GAME_WIDTH) {
    DODGER.style.left = `${left + 4}px`; 
  }
}

function moveDodger(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
}

document.addEventListener('keydown', moveDodger);
