global.document.body.innerHTML = `
  <div class="items">
  </div>`;

const main = global.document.createElement('div');
main.id = '1';
global.global.document.body.innerHTML += main;
const edit = global.document.createElement('div');
edit.id = 'edit';
const input = global.document.createElement('input');
input.id = 'input';
edit.innerHTML += input;
main.innerHTML += edit;
