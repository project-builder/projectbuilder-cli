import Creator from '../../Creator';

const getNameAndType = function(subject){
      const newMenu = [
        {
          name: "name",
          type: "input",
          message: `What is the name of this ${subject}?`
        },
        {
          name: "type",
          message: `What kind of ${subject} is this?`,
          type: "list",
         choices: Object.keys(Creator[subject]),
        },


      ]

    return newMenu
}

export default getNameAndType
