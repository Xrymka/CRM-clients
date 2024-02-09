const SERVER_DATA = 'http://localhost:3000/api/clients';

async function createClientOnServer(client) {
  fetch(SERVER_DATA, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify(client)
  });
}

const getData = (onSuccess, onError) => {
  fetch(SERVER_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

async function deleteClientOnServer(id) {
  await fetch(SERVER_DATA+id, {
    method: 'DELETE'
  });
}

export { createClientOnServer, deleteClientOnServer, getData }


/*
* `GET /api/clients` получить список клиентов. Параметры, передаваемые в URL:
    * `search={search string}` поисковый запрос, при передаче метод вернёт клиентов, у которых имя, фамилия, отчество или значение одного из контактов содержат указанную подстроку
* `POST /api/clients` создать нового клиента. В теле запроса нужно передать объект клиента. Тело ответа успешно обработанного запроса будет содержать объект с созданным клиентом.
* `GET /api/client/{id}` получить данные клиента по его ID. Тело ответа успешно обработанного запроса будет содержать объект клиента.
* `PATCH /api/client/{id}` перезаписать данные о клиенте с переданным ID. Тело ответа успешно обработанного запроса будет содержать объект с обновлённым клиентом.
* `DELETE /api/client/{id}` удалить клиента с переданному ID.
*/
