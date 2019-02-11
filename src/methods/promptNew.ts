const promptNew = async function(questions){
  let question = await this.inquirer.prompt(questions);

  return question
  // console.log(question.mainMenu );

}

export default promptNew
