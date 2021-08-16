const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
console.log(modalInner);

const handleCardButtonClick = (event) => {
  const button = event.target;
  const card = button.closest('div');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}">
    <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
};

cardButtons.forEach((button) => {
  button.addEventListener('click', handleCardButtonClick);
});

const closeModal = () => {
  modalOuter.classList.remove('open');
};

modalOuter.addEventListener('click', (event) => {
  const isOutside = event.target.closest('.modal-inner');
  if (isOutside === null) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
