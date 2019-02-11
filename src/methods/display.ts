const display = function(msg, count, limit, extra) {
  // let msg = this.figlet.textSync( `Setting up ${category} ${count} of ${limit} ${extra ? extra : ''}`, {
  //         font: "Old Banner",
  //         horizontalLayout: "default",
  //         verticalLayout: "default"
  //       })



  console.log(
    this.chalk.green(msg)
  );
  this.showProgressBar(count, limit);

}

export default display;
