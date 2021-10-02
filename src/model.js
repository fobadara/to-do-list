export default class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('todos')) || [];
  }

  setStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  bindChange = (callback) => {
    this.change = callback;
  }

  update(tasks) {
    this.change(tasks);
    this.setStorage(tasks);
  }

  addTodo = (input) => {
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

  changeStatusValue(inputNum, input) {
    this.tasks.forEach((currentItem) => {
        if (currentItem.number === parseInt(inputNum, 10)) {
          currentItem.string = (input === true) ? input : '';
        }
    });
    this.update(this.tasks);
  }

  removeTodo(event) {
    this.parent = event.target.parentElement;
    this.string = this.parent.firstElementChild.nextElementSibling.firstElementChild.value;
    this.tasks.forEach((currentItem, index) => ((this.string === currentItem.string) ? this.tasks.splice(index, 1) : ' '));
    this.update(this.tasks);
  }
}