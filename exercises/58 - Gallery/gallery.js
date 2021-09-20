const Gallery = (gallery) => {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  const openModal = () => {
    console.info('open modal...');
    // first check if the modal is already open
    if (modal.matches('.open')) {
      console.info('modal already open');
    }
    modal.classList.add('open');

    // Event Listeners to be bound when we open the modal:
    window.addEventListener('keyup', handleModalExit);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
    window.addEventListener('keyup', handleKeyUp);
  };

  const closeModal = () => {
    modal.classList.remove('open');
    window.removeEventListener('keyup', handleModalExit);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  };

  const handleModalExit = (event) => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      closeModal();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowRight') showNextImage();
    if (event.key === 'ArrowLeft') showPrevImage();
  };

  const showNextImage = () => {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  };
  const showPrevImage = () => {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  };

  const showImage = (el) => {
    if (!el) {
      console.info('no image to show');
    }
    // update the modal with this info
    console.log(el.target);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').innerText = el.title;
    modal.querySelector('figure p').innerText = el.dataset.description;
    currentImage = el;
    openModal();
  };

  // these are our Event Listeners
  images.forEach((image) =>
    image.addEventListener('click', (event) => {
      showImage(event.currentTarget);
    })
  );

  // loop over each image
  images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener('keyup', (event) => {
      // when that is keyup'd, check if it was Enter
      if (event.key === 'Enter') {
        // if it was, show that image
        showImage(event.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleModalExit);
};

// use on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
