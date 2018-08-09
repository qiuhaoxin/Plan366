import * as ActionType from '../actions/actionTypes';
export const initState={
    userName:'邱浩新',
    phoneNum:'15817497845',
    loadStatus:0,//0：未登录 1：已登录
	loading:false,
	tips:'',
	userInfo:null
}

export const user=(state=initState,action)=>{
	switch(action.type){
		case 'register':
		    console.log("action is "+JSON.stringify(action));
            return {
            	...state,
                ...action.payload,
            }
		break;
		case 'login':
            return {
            	...state,
                ...action.payload,
            }
		break;
		case 'changePsw':

		break;
		case ActionType.GET_PERSON://获取用户信息
            return {
            	...state,
            	userInfo:{
            		...state.userInfo,
            		...action.payload,
            	}
            }
		break;
		case ActionType.EDIT_PERSON://编辑用户
     
		break;

		default :
            return state;
		break;
	}
}