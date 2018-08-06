
export const initState={
    userName:'',
    loadStatus:0,//0：未登录 1：已登录
	loading:false,
	tips:'',
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
		default :
            return state;
		break;
	}
}