export default class Model {
  constructor() {
    this.tasks = [
      { string: 'run', bool: false, number: 1 },
      { string: 'exercise', bool: false, number: 2 },
    ];
  }

  addTodo = (input) => {
    this.string = input.value;
    this.bool = input.checked;
    
    this.newArray = {
      string: this.string,
      bool: this.bool,
      number: (this.tasks.length > 0)? this.tasks[this.tasks.length - 1].number + 1 : 1
    }
      this.tasks.push(this.newArray);
  }

  editTodo() {

  }

  toggleTodo(event) {
    console.log(event)
    this.tasks.forEach(currentItem => {
      (event.target.checked && event.target.id === currentItem.number) ? (
        console.log('true'),
        currentItem.bool = false
      )
        : (
          console.log('sdasdaj'),
          currentItem.bool = true
      );
    })

  }

  removeTodo() {

  }
}

