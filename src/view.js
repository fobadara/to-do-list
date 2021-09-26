//Todo: import from control

//Todo: create and export view class 
//Todo: add populateList to consructor
//Todo: get ul from index
//Todo: append populatelist to ul

//Todo: create metho

//Todo: create drag and dop method

//Todo: method to put dach when checkbox is clicked 

//Todo: method to erase clicked
export default class View {
  constructor() {
    this.list = document.querySelector('.items');
    this.fragment = new DocumentFragment();
    // console.log(handle);
  }

  createElements(tasks) {
    tasks.forEach((currentItem) => {
      // console.log('hjdhjdfhjudfhj');
      this.list.innerHTML = '';
      this.div = document.createElement('div');
      this.div.classList.add('row');
      
      this.checkbox = document.createElement('input');
      this.checkbox.setAttribute('type', 'checkbox');
      this.checkbox.classList.add('no-fluid');
      this.checkbox.classList.add('checkbox');
      this.checkbox.checked = currentItem.bool;
     
      this.input = document.createElement('input');
      this.input.style.cssText = 'border: none;';
      this.input.setAttribute('id', 'currentItem.number')
      this.input.setAttribute('type', 'text');
      this.input.setAttribute('readonly', true);
      this.input.setAttribute('draggable', true);
      this.input.value = `${currentItem.string}`;
      
      this.more = document.createElement('span');
      this.more.classList = 'more';
      this.more.innerHTML = '&#65049;';
      
      this.bin = document.createElement('span');
      this.bin.innerHTML = '&#128465;';
      this.bin.classList = 'bin';
      this.bin.classList.add('no-fluid');
      
      this.div.append(this.checkbox, this.input, this.more, this.bin);
      this.fragment.appendChild(this.div);
    });
    this.list.append(this.fragment);
  }

  display(tasks) {    
    this.createElements(tasks);
  }

  getSearchValue = (handler) => {
    this.form = document.querySelector('form');
    this.search = document.querySelector('.search');
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(this.search);
      handler(this.search);
    })
  }

  listenToCheckBox = (handler) => {  
    this.checkbox = document.querySelectorAll('.checkbox');
    this.checkbox.forEach(currentItem => {
      currentItem.addEventListener('click', (event) => {
        handler(event);
      });
    })
  }

  editList (handler) { 
    this.more = document.querySelectorAll('.more');
    this.more.forEach(currentItem => {
      currentItem.addEventListener('click', (event) => {
        handler(event);
      });
    })
  }
}