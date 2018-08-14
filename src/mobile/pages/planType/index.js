import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import Header from '../../components/Header';

//计划类型
class PlanType extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	
	render(){
       return (
         <div className={Styles.wrapper}>
             <Header midContent={"计划类型"} />
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

export default PlanType;