import React,{Component} from 'react';
import Styles from './index.less';
import PropTypes from 'prop-types';
import {Button,Tip} from '@haoxin_qiu/reactwebcomponent';
import {isEmpty} from '../../../utils/utils';
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header';

import {connect} from 'react-redux';
import {RegisterAction} from '../../actions/userAction';
class Register extends Component{
	constructor(props){
		super(props);
    this.tipContent="";
	}
  state={
    name:'',
    phonenum:'',
    psw:'',
    repsw:'',
    showTip:false,
  }
	componentDidMount(){

	}
  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.userName) && nextProps.userName!=this.props.userName){
       this.props.history.push('login');
    }
  }
  validate=()=>{
     const {name,phonenum,psw,repsw}=this.state;
     if(isEmpty(name)){
        console.log("name is isEmpty");
        this.tipContent="name is isEmpty"
        this.setState({
          showTip:true,
        })
        return false;
     }
     if(isEmpty(phonenum)){
        console.log("phonenum is empty!");
        return false;
     }
     if(isEmpty(psw)){
        console.log("psw is empty！");
        return false;
     }
     if(isEmpty(repsw)){
        console.log("repsw is empty！");
        return false;
     }
     if(repsw!=psw){
        console.log("repsw and psw not equal！");
        return false;
     }
    return true;
  }
  handleInputChange=(e,key)=>{
    this.setState({
      [key]:e.target.value,
    })
  }
  handleBtnClick=()=>{
    const {registerUser}=this.props;
    const {psw,phonenum,name}=this.state;
    const result=this.validate();
    if(result){
      registerUser({psw,phonenum,name});
    }
    console.log("submit");
  }
	render(){
        const {showTip}=this.state;
        return (
           <div className={Styles.wrapper}>
              <Header midContent={"用户注册"}></Header>
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
                <Tip tipContent="test" visible={showTip}  type="error"></Tip>
              </div>
           </div>
        )
	}
}
const mapStateToProps=state=>{
  return {
     userName:state.user.userName,
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Register));