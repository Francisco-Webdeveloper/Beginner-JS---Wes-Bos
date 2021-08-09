const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p) => {
  console.log(p.innerText);
});

const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.innerText);
// heading.textContent = 'I am a cool heading';
// console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes
const pic = document.querySelector('.nice-pic');
pic.classList.add('open');
pic.classList.remove('open');

const toggleRound = () => {
  pic.classList.toggle('round');
};
pic.addEventListener('click', toggleRound);

pic.alt = 'nice landscape';
// pic.width = 200;
console.log(pic.naturalWidth);

console.log(pic.alt);
console.log(pic.getAttribute('alt'));
console.log(pic.getAttribute('src'));
// pic.setAttribute('id', 'banana');
// pic.setAttribute('fran', 'is cool');

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', (event) => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
