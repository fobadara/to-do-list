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
  }

  createElements(tasks) {
    tasks.forEach((currentItem) => {
      // this.list.innerHTML = '';
      this.div = document.createElement('div');
      this.div.classList.add('row');
      this.checkbox = document.createElement('input');
      this.checkbox.setAttribute('type', 'checkbox');
      this.checkbox.classList.add('no-fluid');
      this.input = document.createElement('input');
      this.input.style.cssText = 'border: none;';
      this.input.setAttribute('type', 'text');
      this.input.setAttribute('readonly', true);
      this.input.setAttribute('draggable', true);
      this.input.value = `${currentItem.string}`;
      this.input.style.cssText = 'border: none';
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
}