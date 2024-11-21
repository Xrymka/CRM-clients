import { createIcons } from '../create-icons.js';
import { deleteClientOnServer } from '../api.js';
import { deleteClientHandler } from '../client-handlers.js';
import { createTableBody } from '../create-table-body.js';
import { clientsList } from '../main.js';

// функция создания контента модального окна (удаление клиента)
export function createDeleteConfirmationModal(id, modalContent) {
  let modal = document.querySelector('.modal');
  let title = document.createElement('h2');
  let message = document.createElement('p');
  let deleteButton = document.createElement('button');
  let cancelButton = document.createElement('button');
  let closeButton = document.createElement('button');
  let closeIcon = createIcons.createCrossIcon();

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
  cancelButton.innerHTML = 'Отмена';

  // вынести всё в хандлер
  deleteButton.addEventListener('click', async (event) => {
    try {
      const deletedClient = clientsList.findIndex((client) => client.id === id);

      if (deletedClient) {
        await deleteClientOnServer(id);

        clientsList.splice(deletedClient, 1);
        console.log(clientsList);

        createTableBody(clientsList);
        modal.classList.remove('is-active');
      }
    } catch (error) {
      throw error;
    }
  });

  cancelButton.addEventListener('click', () => {
    modal.classList.remove('is-active');
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('is-active');
  });

  modalContent.append(title, message, deleteButton, cancelButton, closeButton);
}
