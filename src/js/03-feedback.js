import _ from 'lodash';

const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
formEl.addEventListener('input', _.throttle(inputMemory, 500));
formEl.addEventListener('submit', onSubmit);

setFromLocal();

function onSubmit(e) {
  e.preventDefault();

  console.log(localStorage.getItem(FORM_KEY));
  e.target.reset();
  localStorage.removeItem(FORM_KEY);
}

function inputMemory(e) {
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value.trim();
  const objData = createObj(email, message);

  localStorage.setItem(FORM_KEY, JSON.stringify(objData));
}

function createObj(email, message) {
  return { email, message };
}

function setFromLocal() {
  const savedData = localStorage.getItem(FORM_KEY);
  if (savedData) {
    const parsed = JSON.parse(savedData);
    formEl.elements.email.value = parsed.email;
    formEl.elements.message.value = parsed.message;
  }
}
