// import React from 'react';
// import './App.css';
// import LoginSignup from './Pages/LoginSignup';
// // import Bgvid from './Pages/Bgvid'
// // import './Assets/Bgvid';
// function App() {
//   return (
//     <div className="App">
//       {/* <Bgvid/> */}
//      <div className="App-header"> 
//         <LoginSignup/>
//       </div>
//      </div>
//   );
// }

// export default App;

import React from 'react'
import LoginPage from './Pages/login';
import BG from './Pages/BackGr';

  function App() {
    return (
      <div>
        <LoginPage/>
         <BG/>
      </div>
    )
  }
  
  export default App