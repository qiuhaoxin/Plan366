import React,{Component} from  'react';

export default function asyncComponent(importComponent){
	class AsyncComponent extends Component{
		constructor(props){
			super(props);
		}
		state={
			component:null,
		}
		async componentDidMount(){
           const {default:component}= await importComponent();
           this.setState({
           	   component,
           })
		}
		render(){
			const {component}=this.state;
            return {component==null?null : <component />}
		}
	}
	return AsyncComponent;
}