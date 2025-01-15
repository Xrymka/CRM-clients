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

  let options = [
    { id: 'option-phone', text: 'Телефон' },
    { id: 'option-email', text: 'Email' },
    { id: 'option-facebook', text: 'Facebook' },
    { id: 'option-vk', text: 'VK' },
    { id: 'option-other', text: 'Другое' }
  ];

  options.forEach(optionData => {
    let option = document.createElement('option');
    let newContact = document.createElement('li');
    option.textContent = optionData.text;
    newContact.textContent = optionData.text;
    option.id = optionData.id;
    newContact.idItem
    option.value = optionData.text;
    option.classList.add('modal__option');
    contactSelect.append(option);
  });

  contactInput.setAttribute('type', 'text');
  contactInput.setAttribute('placeholder', 'Введите данные контакта');
  contactInput.setAttribute('name', `contact-${contacts.length + 1}`);
  contactInput.setAttribute('id', `contact-input-${contacts.length + 1}`);

  contactDeleteBtn.setAttribute('type', 'button');
  contactSelectBtn.setAttribute('type', 'button');

  contactsSelectBtnText.textContent = 'Телефон';

  newContact1.textContent = 'Телефон';
  newContact2.textContent = 'Email';
  newContact3.textContent = 'Facebook';
  newContact4.textContent = 'VK';
  newContact5.textContent = 'Другое';

  contactWrapper.classList.add('modal__wrapper');
  contactInput.classList.add('modal__contact-input');
  contactDeleteBtn.classList.add('modal__contact-btn');
  contactSelectWrapper.classList.add('modal__select-wrapper');
  contactSelectBtn.classList.add('modal__select-btn');
  contactsSelectBtnText.classList.add('modal__select-text');
  contactList.classList.add('modal__list');
  newContact1.classList.add('modal__item');
  newContact2.classList.add('modal__item');
  newContact3.classList.add('modal__item');
  newContact4.classList.add('modal__item');
  newContact5.classList.add('modal__item');

  contactDeleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    contactWrapper.remove();
    contacts = contacts.filter((contact) => contact !== contactWrapper);

    if (contacts.length < 10) {
      addContactButton.style.display = '';
    }
  });

  contactSelectBtn.append(contactsSelectBtnText, createIcons.createArrowSelectIcon());
  contactList.append(newContact1, newContact2, newContact3, newContact4, newContact5)
  contactSelectWrapper.append(contactSelectBtn, contactList, contactSelect);
  contactWrapper.append(contactSelectWrapper, contactInput, contactDeleteBtn);
  fieldsetContacts.prepend(contactWrapper);

  return contactWrapper;
}



// export function addContact(fieldsetContacts, contacts, addContactButton) {
//   let contactWrapper = document.createElement('div');
//   let contactInput = document.createElement('input');
//   let contactDeleteBtn = createButton(createIcons.createDeleteIcon(), '');
//   let contactSelectWrapper = document.createElement('div');
//   let contactSelectBtn = document.createElement('button');
//   let contactsSelectBtnText = document.createElement('span');
//   let contactList = document.createElement('ul');
//   let contactSelect = document.createElement('select');

//   // Создание options
//   let options = [
//     { id: 'option-phone', text: 'Телефон' },
//     { id: 'option-email', text: 'Email' },
//     { id: 'option-facebook', text: 'Facebook' },
//     { id: 'option-vk', text: 'VK' },
//     { id: 'option-other', text: 'Другое' }
//   ];

//   options.forEach(optionData => {
//     let option = document.createElement('option');
//     option.textContent = optionData.text;
//     option.id = optionData.id; // Устанавливаем id для option
//     option.value = optionData.text; // Устанавливаем значение
//     option.classList.add('modal__option');
//     contactSelect.append(option);
//   });

//   // Настройка input
//   contactInput.setAttribute('type', 'text');
//   contactInput.setAttribute('placeholder', 'Введите данные контакта');
//   contactInput.setAttribute('name', `contact-${contacts.length + 1}`); // Уникальное имя
//   contactInput.setAttribute('id', `contact-input-${contacts.length + 1}`); // Уникальный id
//   contactInput.classList.add('modal__contact-input');

//   // Настройка кнопки удаления
//   contactDeleteBtn.setAttribute('type', 'button');
//   contactDeleteBtn.classList.add('modal__contact-btn');
//   contactDeleteBtn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     contactWrapper.remove();
//     contacts = contacts.filter((contact) => contact !== contactWrapper);

//     if (contacts.length < 10) {
//       addContactButton.style.display = '';
//     }
//   });

//   // Настройка кнопки выбора
//   contactSelectBtn.setAttribute('type', 'button');
//   contactsSelectBtnText.textContent = 'Телефон'; // Устанавливаем текст кнопки по умолчанию
//   contactSelectBtn.classList.add('modal__select-btn');
//   contactSelectBtn.append(contactsSelectBtnText, createIcons.createArrowSelectIcon());

//   // Сборка элементов
//   contactWrapper.classList.add('modal__wrapper');
//   contactSelectWrapper.classList.add('modal__select-wrapper');
//   contactSelect.classList.add('modal__select');
//   contactWrapper.append(contactSelectWrapper, contactInput, contactDeleteBtn);
//   contactSelectWrapper.append(contactSelectBtn, contactSelect);

//   fieldsetContacts.prepend(contactWrapper); // Добавляем в начало fieldset

//   return contactWrapper;
// }
