// Make a div
const myDiv = document.createElement('div');
myDiv.textContent = 'I am a DIV';

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const uList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

// 1st way:
// const li1 = document.createElement('li');
// li1.textContent = 'one';
// uList.appendChild(li1);

// const li2 = document.createElement('li');
// li2.textContent = 'two';
// uList.appendChild(li2);

// const l3 = document.createElement('li');
// l3.textContent = 'three';
// uList.appendChild(l3);
// console.log(uList);

// myDiv.insertAdjacentElement('beforeend', uList);

// 2nd way:
const li = `
    <li>one</li>
    <li>two</li>
    <li>three</li>
`;
uList.insertAdjacentHTML('beforeend', li);
console.log(uList);
myDiv.insertAdjacentElement('beforeend', uList);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://source.unsplash.com/random/300x300';

// set the width to 250
myImage.width = 250;
myImage.height = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
  <div class="my-paragraphs">
    <p>I am the first paragraph</p>
    <p>I am the second paragraph</p>
  </div>
`;
uList.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
// const secondP = document.querySelector('div p:last-child');
const myParagraphs = myDiv.querySelector('.my-paragraphs');
const secondP = myParagraphs.children[1];
secondP.classList.add('warning');
// remove the first paragraph
const firstP = document.querySelector('div p');
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name, age, height) => {
  const html = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button class="delete" type="button">Delete</button>
    </div>
    `;
  return html;
};

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard

// One way
// const cardsHTMLArray = [];
// const card1 = generatePlayerCard('alpaca', 5, 20);
// const card2 = generatePlayerCard('camel', 2, 30);
// const card3 = generatePlayerCard('toto', 2, 30);
// const card4 = generatePlayerCard('vizenzo', 2, 30);

// cardsHTMLArray.push(card1, card2, card3, card4);
// console.log(cardsHTMLArray);
// cards.insertAdjacentHTML('beforeend', cardsHTMLArray);

// Another way
let cardsHTML = generatePlayerCard('speedy', 5, 20);
cardsHTML += generatePlayerCard('loddy', 2, 30);
cardsHTML += generatePlayerCard('oscar', 8, 12);
cardsHTML += generatePlayerCard('colley', 9, 25);

// append those cards to the div
// cards.insertAdjacentHTML('beforeend', cardsHTML);
cards.innerHTML = cardsHTML;
console.log(cards);
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteBtns = document.querySelectorAll('.delete');
// make out delete function
const deleteCard = (event) => {
  //   event.currentTarget.parentElement.remove();
  event.currentTarget.closest('.playerCard').remove(); // closest looks at an element and move itself u the tree of DOM elements until it find something that matches the name of the argument (.playerCard)
};

// loop over them and attach a listener
deleteBtns.forEach((button) => {
  button.addEventListener('click', deleteCard);
});
