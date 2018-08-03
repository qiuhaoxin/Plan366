
export const initState={
    userName:'',
	loading:false,
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

		break;
		case 'changePsw':

		break;
		default :
            return state;
		break;
	}
}