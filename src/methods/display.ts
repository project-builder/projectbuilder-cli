const display = function(msg, count, limit) {
  console.log(
    this.chalk.green(msg)
  );
  this.showProgressBar(count, limit);

}

export default display;
