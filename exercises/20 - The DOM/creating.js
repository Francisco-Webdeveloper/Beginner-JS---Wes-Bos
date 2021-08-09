const myParagraph = document.createElement('p');
myParagraph.innerText = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'something';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h3');
heading.innerText = 'I am a heading';
heading.classList.add('first-heading');
myDiv.insertAdjacentElement('afterbegin', heading);

// const heading = '<h3 class="first-heading">I am a heading</h3>';
// myDiv.insertAdjacentHTML('afterbegin', heading);

const list = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
  </ul>
`;
myDiv.insertAdjacentHTML('beforeend', list);

// <li>One</li>
const uList = document.createElement('ul');
uList.innerHTML = '<li>One</li>';
myDiv.insertAdjacentElement('beforeend', uList);

// <li>Two</li>
const liTwo = document.createElement('li');
liTwo.innerText = 'Two';
uList.insertAdjacentElement('beforeend', liTwo);

// <li>Three</li>
const liThree = document.createElement('li');
liThree.innerText = 'Three';
uList.appendChild(liThree);
