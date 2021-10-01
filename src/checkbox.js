import View from './view.js';
import Model from './model.js';

export default class Checkbox {
  constructor() {
    this.view = new View();
    this.model = new Model();
    console.log(this.view, this.model);
  }

  getObjects = (tasks) => {
    this.tasks = tasks;
  }

  strike = (event) => {
    this.status = event.target.checked;
    this.string = event.target.nextElementSibling.firstElementChild;
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (this.status) {
        // event.target.checked = true;
        this.tasks[i].bool = true;
        this.string.style.textDecoration = 'line-through';
      } else {
        // event.target.checked = false;
        this.tasks[i].bool = false;
        this.string.style.textDecoration = 'none';
      }
    }
  }
}