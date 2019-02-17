const setup = function(){
  return[
      {
        name: "name",
        type: "input",
        message: "What is the name of this column?"
      },
      {
        name: `dataType`,
        message: `What data dataType should this column be?`,
        type: "list",
        choices: ['string', 'number', 'boolean', 'array']
      },
      {
        name: `required`,
        message: `Is this column a required field?`,
        type: "list",
        choices: ['yes', 'no']
      },
      {
        name: `encrypted`,
        message: `Does this column need to be encrypted?`,
        type: "list",
        choices: ['yes', 'no']
      },
    ]
}

export default setup
