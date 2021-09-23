//Todo: import view and module
//Todo: export control class
  //Todo: create class and constructor
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

//Todo: each object keys string, bool and number
//Todo: create method to iterate array 
      //Todo: add checkbox and content to input with readonly atribute and draggable=true then more icon in span and bin icon in another span
//Todo: method for when more is clicked add display bin icon and give none to more toggle or remove readonly and on enter toggle back or add
    
//Todo: method for drag and drop
//Todo: a
  }


}
