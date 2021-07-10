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
import SignUp from './Components/Posts/Register';
import SignIn from './Components/Posts/Login';
import Logout from './Components/Posts/Logout';
import SinglePost from './Components/SinglePost';
import Search from './Components/Posts/search';
import Admin from './Admin';
import Create from './Components/Admin/Create';
import Delete from './Components/Admin/Delete';
import Update from './Components/Admin/Update';


const routing = (
  <Router>
    <React.StrictMode>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/create" component={Create} />
        <Route exact path="/admin/delete/:id" component={Delete} />
        <Route exact path="/admin/update/:id" component={Update} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route path="/logout" component={Logout} />
        <Route path="/post/:slug" component={SinglePost} />
        <Route path="/search" component={Search} />
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
