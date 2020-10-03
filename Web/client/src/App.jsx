import React, { useEffect, useContext } from 'react';
import './App.css';

// import Navbar from "./components/navbars/header/header";
// import UserContext from "./context/user/userContext";

import Routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login.page';
import HealthForm from './pages/login/userHealthForm';
import UserContext from './context/UserContext';

function App() {
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      userContext.loadUser();
    }
  }, []);

  return (
    <div>
      <Router>
        {/* <Navbar /> */}

        <Routes />
      </Router>
    </div>
  );
}

export default App;
