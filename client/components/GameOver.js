// import React from 'react'
// import Typed from 'typed.js'
// import KeyboardEventHandler from 'react-keyboard-event-handler'
// import history from '../history'

// class GameOver extends React.Component {
//   componentDidMount() {
//     const options = {
//       strings: [
//         'Unfortunately, ^300 you did not stop the breach. ^700 <br> Play again? ^300 <br> Hit ENTER to restart...'
//       ],
//       startDelay: 1000,
//       typeSpeed: 70,
//       backSpeed: 70
//     }
//     this.typed = new Typed(this.el, options)
//   }

//   componentWillUnmount() {
//     this.typed.destroy()
//   }

//   render() {
//     return (
//       <div>
//         <KeyboardEventHandler
//           handleKeys={['enter', 'return']}
//           onKeyEvent={(key, e) => history.push('/levelOne')}
//         />
//         <div className="text-editor-wrap">
//           <div className="title-bar">
//             <span className="title">🔒Confidential-File - bash - 80x24</span>
//           </div>
//           <div className="text-body">
//             $
//             <span
//               ref={el => {
//                 this.el = el
//               }}
//             />
//             <span className="typed-cursor" />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default GameOver
