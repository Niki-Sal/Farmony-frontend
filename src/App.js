// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';
//Routes
import routes from './config/routes'
// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import CommunityBoards from './components/CommunityBoards'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Holistic from './components/Holistic'
import Trade from './components/Trade'
import Buy from './components/Buy'

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

 
  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      <div className="nav">
        {/* <CommunityBoards /> */}
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        <Switch className="switch">
          <Route path='/signup' component={Signup} />
          <Route 
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          
          <Route path="/about" component={About} />
          <Route path="/holistichub" component={Holistic} />
          <Route exact path='/buy' component={Buy} />
          {/* <Route path="/trade" component={Trade} /> */}
        </Switch>

        
      </div>
      {routes}
      <Footer />
    </div>
  );
}

export default App;