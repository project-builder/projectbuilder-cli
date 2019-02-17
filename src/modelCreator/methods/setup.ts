const setup = function(dbList, fsList){
    return [
      {
        name: "name",
        type: "input",
        message: "What is the name of this model?"
      },

      {
        name: `db`,
        message: `What database will this model use?`,
        type: "list",
        choices: [...dbList, 'none'],
        filter: (answer) => answer === 'none' ? false : answer

      },

      {
        name: `fs`,
        message: `What fileSystem will this model use?`,
        type: "list",
        choices: [...fsList, 'none'],
        filter: (answer) => answer === 'none' ? false : answer

      }
    ]
}

export default setup
