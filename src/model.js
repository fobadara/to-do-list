export default class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('todos')) || [
      { string: 'run', bool: false, number: 1 },
      { string: 'exercise', bool: false, number: 2 },
    ];
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

  changeStatusValue(inputNum, input, value) {
    this.tasks.forEach((currentItem) => {
      this.parentId = input.parentElement.parentElement.id;
      if (parseInt(this.parentId, 10) === parseInt(inputNum, 10)
        && parseInt(inputNum, 10) === currentItem.number) {
        currentItem.string = value;
      }
    });
    this.update(this.tasks);
  }

  removeTodo(event) {
    this.parent = event.target.parentElement;
    this.string = this.parent.firstElementChild.nextElementSibling.firstElementChild.value;
    this.tasks.forEach((currentItem, index) => {
      if (this.string === currentItem.string) {
        this.tasks.splice(index, 1);
      }
      currentItem.number = index + 1;
      this.update(this.tasks);
    });
  }
}