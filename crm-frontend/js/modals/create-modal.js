import { createIcons } from '../create-icons.js';
import { createDeleteConfirmationModal } from './delete-modal.js';

const modalModes = {
  create: 'create',
  change: 'change',
  delete: 'delete'
}

// функция создания основы модального окна
function createModalBase() {
  let modal = document.createElement('div');
  let modalOverlay = document.createElement('div');
  let modalWrapper = document.createElement('div');
  let modalContent = document.createElement('div');
  let closeButton = document.createElement('button');
  let closeIcon = createIcons.createCrossIcon();

  modal.classList.add('modal');
  modalWrapper.classList.add('modal__wrapper');
  modalOverlay.classList.add('modal__overlay');
  modalContent.classList.add('modal__content');
  closeButton.classList.add('modal__close-btn', 'btn');

  modal.appendChild(modalOverlay);
  modal.appendChild(modalWrapper);
  modalWrapper.appendChild(modalContent);

  closeButton.append(closeIcon);
  modalContent.appendChild(closeButton);
  modalWrapper.append(modalOverlay, modalContent);
  modal.append(modalWrapper);
  document.body.append(modal);
}

createModalBase();
const modalContent = document.querySelector('.modal__content');

// функция отображения модального окна
function openModal(modalMode, id) {
  switch(modalMode) {
    case modalModes.create:
      //
      break;
    case modalModes.change:
      //
      break;
    case modalModes.delete:
      createDeleteConfirmationModal(id, modalContent);
      break;
  }
}

export { modalModes, openModal }
