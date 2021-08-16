const francisco = document.querySelector('.francisco');

francisco.addEventListener('click', (event) => {
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    // window.location = event.currentTarget.href;
    event.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', (event) => {
  //   console.log(event);
  //   console.log(event.currentTarget.name.value);
  const name = event.currentTarget.name.value;
  if (name.includes('Trump')) {
    alert('this name is not valid');
    event.preventDefault();
  }
  //   console.log(event.currentTarget.email.value);
  //   console.log(event.currentTarget.agree.checked);
  const boxChecked = event.currentTarget.agree.checked;
  if (!boxChecked) {
    alert('Please check the terms and conditions box');
  } else {
    event.preventDefault();
  }
});

const logEvent = (event) => {
  console.log(event.type);
  console.log(event.currentTarget.value);
};

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

const selectPhoto = (event) => {
  event.preventDefault();
  if (event.key === 'Enter' || event.type === 'click') {
    console.log('You clicked the photo');
  }
};

photo.addEventListener('click', selectPhoto);
photo.addEventListener('keyup', selectPhoto);
