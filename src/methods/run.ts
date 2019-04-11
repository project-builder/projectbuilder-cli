import columnCreator from '../columnCreator';
import databaseCreator from '../databaseCreator'
import filesystemCreator from '../filesystemCreator'
import modelCreator from '../modelCreator'

const run = async function(){

let menuChoice = await this.showMenu(this.Menu.main());

  switch (menuChoice) {
    case'createProject': this.createFile();
    break;
    case `showConfig`: this.showConfig()
    break;
    case 'model': {
            let decision = await this.showMenu(this.Menu.sub(menuChoice))

            if(decision === 'main'){
              this.run()
            }

            if(decision === 'new'){
              let dbList = Object.keys(this.globalConfig.databases);
              let fsList = Object.keys(this.globalConfig.filesystems)
              let {name, db, fs} = await this.promptNew(modelCreator.setup(dbList, fsList))

              let cont = true;
              let data ={};

              while(cont){
              let ans = await this.showMenu(this.Menu.sub('column'))
                if (ans === 'main'){
                  cont = false
                }
              if (ans === 'new'){
                  let result = await this.promptNew(columnCreator.setup())
                  let {name, ...rest} = result;
                  data[name] = rest;
                }
              }

              this.globalConfig[`${menuChoice}s`][name] = {files: fs, db, data }

              this.run()
            }

        break;
    }
    case 'database':{
      let decision = await this.showMenu(this.Menu.sub(menuChoice))

      if(decision === 'main'){
        this.run()
      }

      if(decision === 'new'){
        let {name, type} = await this.promptNew(databaseCreator.nameAndType())
        this[`${menuChoice}Types`].add(type)
        let setup = await this.promptNew(databaseCreator[type](name))
        this.globalConfig[`${menuChoice}s`][name] = {type, setup}
        this.run()
      }
      break;
    }

    case 'filesystem':{
      let decision = await this.showMenu(this.Menu.sub(menuChoice))

      if(decision === 'main'){
        this.run()
      }

      if(decision === 'new'){
        let {name, type} = await this.promptNew(filesystemCreator.nameAndType())
        this[`${menuChoice}Types`].add(type)
        let setup = await this.promptNew(filesystemCreator[type](name))
        this.globalConfig[`${menuChoice}s`][name] = {type, setup}
        this.run()
      }
      break;
    }

    default: break;

  }


}

export default run;
