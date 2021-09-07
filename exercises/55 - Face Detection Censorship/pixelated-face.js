// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video'); // main canvas
const ctx = canvas.getContext('2d'); // to do the drawing
const faceCanvas = document.querySelector('.face'); // canvas where we are going to show our face on
const faceCtx = faceCanvas.getContext('2d'); // to do the drawing

// make a new face detector
const faceDetector = new window.FaceDetector();
// console.log(video, canvas, faceCanvas, faceDetector);
const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);
console.log(optionsInputs);

const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  // const value = event.currentTarget.value;
  // const name = event.currentTarget.name;
  const { value, name } = event.currentTarget;
  options[name] = value;
}

optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// write a function that will populate the user's video
async function populateVideo() {
  // grab the stream from the user's webcam
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canvas to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

// face detection API
async function detect() {
  // detect faces that are in the shot
  const faces = await faceDetector.detect(video);
  //   console.log(faces.length);
  // ask the browser when the next animation frame is, and tell it to run detect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  //   console.log(face);
  const { width, height, top, left } = face.boundingBox;
  //   console.log({ width, height, top, left });
  // draw a box to our canvas element
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

// pixelate the face
function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  //   console.log(face);
  // draw the small face
  faceCtx.drawImage(
    // 5 source args
    video, // where does the source come from
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where shoud we start drawing the x and y?
    face.y,
    options.SIZE,
    options.SIZE
  );
  // draw the small face back on, but scale up
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source pull from?
    face.y,
    options.SIZE, // how wide
    options.SIZE, // and how high
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
