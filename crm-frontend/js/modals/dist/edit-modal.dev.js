"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEditClientModal = createEditClientModal;

var _api = require("../api.js");

var _createIcons = require("../create-icons.js");

// функция создания модального окна (редактирование клиента)
function createEditClientModal(id, modalContent) {
  var title = document.createElement('h2');
  var message = document.createElement('p');
  var saveButton = document.createElement('button');
  var deleteButton = document.createElement('button');
  var closeButton = document.createElement('button');

  var closeIcon = _createIcons.createIcons.createCrossIcon();

  title.classList.add('modal__title');
  message.classList.add('modal__message');
  saveButton.classList.add('modal__btn', 'btn');
  deleteButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');
  closeButton.append(closeIcon);
  title.innerHTML = 'Изменить студента';
  message.innerHTML = '???';
  saveButton.innerHTML = 'Сохранить';
  deleteButton.innerHTML = 'Удалить клиента';
  saveButton.addEventListener('click', function () {
    var newClientObject = {
      name: inputName.value,
      surname: inputLastName.value,
      lastName: inputPatronymic.value,
      contacts: []
    };
    (0, _api.editClientOnServer)(id, newClientObject);
    document.querySelector('.modal').classList.remove('is-active');
  });
  deleteButton.addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('is-active');
  });
  closeButton.addEventListener('click', function () {
    modal.classList.remove('is-active');
  });
  modalContent.append(title, message, saveButton, deleteButton, closeButton);
}