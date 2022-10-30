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

  let topBox = blessed.box({
    parent: screen,
    top: 0,
    left: 'center',
    width: '20%',
    height: '20%',
    content: 'Enter a number',
    border: {
      type: "line",
    },
  });

  screen.append(box);
  screen.append(topBox);

  screen.key(['escape', 'q', 'C-c'], function () {
    return process.exit(0);
  });
  screen.render();
}
