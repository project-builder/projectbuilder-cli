import chalk from 'chalk';
import * as figlet from 'figlet';

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("API-BUILDER", {
        font: "slant",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}

export default init;
