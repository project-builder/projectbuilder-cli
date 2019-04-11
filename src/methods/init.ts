import chalk from 'chalk';
import * as figlet from 'figlet';

const init = (title) => {
  console.log(
    chalk.green(
      figlet.textSync(title, {
        font: "slant",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}

export default init;
