import {Switch,HashRouter,Redirect,Route,withRouter} from 'react-router-dom';
import React,{Component} from 'react';
import asyncComponent from '../../utils/asyncComponent';

import MainPage from '../pages/mainpage/index.js';
const Register=asyncComponent(()=>import('../pages/register/index.js'));
const Login=asyncComponent(()=>import('../pages/login/index.js'));
const About=asyncComponent(()=>import('../pages/about/index.js'));
const DayPlan=asyncComponent(()=>import('../pages/dayPlan/index.js'));
const NewPlan=asyncComponent(()=>import('../pages/newPlan/index.js'));
class Router extends Component{
  
    render(){
    	return (
           <HashRouter>
               <Switch>
                   <Route exact path="/register" component={Register} />
                   <Route exact path="/login" component={Login} />
                   <Route path="/main" component={MainPage} />
                   <Route path='/me' component={About}/>
                   <Route path='/dayplan' component={DayPlan} />
                   <Route path='/newPlan/:type' component={NewPlan}/>
                   <Redirect to="/main"/>
               </Switch>
           </HashRouter>
    	)
    }
}
export default Router;