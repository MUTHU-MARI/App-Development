import React from 'react';
import '../assets/Dashboard.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Header from './Header';
// import Navbar from './Navbar';

import RightSide from './RigtSide/RightSide';

import '../assets/Main.css'
import Updates from './Updates/Updates';
import MainDash from './MainDash/MainDash';
// import '../assets/Sidebar.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
     
      <Header/>
      <Sidebar />
      
   <MainDash/>

   
    </div>
  );
};

export default Dashboard;










// import React from 'react';
// import '../assets/Dashboard.css';
// import Sidebar from './Sidebar';
// import MainContent from './MainContent';
// import Header from './Header';


// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Header/>
//       <Sidebar />
//       <MainContent />
//     </div>
//   );
// };

// export default Dashboard;