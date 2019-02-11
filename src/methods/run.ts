const run = async function(){
let menuChoice = await this.showMenu(this.Menu.main());
// this.clear()

  switch (menuChoice) {
    case'createProject': this.createFile();
    // case'createProject': this.showConfig();


    // case'createProject': this.createFile('sampleProject', this.globalConfig);
      break;
    case `showConfig`: this.showConfig()
      break;
    case 'model': {
        this.clear()
        let dbList = Object.keys(this.globalConfig.databases);
        let fsList = Object.keys(this.globalConfig.filesystems)
        let decision = this.ChoiceRouter[await this.showMenu(this.Menu.sub(menuChoice))][menuChoice](dbList, fsList)

        if(decision === 'main'){
          this.run();
        }
        else{
          let result = await this.promptNew(decision.filter(arr => arr))
          let {name, db, fs} = result;

        if(!db) db = false
        if(!fs) fs = false

      let cont = true;
      let data ={};

      while(cont){
        let ans = this.ChoiceRouter[await this.showMenu(this.Menu.sub('column'))]['column']()
        if (ans === 'main'){
          cont = false
        }
        else{
          let result = await this.promptNew(ans)
          let {name, ...rest} = result;
          data[name] = rest;
        }
      }
            this.globalConfig[`${menuChoice}s`][name] = {files: fs, db, data }

            this.run()
          }

        break;
    }
    case 'database':
    case 'filesystem':
      this.clear()
      let decision = this.ChoiceRouter[await this.showMenu(this.Menu.sub(menuChoice))][menuChoice](menuChoice)

      if(decision === 'main'){
        this.run()
      }
      else{
        let result = await this.promptNew(decision)
        let {name, type} = result;
        let config = this.Creator[menuChoice][type](name)
        let setup = await this.promptNew(config)
        this.globalConfig[`${menuChoice}s`][name] = {type, setup}
        this.run()
      }


      break;
    default: break;

  }




}

export default run;
