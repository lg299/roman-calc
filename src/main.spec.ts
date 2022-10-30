import { main } from './main';
import blessed from 'blessed';
import exp from 'constants';

jest.mock('blessed', () => {
  return {
    box: jest.fn(() => {
      return;
    }),
    screen: jest.fn(() => (
      {
        append: jest.fn(),
        key: jest.fn(),
        render: jest.fn(),
      }
    )),
  };
});

describe('Main function', () => {
  test('A box should be rendered in the terminal', () => {
    main();

    // called twice as there are two boxes
    expect(blessed.box).toHaveBeenCalledTimes(2);
    expect(blessed.screen).toHaveBeenCalledWith({
      smartCSR: true,
      dockBorders: true,
    });

    // checking first call to blessed.box
    expect(blessed.box).toHaveBeenCalledWith({
      parent: expect.anything(),
      top: 'center',
      left: 'center',
      width: '20%',
      height: '80%',
      content: '',
      border: {
        type: 'line',
      },
    });

    // checking last call to blessed.box
    expect(blessed.box).toHaveBeenLastCalledWith({
      parent: expect.anything(),
      top: 0,
      left: 'center',
      width: '20%',
      height: '20%',
      content: 'Enter a number',
      border: {
        type: "line",
      },
    })
  });

});
