import {Switch,HashRouter,Redirect,Route,withRouter} from 'react-router-dom';
import React,{Component} from 'react';
import asyncComponent from '../../utils/asyncComponent';

import MainPage from '../pages/mainpage/index.js';
const Register=asyncComponent(()=>import('../pages/register/index.js'));
const Login=asyncComponent(()=>import('../pages/login/index.js'));
class Router extends Component{
  
    render(){
    	return (
           <HashRouter>
               <Switch>
                   <Route exact path="/register" component={Register} />
                   <Route exact path="/login" component={Login} />
                   <Route exact path="/main" component={MainPage} />
                   <Redirect to="/main"/>
               </Switch>
           </HashRouter>
    	)
    }
}
export default Router;