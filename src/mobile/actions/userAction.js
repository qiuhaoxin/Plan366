import {register,login,getPersonByPhone,editPersons,changePsw} from '../services/api';
import * as ActionType from './actionTypes';
console.log("ActionType is "+ActionType.REGISTER);
//注册
export const RegisterAction=(payload)=>{
    return async dispath=>{
    	const response=await register(payload);
    	console.log("resonse is "+JSON.stringify(response));
    	if(response && response.result==1){
    	   dispath({type:ActionType.REGISTER,payload:response['data']});
    	}
    }
}

export const LoginAction=(payload)=>{
	return async dispath=>{
		const response=await login(payload);
		console.log("response is "+JSON.stringify(response));
		if(response && response.result==1){
			dispath({type:ActionType.LOGIN,payload:response['data']});
		}
	}
}


export const getPersonAction=(payload)=>{
	return async dispath=>{
		const response=await getPersonByPhone(payload);
		console.log("response is "+JSON.stringify(response));
		if(response && response.result==1){
			dispath({type:ActionType.GET_PERSON,payload:response.data[0]})
		}
	}
}


export const editPersonAction=(payload)=>{
	return async dispath=>{
		const response=await editPersons(payload);
		console.log("response is "+JSON.stringify(response));
		if(response && response.result==1){
			dispath({type:ActionType.EDIT_PERSON,payload:response.data});
		}
	}
}

export const changePswAction=(payload)=>{
	return async dispath=>{
		const response=await changePsw(payload);
		console.log("response is "+JSON.stringify(response));
        dispath({type:ActionType.CHANGE_PSW,payload:response})
	}
}
