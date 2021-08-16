// 1. Select the elements on the page:
// Canvas, context and shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 25;

// 2. Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;
// const width = canvas.width;
// const height = canvas.height;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// 3. Write a draw function
const draw = ({ key }) => {
  // { } is called object destructuring where we can take properties and rename them into proper variables
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // increment the hue
  hue = Math.random() * 360;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // move our x and y values depending on what the user did
  //   switch (key) {
  //     case 'ArrowUp':
  //       y -= MOVE_AMOUNT;
  //       break;
  //     case 'ArrowDown':
  //       y += MOVE_AMOUNT;
  //       break;
  //     case 'ArrowRight':
  //       x += MOVE_AMOUNT;
  //       break;
  //     case 'ArrowLeft':
  //       x -= MOVE_AMOUNT;
  //       break;
  //     default:
  //       break;
  //   }
  if (key === 'ArrowUp') {
    y -= MOVE_AMOUNT;
  } else if (key === 'ArrowDown') {
    y += MOVE_AMOUNT;
  } else if (key === 'ArrowRight') {
    x += MOVE_AMOUNT;
  } else {
    x -= MOVE_AMOUNT;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
};

// 4. Write a handler for the keys
const handleKey = (event) => {
  if (
    event.key === 'ArrowUp' ||
    event.key === 'ArrowDown' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight'
  ) {
    event.preventDefault(); // stops the scrolling defauft behavior
    draw({ key: event.key });
  }
};
// 5. Clear / shake function
const clearCanvas = () => {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      console.log('Done the shake');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
};
shakeBtn.addEventListener('click', clearCanvas);

// 6. Listen for arrow keys
window.addEventListener('keydown', handleKey);
