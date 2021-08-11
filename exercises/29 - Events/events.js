const butts = document.querySelector('.butts');
const buyButtons = document.querySelectorAll('.buy');

const handleClick = () => console.log('I got clicked');

butts.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyItem = (event) => {
  console.log('you clicked a button');
  //   const button = event.target;
  //   console.log(button.innerText);
  //   console.log(parseFloat(event.target.dataset.price, 10));
  console.log(event.target); // what it got clicked, for example: <strong>i</strong>
  console.log(event.currentTarget); // fires the event listener
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up
  event.stopPropagation(); // to only get the callback from the button event, not the one from the window.
};

buyButtons.forEach((buyBtn) => {
  buyBtn.addEventListener('click', buyItem);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked the window');
    console.log(event.target);
    // event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (event) {
  console.log(event.currentTarget);
  console.log(this);
});
