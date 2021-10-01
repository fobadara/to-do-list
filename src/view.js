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
    // this.children = this.list.children;
    this.fragment = new DocumentFragment();
    this.number = 0;
  }

  createElements = (tasks) => {
    if (tasks) {
      this.list.innerHTML = '';
      tasks.forEach((currentItem) => {
        this.div = document.createElement('div');
        this.div.classList.add('row');
        // create id
        // let idValue = () => {
        //   return  (currentItem.number)? currentItem.number :;
        // }
        console.log(this.number);
        this.div.setAttribute('id', `${this.number}`);
        this.number += 1;

        this.checkbox = document.createElement('input');
        this.checkbox.setAttribute('type', 'checkbox');
        this.checkbox.classList.add('no-fluid');
        this.checkbox.classList.add('click');
        this.checkbox.classList.add('checkbox');
        this.checkbox.checked = currentItem.bool;

        this.rowForm = document.createElement('form');
        this.textarea = document.createElement('textarea');
        this.textarea.style.cssText = 'border: none;';
        this.textarea.setAttribute('readonly', true);
        this.textarea.setAttribute('draggable', true);
        this.textarea.setAttribute('required', true);
         
        //  Add  strikethrough to sring
        // console.log(currentItem.bool);
        // console.log(c)
        if (currentItem.bool) {
          this.textarea.style.textDecoration = 'line-through'
          // this.checkbox.checked = true;
          
        }else{
          this.checkbox.style.textDecoration = 'none';
          // this.checkbox.checked = false;
        }
        console.log(currentItem.bool)
        this.textarea.value = `${currentItem.string}`;
        this.textarea.classList.add('string');
        this.button = document.createElement('button');
        this.button.style.display = 'none';
       
        this.more = document.createElement('span');
        this.more.classList = 'more';
        this.more.dataset.data = 'rmv';
        // this.checkbox.classList.add('click');
        this.more.innerHTML = '&#65049;';

        this.bin = document.createElement('span');
        this.bin.innerHTML = '&#128465;';
        this.bin.classList = 'bin';
        this.bin.id = 'bin';
        this.checkbox.classList.add('click');
        this.bin.classList.add('no-fluid');

        this.rowForm.append(this.textarea,  this.button);
        this.div.append(this.checkbox, this.rowForm, this.more, this.bin);
        this.fragment.appendChild(this.div);
      });
      this.list.append(this.fragment);
    }
  }

  display = (tasks) => {
    this.createElements(tasks);
  }

  getSearchValue = (handler) => {
    this.form = document.querySelector('form');
    this.search = document.querySelector('.search');
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      handler(this.search.value);
      this.search.value = '';
    })
  }

  listenToCheckBox = (handler) => {
    // console.log(handler)
    this.body = document.querySelector('body');
    this.body.addEventListener('change', (event) => {
      (event.target.type === 'checkbox') ? handler(event) : '';
    })
  }


  getRemoveBtn = (handler) => {
    this.removeBtn = document.querySelectorAll('.bin');
    this.removeBtn.forEach(currentItem => {
      document.addEventListener('click', (event) => {
        if (event.target.id === 'bin') {
          handler(event);
        }
      });
    })
  }

  editList(handler) {
    this.more = document.querySelectorAll('.more');
    this.body = document.querySelector('body');
    this.more.forEach(currentItem => {
      this.body.addEventListener('click', (event) => {
        this.data = currentItem.dataset.data;
        this.clickedData = event.target.dataset.data;
        (this.data === this.clickedData) ? handler(event) : '';
      });
    })
    // this.data = this.more.dataset.data
  }
}