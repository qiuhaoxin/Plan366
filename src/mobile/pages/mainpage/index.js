import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PageView from '../../components/PageView';

class MainPage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
           <div>
               <PageView />
           </div>
		)
	}
}

export default MainPage;