require('isomorphic-fetch');
import request from '../../utils/request';

const urlObj={
	'dev':'http://172.20.70.42:8099',
	'prod':'',
}
let postUrl="";
if(REQUESTURL && REQUESTURL=='test'){
   postUrl=urlObj['dev'];
}else{
	postUrl=urlObj['prod'];
}

//注册用户
export function register(params){
	console.log("params is "+JSON.stringify(params));
	return request(postUrl+"/user/register",{
		method:'POST',
		body:params,
	})
}

//登录
export function login(params){
	return request(postUrl+"/user/login",{
		method:'POST',
		body:params,
	})
}

//忘记密码
export function forgetPsw(params){
	return request(postUrl+"/user/forgetPsw",{
		method:'POST',
		body:params,
	})
}