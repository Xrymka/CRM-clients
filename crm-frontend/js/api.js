const URL_DATA = 'http://localhost:3000/api/clients';

async function createClientOnServer(client) {
  try {
    const response = await fetch(URL_DATA, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
    const createdClient = await response.json();

    return createdClient;

  } catch (error) {
    throw error;
  }
}

const getData = (onSuccess, onError) => {
  fetch(URL_DATA)
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

// Функция созданная вместе с чатом GPT для поиска клиента в базе,
//пока не работает :(
const getSearchData = (searchString, onSuccess, onError) => {
  const URL_DATA = `http://localhost:3000/api/clients?search=` + searchString;

  fetch(URL_DATA)
    .then((response) => {
      if (response.ok) {
        console.log(response);
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
  await fetch(URL_DATA + "/" + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/JSON'
    }
  });
}

async function editClientOnServer(id, client) {
  await fetch(URL_DATA + "/" + id, {
    method: 'PATCH',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify(client)
  });
}

export { createClientOnServer, deleteClientOnServer, editClientOnServer, getSearchData, getData }


/*
* `GET /api/clients` получить список клиентов. Параметры, передаваемые в URL:
    * `search={search string}` поисковый запрос, при передаче метод вернёт клиентов, у которых имя, фамилия, отчество или значение одного из контактов содержат указанную подстроку
* `POST /api/clients` создать нового клиента. В теле запроса нужно передать объект клиента. Тело ответа успешно обработанного запроса будет содержать объект с созданным клиентом.
* `GET /api/client/{id}` получить данные клиента по его ID. Тело ответа успешно обработанного запроса будет содержать объект клиента.
* `PATCH /api/client/{id}` перезаписать данные о клиенте с переданным ID. Тело ответа успешно обработанного запроса будет содержать объект с обновлённым клиентом.
* `DELETE /api/client/{id}` удалить клиента с переданному ID.
*/
