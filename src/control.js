import './style.css';
import View from './view.js';
import Model from './model.js';

export class Control {
  constructor(view, model) {
    this.model = model;
    this.view = view;

    // this.model.handleGetDisplay(this.view.display);

    this.view.display(this.model.tasks);
    this.view.getSearchValue(this.handleAddEvent);
    this.view.listenToCheckBox(this.handleCheckEvent);
    this.view.editList(this.handleEditList);
  }

  handleAddEvent = (input) => {
    this.model.addTodo(input);
    this.view.display(this.model.tasks);
  }

  handleCheckEvent = (event) => {
    this.model.toggleTodo(event);
    this.checkboxes = document.querySelectorAll('.checkbox');

    for (let i = 0; i < this.checkboxes.length; i++) {
      this.string = this.checkboxes[i].nextElementSibling;

      if (this.checkboxes[i].checked) {
        this.string.style.textDecoration = 'line-through';
      } else {
        this.string.style.textDecoration = 'none';
      }
    }
  }

  handleEditList = (event) => {
    event.target.style.display = 'none';
    this.bin = event.target.nextElementSibling;
    console.log(this.bin)
    this.bin.style.display = 'block';
  }

  init = () => {
    // this.view.display(task);
    // this.handle();
    // console.log(this.view);
    // this.handlecheckEvent();    
  }
}

const control = new Control(new View(), new Model());
control.display;
window.addEventListener('change', control.init);