//Todo: import from control

//Todo: create and export view class 
//Todo: add populateList to consructor
//Todo: get ul from index
//Todo: append populatelist to ul

//Todo: create metho

//Todo: create drag and dop method

//Todo: method to put dach when checkbox is clicked 

//Todo: method to erase clicked

import './style.css';
import View from './view.js';
import Model from './model.js';

class Control {
  constructor(view) {
    this.model = new Model();
    this.view = view;
  }

  init() {
    // initialize model update
    this.view.display(this.model.tasks);
  }
}

const control = new Control(new View());
control.init();