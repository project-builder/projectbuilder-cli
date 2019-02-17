const modelSetup = function(dbList, fsList){
  console.log('modelSetup this ||', this.foo)
    const questions = [
      {
        name: "name",
        type: "input",
        message: "What is the name of this model?"
      },

    //   // dbList.length > 0 &&
    Object.keys(this.globalConfig.databases).length > 0 &&
      {
        name: `db`,
        message: `What database will this model use?`,
        type: "list",
        // choices: dbList,
        choices: [...Object.keys(this.globalConfig.databases), 'carrot']
      },

      Object.keys(this.globalConfig.filesystems).length > 0 &&
      {
        name: `fs`,
        message: `What fileSystem will this model use?`,
        type: "list",
        choices: [...Object.keys(this.globalConfig.filesystems)]
      }
    ]

    return questions

}

export default modelSetup
