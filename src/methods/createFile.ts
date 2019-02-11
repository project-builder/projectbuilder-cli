import * as shell from 'shelljs';

import * as fs from 'fs-extra';

import * as YAML from 'json2yaml'

const createFile = async function(){

let projectTitle = 'testTitle';


// for (let key in this.databaseTypes) {
//     console.log(`Need to install ORM for ${key}`)
// }
// for (let key in this.filesystemTypes) {
//     console.log(`Need to install FSORM for ${key}`)
// }
  try {

  console.log('humpuy')

    // for (let key of this.databaseTypes) {
    //     console.log(`Need to install ORM for ${key}`)
    // }
    // for (let key in this.filesystemTypes) {
    //     console.log(`Need to install FSORM for ${key}`)
    // }



     let rootFile = await fs.ensureDir(`${process.cwd()}/${projectTitle}`);
     let yamlFile = await fs.outputFile(`${rootFile}/${projectTitle}.config.yml`, YAML.stringify(this.globalConfig));



    shell.cd(projectTitle);
    shell.exec('npm init -y')

        for (let key of this.databaseTypes) {
            console.log(`Need to install ORM for ${key}`)
            shell.exec(`npm i projectbuilder-orm-${key}`)
        }




  } catch (err) {
    console.error(err)
  }

};

export default createFile;
