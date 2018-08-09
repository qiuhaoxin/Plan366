import {fetchPlanList,submitPlan} from '../services/api';

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