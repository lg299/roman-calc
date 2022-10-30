import blessed from 'blessed';


export function main() {
  let screen = blessed.screen({
    smartCSR: true,
    dockBorders: true,
  });


  // let box = blessed.box({
  //   parent: screen,
  //   top: 'center',
  //   left: 'center',
  //   width: '20%',
  //   height: '80%',
  //   content: '',
  //   border: {
  //     type: 'line',
  //   },
  // });

  let topBox = blessed.box({
    parent: screen,
    top: 0,
    left: 'center',
    width: '20%',
    height: '10%',
    content: '0',
    border: {
      type: "line",
    },
  });

  // screen.append(box);
  screen.append(topBox);


  var table = blessed.listtable({
    parent: screen,
    headers: ['1', '2', '3','4'],
    padding: {left: 0, right: 0},
    top: '5%',
    left: 'center',
    border: 'line',
    align: 'center',
    keys: true,
    width: '20%',
    height: '18%',
    vi: false,
    name: 'table',
  });

  // Focus table, and render results to screen
  table.setData(
    [
      ['AC', '±', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '+'],
      ['1', '2', '3', '-'],
      ['@', '0', '.', '=']
    ],
  );
  table.focus();

  screen.key(['escape', 'q', 'C-c'], function () {
    return process.exit(0);
  });
  screen.render();
}
