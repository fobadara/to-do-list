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

  toggleTodo = (event) => {
    this.string = event.target.nextElementSibling.firstElementChild.value;
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (event.target.checked === true && this.string === this.tasks[i].string) {
        this.tasks[i].bool = true;
      } else if (event.target.checked === false && this.string === this.tasks[i].string) {
        this.tasks[i].bool = false;
      }
    }
    this.setStorage(this.tasks);
  }

  changeStatusValue(inputNum, moreId, value) {
    this.tasks.forEach((currentItem) => {
      // this.parentId = input.parentElement.parentElement.id;
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
}