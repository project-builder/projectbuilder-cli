
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
       filter: (answer) => {
         switch (answer) {
           case `Set up models`: return `model`
             break;
           case `Set up databases`: return `database`
             break;
           case `Set up fileSystems`: return `filesystem`
               // break;
           case `Show config file`: return `showConfig`
            break;
           case `Create Project`: return `createProject`
           default:

         }
       }
     },
   ]


  return mainMenu

}

export default main
