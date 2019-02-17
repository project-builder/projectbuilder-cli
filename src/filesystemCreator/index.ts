// import CLI from '../CLI'

import * as index from './methods'

class filesystemCreator{
  constructor(){
    // super()
  }

  static s3 = index.s3;

  static nameAndType(){
      return[
        {
          name: "name",
          type: "input",
          message: `What is the name of this filesystem?`
        },
        {
          name: "type",
          message: `What kind of filesystem is this?`,
          type: "list",
         choices: Object.keys(index),
        }
      ]
  }


}


export default filesystemCreator
