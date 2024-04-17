import { createClientOnServer, deleteClientOnServer, getData } from './api.js';
import { createTableBody } from './create-table-body.js';
import { modalModes, openModal } from './modals/create-modal.js';

const createClientButton = document.querySelector('.main__btn');

createClientButton.addEventListener('click', () => {
  openModal(modalModes.create, null);
});

let clientsList = [];

getData(
  (objects) => {
    clientsList = [...objects];

    updateSourceData(objects)

    createTableBody(clientsList);
  },
  (message) => {
    // createGetError(message);
  }
);

function updateSourceData(objects) {
  for (let i = 0; i < clientsList.length; i++) {
    clientsList[i].createdAt = new Date(objects[i].createdAt)
    clientsList[i].updatedAt = new Date(objects[i].updatedAt);
  }
}

export { clientsList };
