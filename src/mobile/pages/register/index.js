import React,{Component} from 'react';
import Styles from './index.less';
import PropTypes from 'prop-types';
import {Button,Tip} from '@haoxin_qiu/reactwebcomponent';
import {isEmpty} from '../../../utils/utils';

import {connect} from 'react-redux';
import {RegisterAction} from '../../actions/userAction';
class Register extends Component{
	constructor(props){
		super(props);
	}
  state={
    name:'',
    phonenum:'',
    psw:'',
    repsw:'',
  }
	componentDidMount(){

	}
  validate=()=>{
     const {name,phonenum,psw,repsw}=this.state;
     if(isEmpty(name)){
        console.log("name is isEmpty");
        return false;
     }
     if(isEmpty(phonenum)){
        console.log("phonenum is empty!");
        return;
     }
     if(isEmpty(psw
      ))

  }
  handleInputChange=(e,key)=>{

  }
  handleBtnClick=()=>{
    this.validate();
    console.log("submit");
  }
	render(){
        return (
           <div className={Styles.wrapper}>
              <div className={Styles.innerWrapper}>
                <div className={Styles.row}>
                   <label>用户名:</label>
                   <input placeholder={"请输入用户名"} onChange={(e)=>this.handleInputChange(e,'name')}/>
                </div>
                <div className={Styles.row}>
                   <label>电话:</label>
                   <input placeholder={"请输入电话号码"} onChange={(e)=>this.handleInputChange(e,'phonenum')}/>
                </div>
                <div className={Styles.row}>
                   <label>密码:</label>
                   <input placeholder={"请输入密码"} onChange={(e)=>this.handleInputChange(e,'psw')}/>
                </div>
                <div className={Styles.row}>
                   <label>重复密码:</label>
                   <input placeholder={"请输入重复密码"} onChange={(e)=>this.handleInputChange(e,'repsw')}/>
                </div>
                <div className={Styles.row}>
                     <Button onClick={this.handleBtnClick} type='primary'>提交</Button>
                </div>
                <Tip tipContent="test" visible={true} type="error"></Tip>
              </div>
           </div>
        )
	}
}
const mapStateToProps=state=>{
  return {

  }
}
const wrapperFunc=(payload,func,dispatch)=>{
   if(typeof func=='function'){
     return func(payload)(dispatch);
   }
}
const mapDispatchToProps=dispatch=>{
  return {
    registerUser:(payload)=>wrapperFunc(payload,RegisterAction,dispatch),
  }
}
export default connect(mapStateToProps,)(Register);