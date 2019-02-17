#!/usr/bin/env node
import * as index from './methods/index.js';
import * as inquirer from 'inquirer';
import * as clear from  'clear';
import * as chalk from 'chalk';
import figlet from 'figlet';
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
projectTitle: any;
Edit: any;
Setup: any;
dbCreator: any;

  constructor() {
    clear();
    this.projectTitle = process.argv[2]
    this.init(this.projectTitle);
    // databaseCreator.sayHi();
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
    // this.run();

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
    // Menu = prompts.Menu;

}

export default CLI
