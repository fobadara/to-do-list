import View from '../src/view.js';

import Model from '../src/model.js';

test('sanity check', () => {
  expect(true).toBe(true);
});

describe('DOM manipulation', () => {
  test('add to todos', () => {
    const tasks = [{
      string: 'I am a test',
      bool: false,
      number: 1,
    }];

    const view = new View();
    view.createElements(tasks);
    const list = document.querySelectorAll('.items textarea');
    expect(list).toHaveLength(1);
  });

  test('should check if one item is removed', () => {
    const model = new Model();

    
    model.removeTodo();
  });
});
