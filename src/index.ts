// #!/usr/bin/env node
import * as index from './methods/index.js';
import * as inquirer from 'inquirer';
import * as clear from  'clear';
import * as chalk from 'chalk';
import figlet from 'figlet';
import * as keypress from 'keypress';
import * as prompts from './prompts'


class CLI {

  chalk: any;
  figlet: any;
  clear: any;
  inquirer: any;
  globalConfig: any;
  projectName: any;
  choices: any;
  keypress: any;
  curI: any;
  focus: any;
  prompts: any;
  Menu: any;
ChoiceRouter: any;
Creator: any;
databaseTypes: any;
filesystemTypes: any;

  constructor() {
    clear();
    this.init();
    this.keypress = keypress;
    this.chalk = chalk;
    this.figlet = figlet;
    this.clear = clear;
    this.inquirer = inquirer;
    this.curI = 0;
    this.focus = 'menu';
    this.databaseTypes = new Set()
    this.filesystemTypes = new Set()

    this.globalConfig = {
      databases: {},
      filesystems: {},
      models:{}
    };
    this.Menu = prompts.Menu
this.ChoiceRouter = prompts.ChoiceRouter
this.Creator = prompts.Creator
  }



    run = index.run;
    promptProjectName = index.promptProjectName;
    init = index.init;
    createFile = index.createFile;
    display = index.display;
    showMenu=index.showMenu;
    showConfig = index.showConfig;
    promptNew = index.promptNew;
    writeConfig = index.writeConfig;
}

let doShit = async () => {
  const myCLI = new CLI();

myCLI.run();
   // await myCLI.run();

  // console.log('=========================')
// console.log(myCLI.globalConfig)
//   console.log('=========================')


  // console.log('doo', doo)
  // myCLI.createFile('mySampleProject', myCLI.globalConfig);
  // myCLI.createFile();




}

doShit();
