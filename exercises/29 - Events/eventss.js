const buyButtons = document.querySelectorAll('.buy');

const handleByButtonClick = (event) => {
  console.log('You clicked the buying button');
  console.log(event);
  console.log(event.target); // where I click on
  //   console.log(event.target.innerText);
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget); // fires the event listener
  console.log(event.target === event.currentTarget);
  event.stopPropagation(); // prevents the event from bubbling up. Only the button will listen the event (not the window)
};

buyButtons.forEach((buyBtn) => {
  buyBtn.addEventListener('click', handleByButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    event.stopPropagation(); // stops the event from propagating down
  },
  { capture: true } // it prevents the event from being triggered when it goes down along the DOM. If a button is clicked, it triggers the window, not the button
);
