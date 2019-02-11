const showMenu = async function(questions){
  let question = await this.inquirer.prompt(questions);

  return question.menu

}

export default showMenu
