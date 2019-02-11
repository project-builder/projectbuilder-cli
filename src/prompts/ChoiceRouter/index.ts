import Setup from '../Setup'
import Main from '../Main'


const ChoiceRouter = {
  new: Setup,
  main: Main
  // main: this

}

// const ChoiceRouter = function(choice) {
//   console.log('CCR', choice);
//   switch (choice) {
//     case 'new': Setup
//       break;
//     case 'main': this.run
//     default:
//
//   }
  // new: Setup,
  // main: Main
  // main: this

// }

export default ChoiceRouter
