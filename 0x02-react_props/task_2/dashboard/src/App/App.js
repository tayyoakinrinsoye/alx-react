import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
      </React.Fragment>  
  );
}

export default App;