import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import Header from '../../components/Header';
import {withRouter} from 'react-router-dom';

//计划类型
class PlanType extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	handleBack=()=>{
		console.log("PlanType left click");
		this.props.history.push("/main/me");
	}
	handleHeaderRightClick=()=>{
        console.log("new");
	}
	render(){
       return (
         <div className={Styles.wrapper}>
             <Header midContent={"计划类型"} leftWrapperVisible={true} leftClick={this.handleBack}
                rightContent={'new'} rightClick={this.handleHeaderRightClick}/>
             <div className={Styles.content}>

             </div>
         </div>
       )
	}
}

PlanType.propTypes={

}
PlanType.defaultProps={

}

export default withRouter(PlanType);