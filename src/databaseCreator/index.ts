// import CLI from '../CLI'

import * as index from './methods'

class databaseCreator{
  constructor(){
    // super()
  }


  static mysql = index.mysql;
  static mongo = index.mongo

  static nameAndType(){
      return[
        {
          name: "name",
          type: "input",
          message: `What is the name of this database?`
        },
        {
          name: "type",
          message: `What kind of database is this?`,
          type: "list",
         choices: Object.keys(index),
        }
      ]
  }


  // static edit(list){
  //     return[
  //       {
  //         name: "name",
  //         type: "list",
  //         choices: list,
  //         message: `Which database do you need to edit?`
  //       }
  //     ]
  //   // console.log('gotta edit these', list)
  // }


}


export default databaseCreator
