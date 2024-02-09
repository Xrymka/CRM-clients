// функция создания моодального окна (удаление клиента)
export function createDeleteConfirmationModal(id, modalContent) {
  let title = document.createElement('h2');
  let message = document.createElement('p');
  let deleteButton = document.createElement('button');
  let cancelButton = document.createElement('button');

  title.classList.add('modal__title');
  message.classList.add('modal__message');
  deleteButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');

  title.innerHTML = 'Удалить клиента';
  message.innerHTML = 'Вы&nbsp;действительно хотите удалить данного клиента?';
  deleteButton.innerHTML = 'Удалить';
  cancelButton.innerHTML = 'Отмена';

  modalContent.append(title, message, deleteButton, cancelButton);
}
