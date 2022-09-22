import throttle from 'lodash.throttle';

const refs = {
  onFormRef: document.querySelector('.feedback-form'),
  onInputEmailRef: document.querySelector('[name="email"]'),
  onInputMessageRef: document.querySelector('[name="message"]'),
  onSubmitBtnRef: document.querySelector('[type="submit"]'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.onFormRef.addEventListener('input', throttle(onForm, 500));
refs.onFormRef.addEventListener('submit', onSubmit);

localStorageSetting();

function onSubmit(evt) {
  evt.preventDefault();
  const currentValue = localStorage.getItem(STORAGE_KEY);
  const parseValue = JSON.parse(currentValue);
  if (refs.onInputEmailRef.value === '') {
    alert('Потрібно заповнити поле "Email"');
  } else {
    console.log(parseValue);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onForm(evt) {
  const email = refs.onInputEmailRef.value;
  const messageValue = refs.onInputMessageRef.value;
  const message = messageValue.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function localStorageSetting() {
  const currentValue = localStorage.getItem(STORAGE_KEY);
  const parseValue = JSON.parse(currentValue);

  if (currentValue) {
    refs.onInputEmailRef.value = parseValue.email;
    refs.onInputMessageRef.value = parseValue.message;
  }
}
