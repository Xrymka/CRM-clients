"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addContact = addContact;

var _createIcons = require("../create-icons.js");

var _createTableBody = require("../create-table-body.js");

function addContact(fieldsetContacts, contacts, addContactButton) {
  var contactWrapper = document.createElement('div');
  var contactInput = document.createElement('input');
  var contactDeleteBtn = (0, _createTableBody.createButton)(_createIcons.createIcons.createDeleteIcon(), '');
  var contactSelectWrapper = document.createElement('div');
  var contactSelectBtn = document.createElement('button');
  var contactsSelectBtnText = document.createElement('span');
  var contactList = document.createElement('ul');
  var newContact1 = document.createElement('li');
  var newContact2 = document.createElement('li');
  var newContact3 = document.createElement('li');
  var newContact4 = document.createElement('li');
  var newContact5 = document.createElement('li');
  var contactSelect = document.createElement('select');
  var contactOption1 = document.createElement('option');
  var contactOption2 = document.createElement('option');
  var contactOption3 = document.createElement('option');
  var contactOption4 = document.createElement('option');
  var contactOption5 = document.createElement('option');
  contactInput.setAttribute('type', 'text');
  contactInput.setAttribute('placeholder', 'Введите данные контакта');
  contactInput.setAttribute('name', 'contactData');
  contactInput.setAttribute('id', 'contactData');
  contactDeleteBtn.setAttribute('type', 'button');
  contactSelectBtn.setAttribute('type', 'button');
  contactsSelectBtnText.textContent = 'Телефон';
  contactOption1.textContent = 'Телефон';
  contactOption2.textContent = 'Email';
  contactOption3.textContent = 'Facebook';
  contactOption4.textContent = 'VK';
  contactOption5.textContent = 'Другое';
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
  contactSelect.classList.add('modal__select');
  contactOption1.classList.add('modal__option');
  contactOption2.classList.add('modal__option');
  contactOption3.classList.add('modal__option');
  contactOption4.classList.add('modal__option');
  contactOption5.classList.add('modal__option');
  contactDeleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    contactWrapper.remove();
    contacts = contacts.filter(function (contact) {
      return contact !== contactWrapper;
    });

    if (contacts.length < 10) {
      addContactButton.style.display = '';
    }
  });
  contactSelectBtn.append(contactsSelectBtnText, _createIcons.createIcons.createArrowSelectIcon());
  contactSelect.append(contactOption1, contactOption2, contactOption3, contactOption4, contactOption5);
  contactList.append(newContact1, newContact2, newContact3, newContact4, newContact5);
  contactSelectWrapper.append(contactSelectBtn, contactList, contactSelect);
  contactWrapper.append(contactSelectWrapper, contactInput, contactDeleteBtn);
  fieldsetContacts.prepend(contactWrapper);
  return contactWrapper;
}