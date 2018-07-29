import {Switch,HashRouter,Redirect,Route} from 'react-router-dom';
import React,{Component} from 'react';

import MainPage from '../pages/mainpage/index.js';1
class Router extends Component{
  
    render(){
    	return (
           <HashRouter>
               <Switch>
                   <Route exact path='/' component={MainPage}/>
               </Switch>
           </HashRouter>
    	)
    }
}
export default Router;