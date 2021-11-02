import View from '../src/view.js';

import Model from '../src/model.js';

test('sanity check', () => {
  expect(true).toBe(true);
});

describe('DOM manipulation', () => {
  const view = new View();

  const model = new Model();

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