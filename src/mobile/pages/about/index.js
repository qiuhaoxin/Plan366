import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import {Image} from '@haoxin_qiu/reactwebcomponent';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getPersonAction,editPersonAction} from '../../actions/userAction';

import {wrapperFunc,isEmpty} from '../../../utils/utils';

import Me from '../../../img/haoxin_qiu.jpg';
class About extends Component{
	constructor(props){
		super(props);
	}
	componentWillReceiveProps(nextProps){
        console.log("nextProps is "+JSON.stringify(nextProps));
	}
	componentDidMount(){
		const {getPersonAPI,phoneNum}=this.props;
        console.log("phoneNum is "+phoneNum);
        getPersonAPI({phoneNum});
	}
	render(){
		return (
            <div className={Styles.wrapper}>
                 <Header midContent={"我"}/>
                 <div className={Styles.content}>
                      <div className={Styles.row}>
	                       <Image imgSrc={Me} imgStyle={{width:'140px',height:'140px','borderRadius':'50%'}}/>
                      </div>
                      <div className={Styles.row}>

                      </div>
                 </div>
            </div>
		)
	}
}
const mapStateToProps=state=>{
	return {
        phoneNum:state.user.phoneNum,
        userInfo:state.user.userInfo,
	}
}
const mapDispatchToProps=dispatch=>{
	return {
        getPersonAPI:payload=>wrapperFunc(payload,getPersonAction,dispatch),
        editPersonAPI:payload=>wrapperFunc(payload,editPersonAction,dispatch),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(About);