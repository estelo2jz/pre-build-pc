import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import './styles/tc.scss';

export default class TC extends Component {
  render() {
    return (
      <div className="tc__outer-container">
        <div className="tc__outer-inner">Currently Buiilding This Page.</div>
      </div>
    )
  }
}


// import React, { useState, useEffect } from 'react'
// import LoadingScreen from './loading'


// function TC() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1500)
//   }, [])

//   return (
//     <>
//     {loading === false ? (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//       ) : (
//         <LoadingScreen />
//       )}
//       </>
//   );
// }

// export default TC;