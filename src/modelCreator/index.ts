// import CLI from '../CLI'

import * as index from './methods'

class modelCreator{
  constructor(){
    // super()
  }

  static setup = index.setup;

  // static nameAndType(){
  //     return[
  //       {
  //         name: "name",
  //         type: "input",
  //         message: `What is the name of this filesystem?`
  //       },
  //       {
  //         name: "type",
  //         message: `What kind of filesystem is this?`,
  //         type: "list",
  //        choices: Object.keys(index),
  //       }
  //     ]
  // }


}


export default modelCreator
