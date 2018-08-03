import {register,login} from '../services/api';
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
