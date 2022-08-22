import blessed from 'blessed';


export function main() {
  let screen = blessed.screen({
    smartCSR: true,
  });

  let box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    border: {
      type: 'line',
    },
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: '#f0f0f0',
      },
      hover: {
        bg: 'green',
      },
    },
  });
  screen.append(box);
  screen.key(['escape', 'q', 'C-c'], function () {
    return process.exit(0);
  });
  screen.render();
}



