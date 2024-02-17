import { createDeleteConfirmationModal } from './delete-modal.js';
import { createNewClientModal } from './new-modal.js';
import { createEditClientModal } from './edit-modal.js';

const modalModes = {
  create: 'create',
  edit: 'edit',
  delete: 'delete'
}

// функция создания основы модального окна
function createModalBase() {
  let modal = document.createElement('div');
  let modalOverlay = document.createElement('div');
  let modalWrapper = document.createElement('div');
  let modalContent = document.createElement('div');

  modal.classList.add('modal');
  modalWrapper.classList.add('modal__wrapper');
  modalOverlay.classList.add('modal__overlay');
  modalContent.classList.add('modal__content');

  modal.appendChild(modalOverlay);
  modal.appendChild(modalWrapper);
  modalWrapper.appendChild(modalContent);

  modalWrapper.append(modalOverlay, modalContent);
  modal.append(modalWrapper);
  document.body.append(modal);
}

createModalBase();
const modalContent = document.querySelector('.modal__content');

// функция отображения модального окна
function openModal(modalMode, id) {
  if (modalContent.children) [...modalContent.children].forEach(el => el.remove());

  switch(modalMode) {
    case modalModes.create:
      createNewClientModal(id, modalContent);
      break;
    case modalModes.edit:
      createEditClientModal(id, modalContent);
      break;
    case modalModes.delete:
      createDeleteConfirmationModal(id, modalContent);
      break;
  }

  document.querySelector('.modal').classList.add('is-active');
}

export { modalModes, openModal }
