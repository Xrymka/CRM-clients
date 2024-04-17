import { createIcons } from '../create-icons.js';

// функция создания модального окна (добавление клиента)
export function createNewClientModal(id, modalContent) {
  let title = document.createElement('h2');
  let form = document.createElement('form');
  let fieldsetInfo = document.createElement('fieldset');
  let labelLastName = document.createElement('label');
  let inputLastName = document.createElement('input');
  let labelName = document.createElement('label');
  let inputName = document.createElement('input');
  let labelPatronymic = document.createElement('label');
  let inputPatronymic = document.createElement('input');
  let fieldsetContacts = document.createElement('fieldset');
  let addContactButton = document.createElement('button');
  let createButton = document.createElement('button');
  let cancelButton = document.createElement('button');
  let closeButton = document.createElement('button');
  let closeIcon = createIcons.createCrossIcon();

  //#region 123
  inputLastName.setAttribute('type', 'text');
  inputLastName.setAttribute('placeholder', 'Фамилия');
  inputLastName.setAttribute('required', 'true');
  //#endregion

  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Имя');
  inputName.setAttribute('required', 'true');

  inputPatronymic.setAttribute('type', 'text');
  inputPatronymic.setAttribute('placeholder', 'Отчество');

  createButton.setAttribute('type', 'submit');
  cancelButton.setAttribute('type', 'reset');
  closeButton.setAttribute('type', 'reset');

  title.classList.add('modal__title');
  labelLastName.classList.add('required-input');
  labelName.classList.add('required-input');
  createButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');

  labelLastName.append(inputLastName);
  labelName.append(inputName);
  labelPatronymic.append(inputPatronymic);
  closeButton.append(closeIcon);
  title.innerHTML = 'Новый клиент';
  addContactButton.innerHTML = 'Добавить контакт';
  createButton.innerHTML = 'Сохранить';
  cancelButton.innerHTML = 'Отмена';

  cancelButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  closeButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  fieldsetInfo.append(labelLastName, labelName, labelPatronymic);
  fieldsetContacts.append(addContactButton);
  form.append(fieldsetInfo, fieldsetContacts, createButton, cancelButton);

  modalContent.append(title, closeButton, form, cancelButton);
}
