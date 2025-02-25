import { editClientOnServer } from '../api.js';
import { createIcons } from '../create-icons.js';

// функция создания модального окна (редактирование клиента)
export function createEditClientModal(id, modalContent) {
  let title = document.createElement('h2');
  let message = document.createElement('p');
  let saveButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  let closeButton = document.createElement('button');
  let closeIcon = createIcons.createCrossIcon();

  title.classList.add('modal__title');
  message.classList.add('modal__message');
  saveButton.classList.add('modal__btn', 'btn');
  deleteButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');

  closeButton.append(closeIcon);
  title.innerHTML = 'Изменить студента';
  message.innerHTML = '???';
  saveButton.innerHTML = 'Сохранить';
  deleteButton.innerHTML = 'Удалить клиента';

  saveButton.addEventListener('click', () => {
    let newClientObject = {
      name: inputName.value,
      surname: inputLastName.value,
      lastName: inputPatronymic.value,
      contacts: []
    };

    editClientOnServer(id, newClientObject);
    document.querySelector('.modal').classList.remove('is-active');
  });

  deleteButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('is-active');
  });

  modalContent.append(title, message, saveButton, deleteButton, closeButton);
}
