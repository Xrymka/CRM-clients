"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewClientModal = createNewClientModal;

var _createIcons = require("../create-icons.js");

var _createTableBody = require("../create-table-body.js");

var _api = require("../api.js");

var _main = require("../main.js");

var _addContact = require("./add-contact.js");

// функция создания модального окна (добавление клиента)
function createNewClientModal(id, modalContent) {
  var title = document.createElement('h2');
  var form = document.createElement('form');
  var fieldsetInfo = document.createElement('fieldset');
  var divLastName = document.createElement('div');
  var labelLastName = document.createElement('label');
  var inputLastName = document.createElement('input');
  var divName = document.createElement('div');
  var labelName = document.createElement('label');
  var inputName = document.createElement('input');
  var divPatronymic = document.createElement('div');
  var labelPatronymic = document.createElement('label');
  var inputPatronymic = document.createElement('input');
  var fieldsetContacts = document.createElement('fieldset');
  var addContactButton = document.createElement('button');
  var createButton = document.createElement('button');
  var cancelButton = document.createElement('button');
  var closeButton = document.createElement('button');

  var addContactIcon = _createIcons.createIcons.createSvgIcon();

  var closeIcon = _createIcons.createIcons.createCrossIcon();

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
  var contacts = [];
  addContactButton.addEventListener('click', function () {
    if (contacts.length < 10) {
      contacts.push((0, _addContact.addContact)(fieldsetContacts, contacts, addContactButton));
    }

    ;

    if (contacts.length >= 10) {
      addContactButton.style.display = 'none';
    }
  });
  form.addEventListener('submit', function _callee(e) {
    var contactsForServer, newClientObject, createdClient;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            contactsForServer = [];
            contacts.forEach(function (contact) {
              var contactObject = {
                type: contact.querySelector('.modal__select-text').textContent,
                value: contact.querySelector('.modal__contact-input').value
              };
              contactsForServer.push(contactObject);
            });
            newClientObject = {
              name: inputName.value,
              surname: inputLastName.value,
              lastName: inputPatronymic.value,
              contacts: contactsForServer
            };
            _context.prev = 4;
            _context.next = 7;
            return regeneratorRuntime.awrap((0, _api.createClientOnServer)(newClientObject));

          case 7:
            createdClient = _context.sent;

            if (createdClient) {
              _main.clientsList.push(createdClient);

              (0, _createTableBody.createClientItem)(createdClient);
              document.querySelector('.modal').classList.remove('is-active');
            }

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            throw _context.t0;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 11]]);
  });
  cancelButton.addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('is-active');
  });
  closeButton.addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('is-active');
  });
  fieldsetInfo.append(divLastName, divName, divPatronymic);
  fieldsetContacts.append(addContactButton);
  form.append(fieldsetInfo, fieldsetContacts, createButton, cancelButton);
  modalContent.append(title, closeButton, form, cancelButton);
}