// функция удаления клиента
function deleteClientHandler(clientObj) {
  const indexToDelete = clientsCopyList.findIndex((student) => student === clientObj);

  if (indexToDelete !== -1) {
    deleteStudentOnServer(clientObj.id);

    clientsCopyList.splice(indexToDelete, 1);

    createTableBody(clientsCopyList);
  }
}

// функция изменения клиента
function editClientHandler(clientObj) {
  const indexToDelete = clientsCopyList.findIndex((student) => student === clientObj);

  if (indexToDelete !== -1) {
    deleteStudentOnServer(clientObj.id);

    clientsCopyList.splice(indexToDelete, 1);

    createTableBody(clientsCopyList);
  }
}

// функция отображения всех контактов
function showFullContactsList() {

}

export { deleteClientHandler, editClientHandler, showFullContactsList }
