// import { clientsList } from "./main";
//import { deleteClientOnServer } from "./api";

// функция удаления клиента
async function deleteClientHandler(id) {
  /*const indexToDelete = clientsList.findIndex((client) => client.id === clientObj.id);

  if (indexToDelete !== -1) {
    await deleteClientOnServer(clientObj.id);

    clientsList.splice(indexToDelete, 1);

    createTableBody(clientsList);
  }*/
}

// функция изменения клиента
function editClientHandler(clientObj) {
  /*const indexToDelete = clientsList.findIndex((student) => student === clientObj);

  if (indexToDelete !== -1) {
    editStudentOnServer(clientObj.id);

    clientsList.splice(indexToDelete, 1);

    createTableBody(clientsList);
  }*/
}

// функция создания клиента
function createClientHandler(clientObj) {
}

// функция отображения всех контактов
function showFullContactsList() {

}

export { deleteClientHandler, editClientHandler, createClientHandler, showFullContactsList }
