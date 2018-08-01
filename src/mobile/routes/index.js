import {Switch,HashRouter,Redirect,Route} from 'react-router-dom';
import React,{Component} from 'react';
import asyncComponent from '../../utils/asyncComponent';

import MainPage from '../pages/mainpage/index.js';
const RegisterPage=asyncComponent(()=>import('../pages/register/index.js'));
const LoginPage=asyncComponent(()=>import('../pages/login/index.js'))
class Router extends Component{
  
    render(){
    	return (
           <HashRouter>
               <Switch>
                   <Route exact path='/' component={MainPage}/>
                   <Route exact path="/register" component={RegisterPage} />
                   <Route exact path="/login" component={LoginPage} />
                   <Route exact path="/main" component={MainPage} />
               </Switch>
           </HashRouter>
    	)
    }
}
export default Router;