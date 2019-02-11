const modelSetup = function(dbList, fsList){
    const questions = [
      {
        name: "name",
        type: "input",
        message: "What is the name of this model?"
      },

      dbList.length > 0 &&
      {
        name: `db`,
        message: `What database will this model use?`,
        type: "list",
        choices: dbList,
      },

      fsList.length > 0 &&
      {
        name: `fs`,
        message: `What fileSystem will this model use?`,
        type: "list",
        choices: fsList,
      }
    ]

    return questions

}

export default modelSetup
