import './style.css';
import Model from './model.js';
import View from './view.js';
import Checkbox from './checkbox.js';

class Control {
  constructor(view, model, checkbox) {
    this.model = model;
    this.view = view;
    this.checkbox = checkbox;
    this.handleChange(this.model.tasks);
    this.view.getSearchValue(this.handleAddEvent);
    this.view.listenToCheckBox(this.handleCheckEvent);
    this.view.editList(this.handleEditList);
    this.checkbox.getObjects(this.model.tasks);
    this.handleCompleted();
  }

  handleChange = (tasks) => {
    this.view.display(tasks);
  }

  handleAddEvent = (input) => {
    this.model.addTodo(input);
    this.view.editList(this.handleEditList);
  }

  handleEditList = (event) => {
    event.target.style.display = 'none';
    this.moreId = event.target.id;
    this.bin = event.target.nextElementSibling;
    this.bin.style.display = 'block';

    this.textarea = event.target.previousElementSibling.firstElementChild;
    this.textarea.readOnly = false;

    this.parent = event.target.parentElement;
    this.parent.style.cssText = 'background-color: rgb(248, 239, 169);';
    this.view.getRemoveBtn(this.passRemoveBtn);

    this.body = document.querySelector('body');
    this.body.addEventListener('keypress', this.passVal = (event) => {
      if (event.key === 'Enter' && !document.querySelector('.search').value) {
        event.preventDefault();
        if (this.textarea.value) {
          this.model.changeStatusValue(this.textarea.parentElement.parentElement.id,
            this.moreId, this.textarea.value);
        }
      }
    });
  }

  handleCheckEvent = (event) => {
    this.model.toggleTodo(event);
    this.checkbox.strike(event);
  }

  passRemoveBtn = (event) => {
    this.model.removeTodo(event.target);
    this.view.display(this.model.tasks);
  }

  handleCompleted = () => {
    this.clear = document.querySelector('.clear');
    this.row = document.querySelectorAll('textarea');
    this.clear.addEventListener('click', () => {
      this.model.tasks.forEach((currentItem, index) => {
        if (currentItem.bool === true) {
          this.model.tasks.splice(index, 1);
        }
        currentItem.number = index + 1;
        this.model.update(this.model.tasks);
      });
    });
  }
}

const control = new Control(new View(), new Model(), new Checkbox());
control.handleCompleted();