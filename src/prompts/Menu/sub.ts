
const sub = function(subject: any){
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
       filter: (answer: any) => {
         switch (answer) {
           case `Setup a new ${subject}`: return `new`
           case `Edit an existing ${subject}`: return `edit`
           case `Return to Main Menu`: return `main`
           default:
         }
       }
     },
   ]
  return subMenu
}

export default sub
