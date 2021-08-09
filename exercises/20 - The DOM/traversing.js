const fran = document.querySelector('.fran');
console.log(fran);
console.log(fran.children); // print elements (1)
console.log(fran.firstElementChild);
console.log(fran.lastElementChild);
console.log(fran.previousElementSibling);
console.log(fran.nextElementSibling);
console.log(fran.parentElement);

console.log(fran.childNodes); // print nodes (3)
console.log(fran.firstChild);
console.log(fran.lastChild);
console.log(fran.previousSibling);
console.log(fran.nextSibling);
console.log(fran.parentNode);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
