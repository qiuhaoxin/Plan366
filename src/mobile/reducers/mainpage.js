import {initState} from './user.js';

export const mainpage=(state=initState,action)=>{
	switch(action.type){
		case 'getList':

		break;
		default :
           return state;
		break;
	}
}