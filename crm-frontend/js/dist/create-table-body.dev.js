"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = createButton;
exports.createTableBody = createTableBody;
exports.createClientItem = createClientItem;

var _createIcons = require("./create-icons.js");

var _clientHandlers = require("./client-handlers.js");

var _createModal = require("./modals/create-modal.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var SHOWN_CONTACTS_ICONS = 4;
var MAX_CONTACTS_ICON_IN_THE_ROW = 5;
var contactTypes = {
  phone: 'Телефон',
  email: 'Email',
  facebook: 'Facebook',
  vk: 'Vk',
  another: 'Другое'
};
var tableBody = document.querySelector('.table__body'); // функция создания тела таблицы

function createTableBody(clientArray) {
  if (tableBody.children) _toConsumableArray(tableBody.children).forEach(function (el) {
    return el.remove();
  });
  clientArray.forEach(function (item) {
    createClientItem(item);
  });
} // функция создания строки клиента


function createClientItem(clientObj) {
  var clientData = document.createElement('tr');
  var clientID = document.createElement('td');
  var clientName = document.createElement('td');
  var clientCreationDate = document.createElement('td');
  var clientCreationTime = document.createElement('span');
  var clientLastChanging = document.createElement('td');
  var clientLastChangingTime = document.createElement('span');
  var clientContacts = document.createElement('td');
  var clientActions = document.createElement('td');
  var editButton = createButton(_createIcons.createIcons.createEditIcon(), 'Изменить');
  var deleteButton = createButton(_createIcons.createIcons.createDeleteIcon(), 'Удалить');
  var createdAtDate = new Date(clientObj.createdAt);
  var updatedAtDate = new Date(clientObj.updatedAt);
  clientID.innerHTML = clientObj.id;
  clientName.innerHTML = "".concat(clientObj.surname, " ").concat(clientObj.name, " ").concat(clientObj.lastName);
  clientCreationTime.innerHTML = "".concat(createdAtDate.getHours(), ":").concat(createdAtDate.getMinutes() < 10 ? '0' + createdAtDate.getMinutes() : createdAtDate.getMinutes());
  clientCreationDate.append(createdAtDate.toLocaleDateString(), clientCreationTime);
  clientLastChangingTime.innerHTML = "".concat(updatedAtDate.getHours(), ":").concat(updatedAtDate.getMinutes() < 10 ? '0' + updatedAtDate.getMinutes() : updatedAtDate.getMinutes());
  clientLastChanging.append(updatedAtDate.toLocaleDateString(), clientLastChangingTime);
  clientContacts.append(createContactsList(clientObj));
  clientCreationTime.classList.add('table__body-time');
  clientLastChangingTime.classList.add('table__body-time');
  clientID.classList.add('table__body-column', 'table__body-column--id');
  editButton.classList.add('table__body-button', 'table__body-button--edit');
  deleteButton.classList.add('table__body-button', 'table__body-button--delete');
  clientActions.append(editButton, deleteButton);
  clientData.append(clientID, clientName, clientCreationDate, clientLastChanging, clientContacts, clientActions);
  tableBody.appendChild(clientData);
  deleteButton.addEventListener('click', function () {
    (0, _createModal.openModal)(_createModal.modalModes["delete"], clientObj.id);
  });
  editButton.addEventListener('click', function () {
    (0, _createModal.openModal)(_createModal.modalModes.edit, clientObj.id); //editClientHandler(clientObj);
  }); // showMoreButton.addEventListener('click', () => {
  //   showFullContactsList();
  // });
} // функция создания кнопки


function createButton(icon, text) {
  var button = document.createElement('button');
  var buttonIcon = icon;
  button.classList.add('btn');
  button.append(buttonIcon, text);
  return button;
} // функция создания списка котактов


function createContactsList(clientObj) {
  var contactsList = document.createElement('ul');
  var clientsContacts = clientObj.contacts;
  var contactNumber = 0;
  clientsContacts.forEach(function (item) {
    var contactsItem = createContactsIcon(item);
    contactsList.append(contactsItem);

    if (contactNumber < SHOWN_CONTACTS_ICONS) {
      contactsItem.classList.remove('contacts__item--hidden');
    } else if (contactNumber == SHOWN_CONTACTS_ICONS && clientsContacts.length > MAX_CONTACTS_ICON_IN_THE_ROW) {// создать иконку с цифрой
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
} // функция создания контакта


function createContactsIcon(item) {
  var contactsItem = document.createElement('li');
  var tooltip = document.createElement('div');
  var tooltipLink = document.createElement('a');
  var tooltipType = document.createElement('span');
  contactsItem.classList.add('contacts__item', 'contacts__item--hidden');
  tooltip.classList.add('tooltip');
  tooltipLink.classList.add('tooltip__link');
  tooltipType.classList.add('tooltip__type');
  contactsItem.append(tooltip);
  tooltipLink.href = item.value;
  tooltipLink.target = '_blank';
  tooltipLink.innerHTML = item.value;
  tooltipType.innerHTML = item.type + ':&nbsp;';
  tooltip.append(tooltipType, tooltipLink);

  switch (item.type) {
    case contactTypes.phone:
      contactsItem.append(_createIcons.createIcons.createPhoneIcon());
      tooltipLink.href = "tel:".concat(item.value);
      break;

    case contactTypes.email:
      contactsItem.append(_createIcons.createIcons.createEmailIcon());
      tooltipLink.href = "mailto:".concat(item.value);
      break;

    case contactTypes.facebook:
      contactsItem.append(_createIcons.createIcons.createFacebookIcon());
      break;

    case contactTypes.vk:
      contactsItem.append(_createIcons.createIcons.createVkIcon());
      break;

    case contactTypes.another:
      contactsItem.append(_createIcons.createIcons.createContactIcon());
      break;

    case contactTypes.more:
      contactsItem.append(_createIcons.createIcons.createContactIcon());
      break;
  }

  return contactsItem;
}