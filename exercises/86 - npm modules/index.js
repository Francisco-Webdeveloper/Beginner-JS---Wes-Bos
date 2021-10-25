import wait from 'waait';
import faker from 'faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, eq, isEqual } from 'lodash';
import to from 'await-to-js';

const fakeNames = Array.from(
  { length: 50 },
  () => `${faker.name.firstName()} ${faker.name.lastName()}`
);

async function go() {
  console.log('going!');
  await wait(2000);
  console.log('ending');
}

const diff = formatDistance(new Date(), new Date(1981, 8, 13, 11, 32, 0), {
  addSuffix: true,
}); //= > 'in about 1 hour'
console.log(diff);

const date = new Date();

// October the 25th 2021
const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data);
}

getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [3, 4, 323, 545, 54, 31, 8];

const sameValues = intersection(a, b);
console.log(sameValues);

const person2 = { name: 'anna' };
const person1 = { name: 'anna' };

console.log(person1 === person2);
const equal = eq(person1, person2);
console.log(equal);
const equal2 = isEqual(person1, person2);
console.log(equal2);

function checkIfNameIsCool(firstName) {
  return new Promise(function (resolve, reject) {
    if (firstName === 'Anna') {
      resolve('Cool name');
      return;
    }
    reject(new Error('Bad name'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('Goofy'));
  if (err) {
    // deal with it
    console.log(err);
  } else {
    console.log(successValue);
  }
}

checkName();
