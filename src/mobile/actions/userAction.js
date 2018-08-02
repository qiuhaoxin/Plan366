import {register,login} from '../services/api';
import * as ActionType from './actionTypes';
//注册
export const RegisterAction=(payload)=>{
    return async dispath=>{
    	const response=await register(payload);
    	console.log("resonse is "+JSON.stringify(response));
    	dispath({action:ActionType.REGISTER,payload:response});
    }
}
