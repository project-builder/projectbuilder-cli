const promptProjectName = async function(){
  const questions = [
    {
      name: "Title",
      type: "input",
      message: "What is the name of your project"
    },
  ];

let question = await this.inquirer.prompt(questions);

return question.Title;
};

export default promptProjectName;
