import { createIcons } from '../create-icons.js';

// функция создания контента модального окна (удаление клиента)
export function createDeleteConfirmationModal(id, modalContent) {
  let title = document.createElement('h2');
  let message = document.createElement('p');
  let deleteButton = document.createElement('button');
  let cancelButton = document.createElement('button');
  let closeButton = document.createElement('button');
  let closeIcon = createIcons.createCrossIcon();

  title.classList.add('modal__title');
  message.classList.add('modal__message');
  deleteButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');

  closeButton.append(closeIcon);
  title.innerHTML = 'Удалить клиента';
  message.innerHTML = 'Вы&nbsp;действительно хотите удалить данного клиента?';
  deleteButton.innerHTML = 'Удалить';
  cancelButton.innerHTML = 'Отмена';

  deleteButton.addEventListener('click', () => {
    //deleteClient(id); ЗДЕСЬ НУЖНО УДАЛИТЬ КЛИЕНТА ИЗ БАЗЫ И ТАБЛИЦЫ
    document.querySelector('.modal').classList.remove('is-active');
  });

  cancelButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  closeButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  modalContent.append(title, message, deleteButton, cancelButton, closeButton);
}
