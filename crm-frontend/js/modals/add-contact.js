import { createIcons } from '../create-icons.js';
import { createButton } from '../create-table-body.js';

export function addContact(fieldsetContacts, contacts, addContactButton) {
  let contactWrapper = document.createElement('div');
  let contactInput = document.createElement('input');
  let contactDeleteBtnWrapper = document.createElement('div');
  let contactDeleteBtn = createButton(createIcons.createDeleteIcon(), '');
  let tooltip = document.createElement('div');
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

  contactSelect.classList.add('visually-hidden');

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
      contactList.style.display = 'none';
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
  tooltip.textContent = 'Удалить контакт';

  // Настройки кнопки кастомного селекта
  contactsSelectBtnText.textContent = 'Телефон';
  contactSelectBtn.classList.add('modal__select-btn');
  contactSelectBtn.setAttribute('type', 'button');

  // Настройки wrapper и стилей
  contactWrapper.classList.add('modal__inner');
  contactInput.classList.add('modal__contact-input');
  tooltip.classList.add('tooltip');
  contactDeleteBtnWrapper.classList.add('modal__contact-btn-wrapper');
  contactDeleteBtn.classList.add('modal__contact-btn');
  contactSelectWrapper.classList.add('modal__select-wrapper');
  contactsSelectBtnText.classList.add('modal__select-text');
  contactList.classList.add('modal__list');
  contactList.style.display = 'none';

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

  contactSelectBtn.append(contactsSelectBtnText, createIcons.createArrowSelectIcon());
  contactSelectWrapper.append(contactSelectBtn, contactList, contactSelect);
  contactDeleteBtnWrapper.append(tooltip, contactDeleteBtn);
  contactWrapper.append(contactSelectWrapper, contactInput, contactDeleteBtnWrapper);
  fieldsetContacts.prepend(contactWrapper);

  return contactWrapper;
}
