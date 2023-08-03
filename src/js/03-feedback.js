import _ from 'lodash';

const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
formEl.addEventListener('input', _.throttle(inputMemory, 500));
formEl.addEventListener('submit', onSubmit);

let formState = {};

setFromLocal();

function onSubmit(e) {
  e.preventDefault();

  console.log(formState);
  formState = {};
  e.target.reset();
  localStorage.removeItem(FORM_KEY);
}

function inputMemory(e) {
  formState[e.target.name] = e.target.value.trim();
  localStorage.setItem(FORM_KEY, JSON.stringify(formState));
}

function setFromLocal() {
  try {
    const savedData = localStorage.getItem(FORM_KEY);
    if (!savedData) return;
    formState = JSON.parse(savedData);

    Object.entries(formState).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
}
