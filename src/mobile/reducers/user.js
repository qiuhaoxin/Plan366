
export const initState={
	user:{

	},
	loading:false,
	mainpage:{

	}
}

export const user=(state=initState,action)=>{
	switch(action.type){
		case 'register':
  
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