import './style.css';
import View from './view.js';
import Model from './model.js';
import Checkbox from './checkbox.js';

class Control {
  constructor(view, model, checkbox) {
    this.model = model;
    this.view = view;
    this.checkbox = checkbox;
    // this.model.handleGetDisplay(this.view.display);
    this.model.bindChange(this.handleChange);
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
    this.bin = event.target.nextElementSibling;
    this.bin.style.display = 'block';

    // Make row editable
    this.textarea = event.target.previousElementSibling.firstElementChild;
    // console.log(this.textarea)
    this.textarea.readOnly = false;
    // console.log(this.textarea)    


    // Change background-color
    this.parent = event.target.parentElement;
    this.parent.style.cssText = 'background-color: rgb(248, 239, 169)'
    this.view.getRemoveBtn(this.passRemoveBtn);

    //  Add value to changeStatusValue in model
    this.body = document.querySelector('body');
    this.body.addEventListener('keypress', this.passVal = (event) => {
      if (event.key === 'Enter' && !document.querySelector('.search').value) {
        event.preventDefault();
        this.model.changeStatusValue(this.textarea.parentElement.parentElement.id, this.textarea.value);
      }
    })
    // this.body.removeEventListener('keypress', this.passVal = (event) => {
    //   if (event.key === 'Enter') {
    //     return true;
    //   }
    // })
  }
  
  handleCheckEvent = (event) => {
    this.model.toggleTodo(event);
    this.checkbox.strike(event);
    // this.view.display(this.model.tasks);
  }

  passRemoveBtn = (event) => {
    this.model.removeTodo(event);
    console.log('dfjkfjkf');
    this.view.display(this.model.tasks);
  }


 handleCompleted = () => {
    this.clear = document.querySelector('.clear');
    this.row = document.querySelectorAll('textarea');
    // console.log(this.row);
    this.clear.addEventListener('click',  () => {
    this.row.forEach((currentItem, index) => {
      console.log(currentItem.parentElement.parentElement.id, this.model.tasks)
      if(this.model.tasks.number === currentItem.parentElement.parentElement.id) {
        this.model.tasks.splice(index, 1);
      }
      localStorage.setItem('todos', JSON.stringify(this.model.tasks))
    })
    this.view.display(this.model.tasks);
   })     
}
}

const control = new Control(new View(), new Model(), new Checkbox());
// window.addEventListener('change', control.init());

// let form = document.querySelector('form');
// form.addEventListener('change', control.init());