
const sub = function(subject){
   const subMenu = [
     {
       name: "menu",
       type: "list",
       message: "Please Select an Action",
       choices: [
         `Setup a new ${subject}`,
         `Edit an existing ${subject}`,
         `Return to Main Menu`,
       ],
       filter: (answer) => {
         switch (answer) {
           case `Setup a new ${subject}`: return `new`
             break;
           case `Edit an existing ${subject}`: return `edit`
             break;
           case `Return to Main Menu`: return `main`
           default:
         }
       }
     },
   ]
  return subMenu
}

export default sub
