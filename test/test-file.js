// eslint-disable-next-line no-unused-vars
export default class View {
  constructor() {
    this.list = document.querySelector('.items');
    this.fragment = new DocumentFragment();
  }

  createElements = (tasks) => {
    this.number = 1;
    if (tasks) {
      this.list.innerHTML = '';
      tasks.forEach((currentItem) => {
        this.div = document.createElement('div');
        this.div.classList.add('row');
        this.div.setAttribute('id', `${this.number}`);
        this.number += 1;
        this.checkbox = document.createElement('input');
        this.checkbox.setAttribute('type', 'checkbox');
        this.checkbox.classList.add('no-fluid');
        this.checkbox.classList.add('click');
        this.checkbox.classList.add('checkbox');
        this.checkbox.checked = currentItem.bool;

        this.rowForm = document.createElement('form');
        this.textarea = document.createElement('textarea');
        this.textarea.style.cssText = 'border: none;';
        this.textarea.setAttribute('readonly', true);
        this.textarea.setAttribute('draggable', true);
        this.textarea.setAttribute('required', true);
        if (currentItem.bool) {
          this.textarea.style.textDecoration = 'line-through';
        } else {
          this.checkbox.style.textDecoration = 'none';
        }
        this.textarea.value = `${currentItem.string}`;
        this.textarea.classList.add('string');
        this.button = document.createElement('button');
        this.button.style.display = 'none';

        this.more = document.createElement('span');
        this.more.classList = 'more';
        this.more.dataset.data = 'rmv';
        this.more.innerHTML = '&#65049;';

        this.bin = document.createElement('span');
        this.bin.innerHTML = '&#128465;';
        this.bin.classList = 'bin';
        this.bin.id = 'bin';
        this.checkbox.classList.add('click');
        this.bin.classList.add('no-fluid');

        this.rowForm.append(this.textarea, this.button);
        this.div.append(this.checkbox, this.rowForm, this.more, this.bin);
        this.fragment.appendChild(this.div);
      });
      this.list.append(this.fragment);
    }
  }
}