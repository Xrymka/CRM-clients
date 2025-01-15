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
  var contactDeleteBtnWrapper = document.createElement('div');
  var contactDeleteBtn = (0, _createTableBody.createButton)(_createIcons.createIcons.createDeleteIcon(), '');
  var tooltip = document.createElement('div');
  var contactSelectWrapper = document.createElement('div');
  var contactSelectBtn = document.createElement('button');
  var contactsSelectBtnText = document.createElement('span');
  var contactSelect = document.createElement('select');
  var contactList = document.createElement('ul'); // Данные для options

  var options = [{
    id: 'option-phone',
    idItem: 'item-phone',
    text: 'Телефон'
  }, {
    id: 'option-email',
    idItem: 'item-email',
    text: 'Email'
  }, {
    id: 'option-facebook',
    idItem: 'item-facebook',
    text: 'Facebook'
  }, {
    id: 'option-vk',
    idItem: 'item-vk',
    text: 'VK'
  }, {
    id: 'option-other',
    idItem: 'item-other',
    text: 'Другое'
  }];
  contactSelect.classList.add('visually-hidden'); // Генерация options и кастомных пунктов списка

  options.forEach(function (optionData) {
    var option = document.createElement('option');
    var newContact = document.createElement('li');
    option.textContent = optionData.text;
    option.id = optionData.id;
    option.value = optionData.text;
    option.classList.add('modal__option');
    newContact.textContent = optionData.text;
    newContact.id = optionData.idItem;
    newContact.classList.add('modal__item'); // Обработчик клика по кастомному пункту

    newContact.addEventListener('click', function () {
      // Устанавливаем значение в настоящий select
      contactSelect.value = optionData.text; // Обновляем текст кнопки

      contactsSelectBtnText.textContent = optionData.text; // Закрываем список

      contactList.classList.remove('is-open');
      contactList.style.display = 'none';
    });
    contactSelect.append(option); // Добавляем в настоящий select

    contactList.append(newContact); // Добавляем в кастомный список
  }); // Настройки input

  contactInput.setAttribute('type', 'text');
  contactInput.setAttribute('placeholder', 'Введите данные контакта');
  contactInput.setAttribute('name', "contact-".concat(contacts.length + 1));
  contactInput.setAttribute('id', "contact-input-".concat(contacts.length + 1)); // Настройки кнопки удаления

  contactDeleteBtn.setAttribute('type', 'button');
  tooltip.textContent = 'Удалить контакт'; // Настройки кнопки кастомного селекта

  contactsSelectBtnText.textContent = 'Телефон';
  contactSelectBtn.classList.add('modal__select-btn');
  contactSelectBtn.setAttribute('type', 'button'); // Настройки wrapper и стилей

  contactWrapper.classList.add('modal__inner');
  contactInput.classList.add('modal__contact-input');
  tooltip.classList.add('tooltip');
  contactDeleteBtnWrapper.classList.add('modal__contact-btn-wrapper');
  contactDeleteBtn.classList.add('modal__contact-btn');
  contactSelectWrapper.classList.add('modal__select-wrapper');
  contactsSelectBtnText.classList.add('modal__select-text');
  contactList.classList.add('modal__list');
  contactList.style.display = 'none'; // Обработчик клика на кнопку селекта

  contactSelectBtn.addEventListener('click', function () {
    contactList.classList.toggle('is-open');
    contactList.style.display = contactList.classList.contains('is-open') ? 'block' : 'none';
  }); // Обработчик удаления контакта

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
  contactSelectWrapper.append(contactSelectBtn, contactList, contactSelect);
  contactDeleteBtnWrapper.append(tooltip, contactDeleteBtn);
  contactWrapper.append(contactSelectWrapper, contactInput, contactDeleteBtnWrapper);
  fieldsetContacts.prepend(contactWrapper);
  return contactWrapper;
}