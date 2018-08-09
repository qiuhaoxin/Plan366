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

//获取用户信息
export function getPersonByPhone(params){
	return request(postUrl+"/user/getPerson",{
		method:'POST',
		body:params,
	})
}

//编辑用户信息
export function editPersons(params){
	return request(postUrl+"/user/editPerson",{
        method:'POST',
        body:params,
	})
}


//获取计划列表
export function fetchPlanList(params){
    return request(postUrl+"/dayplan/list",{
        method:'POST',
        body:params,
    })
}


//提交计划
export function submitPlan(params){
	return request(postUrl+"/dayplan/submitPlan",{
		method:'POST',
		body:params,
	})
}



