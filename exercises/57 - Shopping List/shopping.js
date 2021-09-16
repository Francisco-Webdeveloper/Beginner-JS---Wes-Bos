const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state (current state of the application)
let items = [];

const handleSubmit = (event) => {
  event.preventDefault();
  //   console.log(event.currentTarget.item.value);
  const name = event.currentTarget.item.value;
  // it it's empty, then do not submit it
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push the items into our state
  items.push(item);
  console.log(`There are now ${items.length} items in your state`);
  //   console.log(items);
  // clear the form
  //   event.currentTarget.item.value = ''; or
  event.target.reset();
  // fire off a custom event that will tell anyone else who cares that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const displayItems = () => {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
    <input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
    <li>`
    )
    .join('');
  list.innerHTML = html;
};

const mirrorToLocalStorage = () => {
  console.info('saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
};

// restore from localstorage
const restoreFromLocalStorage = () => {
  console.info('restoring from localstorage');
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    lsItems.forEach((item) => items.push(item));
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
};

const deleteItem = (id) => {
  console.log('Deleting item', id);
  // update our items without this one
  const newItems = items.filter((item) => item.id !== id);
  console.log(newItems);
  items = newItems;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const markAsComplete = (id) => {
  console.log('Marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: we listen for the click on the list <ul> but then delegate the click over the button if that is what was clicked
list.addEventListener('click', (event) => {
  const id = parseInt(event.target.value);
  if (event.target.matches('button')) {
    deleteItem(id);
  }
  if (event.target.matches('[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
