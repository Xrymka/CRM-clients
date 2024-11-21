import { createClientOnServer, deleteClientOnServer, getSearchData, getData } from './api.js';
import { createTableBody } from './create-table-body.js';
import { modalModes, openModal } from './modals/create-modal.js';

const createClientButton = document.querySelector('.main__btn');

// Рабочий код для создания нового клиента
createClientButton.addEventListener('click', () => {
  openModal(modalModes.create, null);
});

// Код для тестирования поиска клиента в базе
// работает!
/*let clientsSearchList = [];

createClientButton.addEventListener('click', () => {

  getSearchData('Пупкин2',
    (objects) => {
      clientsSearchList = [...objects];
      // здесь нужна фукнция которая будет показывать найденных клиентов выпадающим списком ниже строки поиска (только их ФИО)

    },
    (message) => {
      // createGetError(message);
    }
  );
});*/
//конец тестового кода

let clientsList = [];

getData(
  (objects) => {
    clientsList = [...objects];
    createTableBody(clientsList);
  },
  (message) => {
    // createGetError(message);
  }
);

export { clientsList };
