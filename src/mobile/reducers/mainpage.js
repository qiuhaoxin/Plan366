import * as ActionType from '../actions/actionTypes';
const initState={
    data:{
       list:[],
       pagination:{
	       currentPage:1,
	       pageSize:10,
	       total:0,
       }
    },
    result:-1,
    message:'',
}
export const mainpage=(state=initState,action)=>{
	switch(action.type){
		case ActionType.GET_PLAN_TYPE_LIST:
           return {
           	  ...state,
           	  ...action.payload,
           }
		break;
		default :
           return state;
		break;
	}
}