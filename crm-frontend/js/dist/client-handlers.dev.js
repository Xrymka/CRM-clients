"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteClientHandler = deleteClientHandler;
exports.editClientHandler = editClientHandler;
exports.createClientHandler = createClientHandler;
exports.showFullContactsList = showFullContactsList;

// import { clientsList } from "./main";
//import { deleteClientOnServer } from "./api";
// функция удаления клиента
function deleteClientHandler(id) {
  return regeneratorRuntime.async(function deleteClientHandler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  });
}

// функция изменения клиента
function editClientHandler(clientObj) {}
/*const indexToDelete = clientsList.findIndex((student) => student === clientObj);
 if (indexToDelete !== -1) {
  editStudentOnServer(clientObj.id);
   clientsList.splice(indexToDelete, 1);
   createTableBody(clientsList);
}*/
// функция создания клиента


function createClientHandler(clientObj) {} // функция отображения всех контактов


function showFullContactsList() {}