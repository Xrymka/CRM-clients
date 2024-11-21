import { createIcons } from '../create-icons.js';
import { createClientItem } from '../create-table-body.js';
import { createClientOnServer, getData } from '../api.js';
import { clientsList } from '../main.js';
import { addContact } from './add-contact.js';

// функция создания модального окна (добавление клиента)
export function createNewClientModal(id, modalContent) {
  let title = document.createElement('h2');
  let form = document.createElement('form');
  let fieldsetInfo = document.createElement('fieldset');
  let divLastName = document.createElement('div');
  let labelLastName = document.createElement('label');
  let inputLastName = document.createElement('input');
  let divName = document.createElement('div');
  let labelName = document.createElement('label');
  let inputName = document.createElement('input');
  let divPatronymic = document.createElement('div');
  let labelPatronymic = document.createElement('label');
  let inputPatronymic = document.createElement('input');
  let fieldsetContacts = document.createElement('fieldset');
  let addContactButton = document.createElement('button');
  let createButton = document.createElement('button');
  let cancelButton = document.createElement('button');
  let closeButton = document.createElement('button');
  let addContactIcon = createIcons.createSvgIcon();
  let closeIcon = createIcons.createCrossIcon();

  modalContent.innerHTML = '';

  inputLastName.setAttribute('type', 'text');
  inputLastName.setAttribute('required', 'true');
  inputLastName.setAttribute('placeholder', '');
  inputLastName.setAttribute('name', 'lastName');
  inputLastName.setAttribute('id', 'lastName');

  inputName.setAttribute('type', 'text');
  inputName.setAttribute('required', 'true');
  inputName.setAttribute('placeholder', '');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('id', 'name');

  inputPatronymic.setAttribute('type', 'text');
  inputPatronymic.setAttribute('placeholder', '');
  inputPatronymic.setAttribute('name', 'surname');
  inputPatronymic.setAttribute('id', 'surname');

  addContactButton.setAttribute('type', 'button');
  createButton.setAttribute('type', 'submit');
  cancelButton.setAttribute('type', 'reset');
  closeButton.setAttribute('type', 'reset');

  title.classList.add('modal__title');
  form.classList.add('modal__form');
  fieldsetInfo.classList.add('modal__fieldset');
  fieldsetContacts.classList.add('modal__fieldset', 'modal__fieldset--contacts');
  divLastName.classList.add('modal__container', 'modal__container--required');
  divName.classList.add('modal__container', 'modal__container--required');
  divPatronymic.classList.add('modal__container');
  labelLastName.classList.add('modal__label');
  labelName.classList.add('modal__label');
  labelPatronymic.classList.add('modal__label');
  inputLastName.classList.add('modal__input');
  inputName.classList.add('modal__input');
  inputPatronymic.classList.add('modal__input');
  addContactButton.classList.add('modal__contacts-btn', 'btn');
  createButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');

  labelLastName.textContent = 'Фамилия';
  labelName.textContent = 'Имя';
  labelPatronymic.textContent = 'Отчество';

  divLastName.append(inputLastName, labelLastName);
  divName.append(inputName, labelName);
  divPatronymic.append(inputPatronymic, labelPatronymic);
  addContactButton.append(addContactIcon, 'Добавить контакт');
  closeButton.append(closeIcon);
  title.textContent = 'Новый клиент';
  createButton.textContent = 'Сохранить';
  cancelButton.textContent = 'Отмена';

  let contacts = [];

  addContactButton.addEventListener('click', () => {
    if (contacts.length < 10) {
      contacts.push(addContact(fieldsetContacts, contacts, addContactButton));
    };
    if (contacts.length >= 10) {
      addContactButton.style.display = 'none';
    }
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let contactsForServer = []
    contacts.forEach((contact) => {
      const contactObject = {
        type: contact.querySelector('.modal__select-text').textContent,
        value: contact.querySelector('.modal__contact-input').value,
      };
      contactsForServer.push(contactObject);
    })

    let newClientObject = {
      name: inputName.value,
      surname: inputLastName.value,
      lastName: inputPatronymic.value,
      contacts: contactsForServer,
    };

    try {
      const createdClient = await createClientOnServer(newClientObject);
      if (createdClient) {
        clientsList.push(createdClient);
        createClientItem(createdClient);
        document.querySelector('.modal').classList.remove('is-active');
      }
    } catch (error) {
      throw error;
    }
  });

  cancelButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  closeButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  fieldsetInfo.append(divLastName, divName, divPatronymic);
  fieldsetContacts.append(addContactButton);
  form.append(fieldsetInfo, fieldsetContacts, createButton, cancelButton);

  modalContent.append(title, closeButton, form, cancelButton);
}
