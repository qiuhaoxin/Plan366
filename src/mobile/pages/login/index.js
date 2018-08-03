import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

class Login extends Component{
	constructor(props){
		super(props);
	}
	state={
        phonenum:'',
        psw:'',
	}
	handleInputChange=(e,key)=>{
       this.setState({
       	 [key]:e.target.value,
       })
	}
	render(){
		return (
            <div className={Styles.wrapper}>
                <div className={Styles.row}>
                   <label>电话:</label>
                   <input placeholder={"请输入电话号码"} onChange={(e)=>this.handleInputChange(e,'phonenum')}/>
                </div>
                <div className={Styles.row}>
                   <label>密码:</label>
                   <input placeholder={"请输入密码"} onChange={(e)=>this.handleInputChange(e,'psw')}/>
                </div>
            </div>
		)
	}
}

export default Login;