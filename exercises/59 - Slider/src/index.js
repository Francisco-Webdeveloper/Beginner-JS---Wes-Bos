const Slider = (slider) => {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // create variables for working with the slider
  let prev;
  let current;
  let next;

  // select the elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  const startSlider = () => {
    current = slides.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  };

  const applyClasses = () => {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  };

  const move = (direction) => {
    // first stip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    // [prev, current, next].forEach((el) => {
    //   el.classList.remove(...classesToRemove);
    // });
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  };

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event Listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
};

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
