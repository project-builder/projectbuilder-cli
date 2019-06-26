
const main = function(){
  const mainMenu = [
     {
       name: "menu",
       type: "list",
       message: "Please Select an Action",
       choices: [
         `Set up models`,
         `Set up databases`,
         `Set up fileSystems`,
         `Show config file`,
        `Create Project`
       ],
       filter: (answer: any) => {
         switch (answer) {
           case `Set up models`: return `model`
           case `Set up databases`: return `database`
           case `Set up fileSystems`: return `filesystem`
           case `Show config file`: return `showConfig`
           case `Create Project`: return `createProject`
           default:

         }
       }
     },
   ]


  return mainMenu

}

export default main
