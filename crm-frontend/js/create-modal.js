import { createIcons } from './create-icons.js';

const modalModes = {
  create: 'create',
  change: 'change'
}

// функция отображения модального окна
function openModal(modalMode = modalModes.create) {
  switch(modalMode) {
    case modalModes.create:
      //
      break;
    case modalModes.change:
      //
      break;
  }
}

// функция создания модального окна

// функция создания моодального окна (удаление клиента)
function createDeleteConfirmationModal(id) {
  let modal = document.createElement('div');
  let modalOverlay = document.createElement('div');
  let modalWrapper = document.createElement('div');
  let modalContent = document.createElement('div');
  let title = document.createElement('h2');
  let message = document.createElement('p');
  let deleteButton = document.createElement('button');
  let cancelButton = document.createElement('button');
  let closeButton = document.createElement('button');
  let closeIcon = createIcons.createCrossIcon();

  modal.classList.add('modal', 'modal--delete');
  modalWrapper.classList.add('modal__wrapper');
  modalOverlay.classList.add('modal__overlay');
  modalContent.classList.add('modal__content');
  title.classList.add('modal__title');
  message.classList.add('modal__message');
  deleteButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');

  title.innerHTML = 'Удалить клиента';
  message.innerHTML = 'Вы&nbsp;действительно хотите удалить данного клиента?';
  deleteButton.innerHTML = 'Удалить';
  cancelButton.innerHTML = 'Отмена';

  closeButton.append(closeIcon);
  modalContent.append(title, question, deleteButton, cancelButton, closeButton);
  modalWrapper.append(modalOverlay, modalContent);
  modal.append(modalWrapper);
  document.body(modal);
}

export { createDeleteConfirmationModal }
