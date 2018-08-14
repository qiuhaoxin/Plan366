import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {Button,Tip} from '@haoxin_qiu/reactwebcomponent';
import {isEmpty,wrapperFunc} from '../../../utils/utils';
import {changePswAction} from '../../actions/userAction';

class ChangePsw extends Component{
	constructor(props){
		super(props);
	}
	state={
		oldPsw:'',
		newPsw:'',
		rePsw:'',
		tipContent:'',
		tipVisible:false,
	}
	componentDidMount(){
        const {userName}=this.props;
        console.log("userName is "+userName);
	}
	componentWillReceiveProps(nextProps){
		console.log("nextProps is "+JSON.stringify(nextProps));
        if(nextProps.result==-1 && !isEmpty(nextProps.message)){
        	this.setState({
        		tipContent:nextProps.message,
        		tipVisible:true,
        	})
        }
	}

	handleInputChange=(e,key)=>{
        this.setState({
            [key]:e.target.value,
        })
	}
	showTip=(tipContent)=>{
        this.setState({
        	tipVisible:true,
        	tipContent,
        })
	}
	validate=()=>{
		const {oldPsw,newPsw,rePsw}=this.state;
		if(isEmpty(oldPsw)){
			this.showTip('请输入旧密码!');
			return false;
		}
		if(isEmpty(newPsw)){
            this.showTip('请输入新密码!');
			return false;
		}
		if(isEmpty(rePsw)){
			this.showTip('请输入确认密码!');
			return false;
		}
		if(rePsw!==newPsw){
			this.showTip("新密码和确认密码不一致!");
			return false;
		}
		return true;
	}
	handleHideTip=()=>{
		this.setState({
			tipVisible:false,
		})
	}
	handleSubmit=()=>{
        const {oldPsw,newPsw,rePsw}=this.state;
        const {phoneNum}=this.props;
        const result=this.validate();
        if(!result)return;
        this.props.submitAPI({phoneNum,oldPsw,newPsw,rePsw});
	}
	render(){
		const {phoneNum}=this.props;
        const {oldPsw,newPsw,rePsw,tipVisible,tipContent}=this.state;
        return (
           <div className={Styles.wrapper}>
              <Header midContent={"修改密码"}/>
              <div className={Styles.content}>
                  <div className={Styles.row}>
                      <label>手机号：</label>
                      <input value={phoneNum} disabled={true}/>
                  </div>
                  <div className={Styles.row}>
                      <label>旧密码</label>
                      <input placeholder={"请输入"} value={oldPsw} onChange={(e)=>this.handleInputChange(e,'oldPsw')}/>
                  </div>
                  <div className={Styles.row}>
                      <label>新密码</label>
                      <input placeholder={"请输入"} value={newPsw} onChange={(e)=>this.handleInputChange(e,'newPsw')}/>
                  </div>
                  <div className={Styles.row}>
                      <label>确认密码</label>
                      <input placeholder={"请输入"} value={rePsw} onChange={(e)=>this.handleInputChange(e,'rePsw')}/>
                  </div>
                  <Button styleObj={{width:'90%',marginTop:'20px',marginLeft:'0'}} type='primary' onClick={this.handleSubmit}>提交</Button>
                  <Tip onHideCallback={this.handleHideTip} visible={tipVisible} tipContent={tipContent}></Tip>
              </div>
           </div>
        )
	}
}

ChangePsw.propTypes={

}
ChangePsw.defaultProps={

}
const mapStateToProps=state=>{
	return {
       userName:state.user.userName,
       phoneNum:state.user.phoneNum,
       result:state.user.result,
       message:state.user.message,
	}
}
const mapDispatchToProps=dispatch=>{
    return {
        submitAPI:payload=>wrapperFunc(payload,changePswAction,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangePsw);
