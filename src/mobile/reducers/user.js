
export const initState={
	user:{
       userName:'',
	},
	loading:false,
	mainpage:{

	}
}

export const user=(state=initState,action)=>{
	switch(action.type){
		case 'register':
		    console.log("action is "+JSON.stringify(action));
            return {
            	...state,
            	user:{
            		...state.user,
            	    ...action.payload,
            	}
            }
		break;
		case 'login':

		break;
		case 'changePsw':

		break;
		default :
            return state;
		break;
	}
}