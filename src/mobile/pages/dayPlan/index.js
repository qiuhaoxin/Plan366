import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Styles from './index.less';
import {isEmpty,wrapperFunc} from '../../../utils/utils';
import Header from '../../components/Header';

class DayPlan extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
        const {phoneNum}=this.props;
        console.log("phoneNum is "+phoneNum);
	}
	handleHeaderLeftClick=()=>{
       
	}
	renderHeaderLeft=()=>{
		return <span onClick={this.handleHeaderLeftClick}>new</span>
	}
	render(){
       return (
         <div className={Styles.wrapper}>
             <Header leftContent={this.renderHeaderLeft} midContent={'日计划'} />
          
         </div>
       )
	}
}
const mapStateToProps=state=>{
	return {
        phoneNum:state.user.phoneNum,

	}
}
const mapDispatchToProps=dispatch=>{
	return {
        
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(DayPlan);
