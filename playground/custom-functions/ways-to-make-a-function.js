// console.log(doctorize2('Anna'));

// const doctorize = (firstName) => `Dr. ${firstName}`;

// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

/* eslint-disable */
const inchToCms = (inches) => {
  return (inches * 2.54);
};

const inchToCms2 = inches => inches * 2.54;
inchToCms2(4);

const add = (a, b = 4) => a + b;

const add2 = (a, b = 3) => {
  const total = a + b;
  return total;
};

/* eslint-enable */
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

(function (age) {
  console.log(`You are cool and age ${age}`);
})(18);

const anna = {
  fullName: 'Anna Kokhan',
  sayHi() {
    // console.log(this);
    console.log(`Hey ${this.fullName}`);
  },
};
anna();

const button = document.querySelector('.click-me');
button.addEventListener('click', (event) => {
  console.log('nice job!');
});
