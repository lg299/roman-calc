import blessed from 'blessed';


export function main() {
  let screen = blessed.screen({
    smartCSR: true,
    dockBorders: true
  });

  let box = blessed.box({
    parent: screen,
    top: 'center',
    left: 'center',
    width: '20%',
    height: '80%',
    content: '',
    border: {
      type: 'line',
    },
  });
  screen.append(box);

  screen.key(['escape', 'q', 'C-c'], function () {
    return process.exit(0);
  });
  screen.render();
}
