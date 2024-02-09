import { createClientOnServer, deleteClientOnServer, getData } from './api.js';
import { createTableBody } from './create-table-body.js';

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
