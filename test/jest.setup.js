global.document.body.innerHTML = `
  <div class="items">
  </div>`;

const main = global.document.createElement('div');
main.id = '1';
global.global.document.body.innerHTML += main;
const checkBox = document.createElement('input');
checkBox.classlist += 'checkbox';
checkBox.id = '1';
checkBox.type = 'checkbox';
checkBox.checked = true;
const edit = global.document.createElement('div');
edit.id = 'edit';
const input = global.document.createElement('input');
input.value = 'run';
input.id = 'input';
edit.innerHTML += input;
main.innerHTML += checkBox;
main.innerHTML += edit;
