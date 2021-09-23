import './style.css';
import View from './view.js';
import Model from './model.js';

class Control {
  constructor(view) {
    this.model = new Model();
    this.view = view;
  }

  init() {
    this.view.display(this.model.tasks);
  }
}

const control = new Control(new View());
control.init();
