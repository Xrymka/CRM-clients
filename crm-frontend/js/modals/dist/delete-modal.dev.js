"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeleteConfirmationModal = createDeleteConfirmationModal;

var _createIcons = require("../create-icons.js");

var _api = require("../api.js");

var _clientHandlers = require("../client-handlers.js");

var _createTableBody = require("../create-table-body.js");

var _main = require("../main.js");

// функция создания контента модального окна (удаление клиента)
function createDeleteConfirmationModal(id, modalContent) {
  var modal = document.querySelector('.modal');
  var title = document.createElement('h2');
  var message = document.createElement('p');
  var deleteButton = document.createElement('button');
  var cancelButton = document.createElement('button');
  var closeButton = document.createElement('button');

  var closeIcon = _createIcons.createIcons.createCrossIcon();

  modalContent.innerHTML = '';
  title.classList.add('modal__title', 'modal__title--delete');
  message.classList.add('modal__message');
  deleteButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');
  closeButton.append(closeIcon);
  title.innerHTML = 'Удалить клиента';
  message.innerHTML = 'Вы&nbsp;действительно хотите удалить данного клиента?';
  deleteButton.innerHTML = 'Удалить';
  cancelButton.innerHTML = 'Отмена'; // вынести всё в хандлер

  deleteButton.addEventListener('click', function _callee(event) {
    var deletedClient;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            deletedClient = _main.clientsList.findIndex(function (client) {
              return client.id === id;
            });

            if (!deletedClient) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return regeneratorRuntime.awrap((0, _api.deleteClientOnServer)(id));

          case 5:
            _main.clientsList.splice(deletedClient, 1);

            console.log(_main.clientsList);
            (0, _createTableBody.createTableBody)(_main.clientsList);
            modal.classList.remove('is-active');

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  });
  cancelButton.addEventListener('click', function () {
    modal.classList.remove('is-active');
  });
  closeButton.addEventListener('click', function () {
    modal.classList.remove('is-active');
  });
  modalContent.append(title, message, deleteButton, cancelButton, closeButton);
}