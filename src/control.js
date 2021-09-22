import './style.css';
//Todo: import view and module
import {view} from './view.js';
import Model from './model.js';
//Todo: export control class
  //Todo: create class and constructor

export default class Control {
  constructor() {
   this.model= new Model();
  }

//Todo: each object keys string, bool and number
//Todo: create method to iterate array 
  createElements() {
    if(this.model.task) {
      this.fragment = new DocumentFragment();
      //Todo: add checkbox and content to input with readonly atribute and draggable=true then more icon in span and bin icon in another span
//Todo: method for when more is clicked add display bin icon and give none to more toggle or remove readonly and on enter toggle back or add
      this.model.task.forEach(currentItem => {
        this.div= document.createElement('div');
        this.div.classList.add('row');
        this.checkbox = document.createElement('input');
        this.checkbox.setAttribute('type', 'checkbox');
        this.checkbox.classList.add('no-fluid')
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('readonly', true);
        this.input.setAttribute('draggable', true);
        this.input.value = `${currentItem.string}`;
        this.input.style.cssText='border: none';
        this.more = document.createElement('span');
        this.more.classList = 'more';
        this.more.innerHTML='&#65049;';
        this.bin = document.createElement('span');
        this.bin.innerHTML = '&#128465;'
        this.bin.classList = 'bin';
        this.bin.classList.add('no-fluid');
        this.div.append(this.checkbox, this.input, this.more, this.bin)
        this.fragment.appendChild(this.div);
      })
      this.list = document.querySelector('.items-cont');
      this.list.append(this.fragment);
    }
    
//Todo: method for drag and drop
//Todo: a
  }


  display() {
  }
}
const control = new Control();
control.createElements();
