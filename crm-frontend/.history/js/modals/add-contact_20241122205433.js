import { createIcons } from '../create-icons.js';
import { createButton } from '../create-table-body.js';

export function addContact(fieldsetContacts, contacts, addContactButton) {
  let contactWrapper = document.createElement('div');
  let contactInput = document.createElement('input');
  let contactDeleteBtn = createButton(createIcons.createDeleteIcon(), '');
  let contactSelectWrapper = document.createElement('div');
  let contactSelectBtn = document.createElement('button');
  let contactsSelectBtnText = document.createElement('span');
  let contactSelect = document.createElement('select');
  let contactList = document.createElement('ul');

  let options = [
    { id: 'option-phone', idItem: 'item-phone', text: 'Телефон' },
    { id: 'option-email', idItem: 'item-email', text: 'Email' },
    { id: 'option-facebook', idItem: 'item-facebook', text: 'Facebook' },
    { id: 'option-vk', idItem: 'item-vk', text: 'VK' },
    { id: 'option-other', idItem: 'item-other', text: 'Другое' }
  ];

  options.forEach(optionData => {
    let option = document.createElement('option');
    let newContact = document.createElement('li');
    option.textContent = optionData.text;
    newContact.textContent = optionData.text;
    option.id = optionData.id;
    newContact.id = optionData.idItem;
    option.value = optionData.text;
    option.classList.add('modal__option');
    newContact.classList.add('modal__item');
    contactSelect.append(option);
    contactList.append(newContact);

    newContact.addEventListener('click', () => {
      contactSelect.value = 
    })
  });

  contactInput.setAttribute('type', 'text');
  contactInput.setAttribute('placeholder', 'Введите данные контакта');
  contactInput.setAttribute('name', `contact-${contacts.length + 1}`);
  contactInput.setAttribute('id', `contact-input-${contacts.length + 1}`);

  contactDeleteBtn.setAttribute('type', 'button');
  contactSelectBtn.setAttribute('type', 'button');

  contactsSelectBtnText.textContent = 'Телефон';

  contactWrapper.classList.add('modal__wrapper');
  contactInput.classList.add('modal__contact-input');
  contactDeleteBtn.classList.add('modal__contact-btn');
  contactSelectWrapper.classList.add('modal__select-wrapper');
  contactSelectBtn.classList.add('modal__select-btn');
  contactsSelectBtnText.classList.add('modal__select-text');
  contactList.classList.add('modal__list');

  contactDeleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    contactWrapper.remove();
    contacts = contacts.filter((contact) => contact !== contactWrapper);

    if (contacts.length < 10) {
      addContactButton.style.display = '';
    }
  });

  contactSelectBtn.append(contactsSelectBtnText, createIcons.createArrowSelectIcon());
  contactSelectWrapper.append(contactSelectBtn, contactList, contactSelect);
  contactWrapper.append(contactSelectWrapper, contactInput, contactDeleteBtn);
  fieldsetContacts.prepend(contactWrapper);

  return contactWrapper;
}


export function addContact(fieldsetContacts, contacts, addContactButton) {
  let contactWrapper = document.createElement('div');
  let contactInput = document.createElement('input');
  let contactDeleteBtn = createButton(createIcons.createDeleteIcon(), '');
  let contactSelectWrapper = document.createElement('div');
  let contactSelectBtn = document.createElement('button');
  let contactsSelectBtnText = document.createElement('span');
  let contactSelect = document.createElement('select');
  let contactList = document.createElement('ul');

  // Данные для options
  let options = [
    { id: 'option-phone', idItem: 'item-phone', text: 'Телефон' },
    { id: 'option-email', idItem: 'item-email', text: 'Email' },
    { id: 'option-facebook', idItem: 'item-facebook', text: 'Facebook' },
    { id: 'option-vk', idItem: 'item-vk', text: 'VK' },
    { id: 'option-other', idItem: 'item-other', text: 'Другое' }
  ];

  // Генерация options и кастомных пунктов списка
  options.forEach(optionData => {
    let option = document.createElement('option');
    let newContact = document.createElement('li');
    option.textContent = optionData.text;
    option.id = optionData.id;
    option.value = optionData.text;
    option.classList.add('modal__option');

    newContact.textContent = optionData.text;
    newContact.id = optionData.idItem;
    newContact.classList.add('modal__item');

    // Обработчик клика по кастомному пункту
    newContact.addEventListener('click', () => {
      // Устанавливаем значение в настоящий select
      contactSelect.value = optionData.text;
      // Обновляем текст кнопки
      contactsSelectBtnText.textContent = optionData.text;
      // Закрываем список
      contactList.classList.remove('is-open');
    });

    contactSelect.append(option); // Добавляем в настоящий select
    contactList.append(newContact); // Добавляем в кастомный список
  });

  // Настройки input
  contactInput.setAttribute('type', 'text');
  contactInput.setAttribute('placeholder', 'Введите данные контакта');
  contactInput.setAttribute('name', `contact-${contacts.length + 1}`);
  contactInput.setAttribute('id', `contact-input-${contacts.length + 1}`);

  // Настройки кнопки удаления
  contactDeleteBtn.setAttribute('type', 'button');

  // Настройки кнопки кастомного селекта
  contactsSelectBtnText.textContent = 'Телефон'; // Значение по умолчанию
  contactSelectBtn.classList.add('modal__select-btn');
  contactSelectBtn.setAttribute('type', 'button');

  // Настройки wrapper и стилей
  contactWrapper.classList.add('modal__wrapper');
  contactInput.classList.add('modal__contact-input');
  contactDeleteBtn.classList.add('modal__contact-btn');
  contactSelectWrapper.classList.add('modal__select-wrapper');
  contactsSelectBtnText.classList.add('modal__select-text');
  contactList.classList.add('modal__list');
  contactList.style.display = 'none'; // Скрываем список по умолчанию

  // Обработчик клика на кнопку селекта
  contactSelectBtn.addEventListener('click', () => {
    contactList.classList.toggle('is-open');
    contactList.style.display = contactList.classList.contains('is-open') ? 'block' : 'none';
  });

  // Обработчик удаления контакта
  contactDeleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    contactWrapper.remove();
    contacts = contacts.filter((contact) => contact !== contactWrapper);

    if (contacts.length < 10) {
      addContactButton.style.display = '';
    }
  });

  // Сборка элементов
  contactSelectBtn.append(contactsSelectBtnText, createIcons.createArrowSelectIcon());
  contactSelectWrapper.append(contactSelectBtn, contactList, contactSelect); // Добавляем кастомный и настоящий select
  contactWrapper.append(contactSelectWrapper, contactInput, contactDeleteBtn);
  fieldsetContacts.prepend(contactWrapper);

  return contactWrapper;
}
