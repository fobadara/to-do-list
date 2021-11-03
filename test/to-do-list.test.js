import View from '../src/view.js';

import Model from '../src/model.js';
// LocalStorage mock object
// es-lint disable no-unused-var
function storageMock() {
  const storage = {};

  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem(key) {
      delete storage[key];
    },
    getLength() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}

test('sanity check', () => {
  expect(true).toBe(true);
});

describe('DOM manipulation', () => {
  const view = new View();

  const model = new Model();

  // this tests the functionality of the view function
  test('add to todos', () => {
    const tasks = [{
      string: 'I am a test',
      bool: false,
      number: 1,
    }];

    view.createElements(tasks);
    const list = document.querySelectorAll('.items .row');
    expect(list).toHaveLength(1);
  });

  // this tests remove functionality
  test('should check if one item is removed', () => {
    const tasks = [{
      string: 'I am a test',
      bool: false,
      number: 1,
    }];

    view.createElements(tasks);

    const bin = document.querySelector('.bin');
    model.removeTodo(bin);
    const list = document.querySelectorAll('.items .row');
    expect(list).toHaveLength(0);
  });

  // this tests editing functionality
    test('edit todo', () => {
    model.tasks = [{
      string: 'I am a test',
      bool: false,
      number: 1,
    }];
    const inputNum = 1;
    const moreId = 1;
    const value = 'run';
    model.changeStatusValue(inputNum, moreId, value);
    expect(model.tasks[0].string).toBe(value);
  });
});