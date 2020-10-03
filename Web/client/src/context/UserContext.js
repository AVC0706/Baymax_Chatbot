import React, { Component } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/authToken';

const UserContext = React.createContext();

class UserProvider extends Component {
  // Context state
  state = {
    user: {},
  };

  // Method to update state
  setUser = (user) => {
    this.setState({ user });
  };

  logout = () => {
    this.setState({});
  };

  // Load User
  loadUser = () => {
    //start
    //load token to global
    if (localStorage.getItem('token')) {
      setAuthToken(localStorage.getItem('token'));
    }

    axios.get('http://localhost:5000/api/users/isAuth').then((res) => {
      const data = res.data;
      console.log(data);
      this.setState({ user: data.user });
    });
  };

  render() {
    const { children } = this.props;
    const { user } = this.state;
    const { setUser, logout, loadUser } = this;

    return (
      <UserContext.Provider
        value={{
          user,
          setUser,
          logout,
          loadUser,
        }}
      >
        {' '}
        {children}{' '}
      </UserContext.Provider>
    );
  }
}
export default UserContext;
export { UserProvider };
