export default class Model {
  constructor() {
    this.tasks =  JSON.parse(localStorage.getItem('todos')) || [ ];
  }

  // getStorage() {
  //   this.store = JSON.parse(localStorage.getItem('todos'))  
  //   console.log(this.store);
  // }

  setStorage = (todos) => {
    // this.tasks.forEach(element => {
      localStorage.setItem('todos',  JSON.stringify(todos));      
    // });
   }

  bindChange=(callback) => {
   this.change = callback;
    // handler(this.tasks);
  }

  update(tasks) {
    this.change(tasks);
    this.setStorage(tasks);
  }

  addTodo = (input) => {
    
    this.newArray = {
      string: input,
      bool: this.bool,
      number: (this.tasks.length > 0)? this.tasks[this.tasks.length - 1].number + 1 : 1
    }
    
    this.array = this.tasks.push(this.newArray) ;
      this.update(this.tasks);
    }

  editTodo() {

  }

  toggleTodo(event) {
    for(let i = 0; i < this.tasks.length; i+=1){
      console.log(this.tasks[i])
      return (event.target.checked ) ? 
      (this.tasks[i].bool = true, console.log(this.tasks[i].bool))
      : (this.tasks[i].bool = false, console.log(this.tasks[i].bool));
    }
    this.update(this.tasks)
  }

  changeStatusValue(inputNum, input) {
    this.tasks.forEach(currentItem => {
      console.log(inputNum, currentItem.number);
      if(currentItem.number == inputNum) {
        console.log(input)
        currentItem.string =  (input)? input : '';
        console.log(currentItem.string)
      }
      console.log(currentItem.string)
    })
    this.update(this.tasks);
  }

  removeTodo(event) {
    this.string = event.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.value;
    this.tasks.forEach((currentItem, index) => {
      (this.string  === currentItem.string)?  (this.tasks.splice(index ,  1))  :  ''
    })
    this.update(this.tasks);
  }
}

