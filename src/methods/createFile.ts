import * as shell from 'shelljs';

import * as fs from 'fs-extra';

import * as YAML from 'json2yaml'

// const createFile = async (projectTitle, content) => {
const createFile = async function(){

let projectTitle = 'testTitle';


  try {
     let rootFile = await fs.ensureDir(`${process.cwd()}/${projectTitle}`);
     let yamlFile = await fs.outputFile(`${rootFile}/${projectTitle}.config.yml`, YAML.stringify(this.globalConfig));
  } catch (err) {
    console.error(err)
  }

};

export default createFile;
