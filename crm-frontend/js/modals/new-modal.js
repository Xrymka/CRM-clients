// функция создания моодального окна (удаление клиента)
export function createNewClientModal(id, modalContent) {
  let title = document.createElement('h2');
  let form = document.createElement('form');
  let fieldsetInfo = document.createElement('fieldset');
  let labelLastName = document.createElement('label');
  let inputLastName = document.createElement('input');
  let labelName = document.createElement('label');
  let inputName = document.createElement('input');
  let labelPatronymic = document.createElement('label');
  let inputPatronymic = document.createElement('input');
  let fieldsetContacts = document.createElement('fieldset');
  let addButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  let cancelButton = document.createElement('button');
  let closeButton = document.createElement('button');
  let closeIcon = createIcons.createCrossIcon();

  //#region 123
  inputLastName.setAttribute("type", "text");
  inputLastName.setAttribute("placeholder", "Фамилия");
  inputLastName.setAttribute("required", "true");
  //#endregion

  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "Имя");
  inputName.setAttribute("required", "true");

  inputPatronymic.setAttribute("type", "text");
  inputPatronymic.setAttribute("placeholder", "Отчество");

  title.classList.add('modal__title');
  labelLastName.classList.add("required-input");
  inputName.classList.add("required-input");
  deleteButton.classList.add('modal__btn', 'btn');
  cancelButton.classList.add('modal__cancel-btn', 'btn');
  closeButton.classList.add('modal__close-btn', 'btn');

  closeButton.append(closeIcon);
  title.innerHTML = 'Новый клиент';
  addButton.innerHTML = 'Добавить контакт';
  deleteButton.innerHTML = 'Сохранить';
  cancelButton.innerHTML = 'Отмена';

  deleteButton.addEventListener('click', () => {
    //addClient(id); ЗДЕСЬ НУЖНО добавить клиента в базу и таблицу
    document.querySelector('.modal').classList.remove('is-active');
  });

  cancelButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  closeButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  modalContent.append(title, message, deleteButton, cancelButton);
}
