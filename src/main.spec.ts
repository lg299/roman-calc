import { main } from './main';
import blessed from 'blessed';

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
    expect(blessed.box).toHaveBeenCalledWith({
      top: 'center',
    });
    expect(blessed.screen).toHaveBeenCalledWith({
      smartCSR: true,
      dockBorders: true,
    });
  });
});
