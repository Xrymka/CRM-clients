import { createIcons } from './create-icons.js';
import { showFullContactsList } from './client-handlers.js';
import { modalModes, openModal } from './modals/create-modal.js'

const SHOWN_CONTACTS_ICONS = 4;
const MAX_CONTACTS_ICON_IN_THE_ROW = 5;

const contactTypes = {
  phone: 'Телефон',
  email: 'Email',
  facebook: 'Facebook',
  vk: 'Vk',
  another: 'Другое'
}

let tableBody = document.querySelector('.table__body');

// функция создания тела таблицы
function createTableBody(clientArray) {
  if (tableBody.children) [...tableBody.children].forEach(el => el.remove());
  clientArray.forEach(function(item) {createClientItem(item)});
}

// функция создания строки клиента
function createClientItem(clientObj) {
  let clientData = document.createElement('tr');
  let clientID = document.createElement('td');
  let clientName = document.createElement('td');
  let clientCreationDate = document.createElement('td');
  let clientCreationTime = document.createElement('span');
  let clientLastChanging = document.createElement('td');
  let clientLastChangingTime = document.createElement('span');
  let clientContacts = document.createElement('td');
  let clientActions = document.createElement('td');
  let editButton = createButton(createIcons.createEditIcon(), 'Изменить');
  let deleteButton = createButton(createIcons.createDeleteIcon(), 'Удалить');

  clientID.innerHTML = clientObj.id;
  clientName.innerHTML = `${clientObj.surname} ${clientObj.name} ${clientObj.lastName}`;
  clientCreationTime.innerHTML = `${clientObj.createdAt.getHours()}:${(clientObj.createdAt.getMinutes() < 10)? '0' + clientObj.createdAt.getMinutes() : clientObj.createdAt.getMinutes()}`;
  clientCreationDate.append(clientObj.createdAt.toLocaleDateString(), clientCreationTime);
  clientLastChangingTime.innerHTML = `${clientObj.updatedAt.getHours()}:${(clientObj.updatedAt.getMinutes() < 10)? '0' + clientObj.updatedAt.getMinutes() : clientObj.updatedAt.getMinutes()}`;
  clientLastChanging.append(clientObj.updatedAt.toLocaleDateString(), clientLastChangingTime);
  clientContacts.append(createContactsList(clientObj));

  clientCreationTime.classList.add('table__body-time');
  clientLastChangingTime.classList.add('table__body-time');
  clientID.classList.add('table__body-column', 'table__body-column--id');
  editButton.classList.add('table__body-button', 'table__body-button--edit');
  deleteButton.classList.add('table__body-button', 'table__body-button--delete');

  clientActions.append(editButton, deleteButton);
  clientData.append(clientID, clientName, clientCreationDate, clientLastChanging, clientContacts, clientActions);
  tableBody.appendChild(clientData);

  deleteButton.addEventListener('click', () => {
    openModal(modalModes.delete, clientObj.id);
    //createDeleteConfirmationModal(clientObj.id);
  });

  editButton.addEventListener('click', () => {
    openModal(modalModes.edit, clientObj.id);
    //editClientHandler(clientObj);
  });

  // showMoreButton.addEventListener('click', () => {
  //   showFullContactsList();
  // });
}

// функция создания кнопки
function createButton(icon, text) {
  let button = document.createElement('button');
  let buttonIcon = icon;
  button.classList.add('btn');
  button.append(buttonIcon, text);
  return button;
}

// функция создания списка котактов
function createContactsList(clientObj) {
  let contactsList = document.createElement('ul');
  let clientsContacts = clientObj.contacts;

  let contactNumber = 0;
  clientsContacts.forEach(function(item) {
    let contactsItem = createContactsIcon(item)
    contactsList.append(contactsItem);
    if (contactNumber < SHOWN_CONTACTS_ICONS) {
      contactsItem.classList.remove('contacts__item--hidden');
    } else if (contactNumber == SHOWN_CONTACTS_ICONS && clientsContacts.length > MAX_CONTACTS_ICON_IN_THE_ROW) {
      // создать иконку с цифрой

      // добавить ей обработчик события showFullContactsList()

    }
    contactNumber++;
  });



  /*let shownContacts = clientsContacts.slice(4);
  /*shownContacts.forEach(function(item) {
    item.classList.remove('contacts__item--hidden');
  });*/

  contactsList.classList.add('table__body-contacts', 'contacts__list');
  return contactsList;
}

// функция создания контакта
function createContactsIcon(item) {
  let contactsItem = document.createElement('li');
  contactsItem.classList.add('contacts__item', 'contacts__item--hidden');

  switch(item.type) {
    case contactTypes.phone:
      contactsItem.append(createIcons.createPhoneIcon());
      break;
    case contactTypes.email:
      contactsItem.append(createIcons.createEmailIcon());
      break;
    case contactTypes.facebook:
      contactsItem.append(createIcons.createFacebookIcon());
      break;
    case contactTypes.vk:
      contactsItem.append(createIcons.createVkIcon());
      break;
    case contactTypes.another:
      contactsItem.append(createIcons.createContactIcon());
      break;
    case contactTypes.more:
      contactsItem.append(createIcons.createContactIcon());
      break;
  }

  return contactsItem;
}

// функция создания тултипа

export { createTableBody }
