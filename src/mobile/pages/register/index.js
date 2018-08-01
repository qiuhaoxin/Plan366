import React,{Component} from 'react';
import Styles from './index.less';
import PropTypes from 'prop-types';

class Register extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	render(){
        return (
           <div className={Styles.wraper}>
                <div className={Styles.row}>
                   <label value="用户名:"/>
                   <input placeholder={"请输入用户名"}/>
                <div>
                <div className={Styles.row}>
                   <label value="电话号码:"/>
                   <input placeholder={"请输入电话号码"}/>
                <div>
                <div className={Styles.row}>
                   <label value="密码:"/>
                   <input placeholder={"请输入密码"}/>
                <div>
                <div className={Styles.row}>
                   <label value="重复密码:"/>
                   <input placeholder={"请输入重复密码"}/>
                <div>
           </div>
        )
	}
}
Register.defaultProps={

}
Register.propTypes={

}
export default Register;