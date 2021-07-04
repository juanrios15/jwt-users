import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignUp from './Components/Register';
import SignIn from './Components/Login';
import Logout from './Components/Logout';


const routing = (
  <Router>
    <React.StrictMode>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route path="/logout" component={Logout} />
      </Switch>
      <Footer/>
    </React.StrictMode>
  </Router>
  
)


ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
