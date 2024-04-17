// функция создания модального окна (редактирование клиента)
export function createEditClientModal(id, modalContent) {
  let title = document.createElement('h2');
  let message = document.createElement('p');
  let deleteButton = document.createElement('button');
  let cancelButton = document.createElement('button');

  title.classList.add('modal__title');
  message.classList.add('modal__message');
  deleteButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');

  title.innerHTML = 'Изменить студента';
  message.innerHTML = '???';
  deleteButton.innerHTML = 'Добавить';
  cancelButton.innerHTML = 'Отмена';

  deleteButton.addEventListener('click', () => {
    //addClient(id); ЗДЕСЬ НУЖНО добавить клиента в базу и таблицу
    document.querySelector('.modal').classList.remove('is-active');
  });

  cancelButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  modalContent.append(title, message, deleteButton, cancelButton);
}
