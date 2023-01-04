import View from './view.js';

export default class Model {
  constructor() {
    this.view = new View();
    this.tasks = JSON.parse(localStorage.getItem('todos')) || [];
  }

  setStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  update(tasks) {
    this.view.display(this.tasks);
    this.setStorage(tasks);
  }

  addTodo = (input) => {
    if (input) {
      if (input.style.textDecoration === 'line-through') {
        this.bool = true;
      } else {
        this.bool = false;
      }
      this.newArray = {
        string: input.value,
        bool: this.bool,
        number: (this.tasks.length > 0) ? this.tasks[this.tasks.length - 1].number + 1 : 1,
      };

      this.array = this.tasks.push(this.newArray);
      this.update(this.tasks);
    }
  }

  toggleTodo = (target, value) => {
    this.targetId = parseInt(target.id, 10);
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (target.checked === true && this.targetId === this.tasks[i].number) {
        this.tasks[i].bool = value;
      } else if (target.checked === false && this.targetId === this.tasks[i].number) {
        this.tasks[i].bool = value;
      }
    }
    this.setStorage(this.tasks);
  }

  changeStatusValue(inputNum, moreId, value) {
    this.tasks.forEach((currentItem) => {
      if (parseInt(moreId, 10) === parseInt(inputNum, 10)
        && parseInt(inputNum, 10) === currentItem.number) {
        currentItem.string = value;
      }
    });
    this.update(this.tasks);
  }

  removeTodo(target) {
    this.parent = target.parentElement;
    this.string = this.parent.firstElementChild.nextElementSibling.firstElementChild.value;
    this.row = document.querySelector('.row');
    this.tasks.forEach((currentItem, index) => {
      if (this.string === currentItem.string) {
        this.tasks.splice(index, 1);
      }
      this.row.remove();
      currentItem.number = index + 1;
      this.update(this.tasks);
    });
    this.row.remove();
  }

  handleCompleted = () => {
    // this.clear.addEventListener('click', () => {
    this.tasks.forEach((currentItem, index) => {
      if (currentItem.bool === true) {
        this.tasks.splice(index, 1);
      }
      currentItem.number = index + 1;
      this.update(this.tasks);
    });
  }
}