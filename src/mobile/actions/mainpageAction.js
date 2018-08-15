import {fetchPlanList,submitPlan,newPlanType,getPlanTypeList} from '../services/api';
import * as ActionType from './actionTypes';
export const SubmitPlanAction=(payload)=>{
    return async dispatch=>{
    	const response=await submitPlan(payload);
    	console.log("response is "+JSON.stringify(response));
    }
}


export const FetchPlanListAction=(payload)=>{
	return async dispatch=>{
		const response=await fetchPlanList(payload);

	}
}

//新增计划类型
export const newPlanTypeAction=(payload)=>{
	return async dispatch=>{
		const response=await newPlanType(payload);
		console.log("response is "+JSON.stringify(response));
        dispatch({type:ActionType.NEW_PLAN_TYPE,payload:response});
	}
}

//获取计划类型列表
export const getPlanTypeListAction=(payload)=>{
	return async dispatch=>{
		const response=await getPlanTypeList(payload);
		console.log("response is "+JSON.stringify(response));
		dispatch({type:ActionType.GET_PLAN_TYPE_LIST,payload:response});
	}
}