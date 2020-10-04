import React, { useEffect, useContext } from 'react';
import './App.css';

// import Navbar from "./components/navbars/header/header";
// import UserContext from "./context/user/userContext";

import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from './context/UserContext';
import NavBar  from './components/navbar/navbar';
import Footer from './components/footer/footer';

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
        <NavBar/>
        <Routes />
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
