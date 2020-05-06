#!/usr/bin/env node
import * as index from './methods';
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
    this.chalk = chalk;
    this.figlet = figlet;
    this.clear = clear;
    this.inquirer = inquirer;
    this.curI = 0;
    this.focus = 'menu';
    this.databaseTypes = new Set()
    this.filesystemTypes = new Set()
    this.Menu = prompts.Menu

    this.globalConfig = {
      databases: {},
      filesystems: {},
      models:{}
    };

 
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

export default CLI
