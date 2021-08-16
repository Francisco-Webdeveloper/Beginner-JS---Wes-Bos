const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

const obCallback = (payload) => {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log('REMOVING DISABLED');
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
    //   } else {
    //     button.disabled = true;
  }
};

// Intersection Observer helps figure out if something is currently viewable on the page. It is a watcher.
// ob is going to take a callback, which is a function that gets called at a certain point.
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1, // tell us when the element is 100% on the page
});

// calling the observe() method and passing it something to watch for
// ob.observe(watch); // to know when strong tag is visible on the page
ob.observe(terms.lastElementChild); // take the last thing inside 'terms' in order to enable the button
